import { visit, SKIP } from 'unist-util-visit';
import { SORTED_AUTOLINK_RULES } from '../config/autolinks.ts';

/**
 * Remark plugin: mengubah frasa tertentu di paragraf artikel menjadi
 * tautan internal ke halaman layanan. Dibatasi 1 tautan per URL per artikel
 * agar tidak spam, dan 2 tautan untuk halaman utama.
 */
export function remarkAutolinks(options = {}) {
  const maxLinksPerUrl = options.maxLinksPerUrl || 1;
  const maxLinksForHub = options.maxLinksForHub || 2;

  return (tree, file) => {
    const filePath = file?.history?.[0] || file?.path || '';
    if (filePath && !filePath.includes('/posts/') && !filePath.includes('\\posts\\')) {
      return;
    }

    const linkedCount = new Map();

    function transformTextNode(node, index, parent) {
      if (node.type !== 'text' || !parent || parent.type === 'link') {
        return index + 1;
      }

      for (const rule of SORTED_AUTOLINK_RULES) {
        const currentCount = linkedCount.get(rule.url) || 0;
        const maxAllowed = rule.url === '/' ? maxLinksForHub : maxLinksPerUrl;
        if (currentCount >= maxAllowed) continue;

        const escaped = rule.phrase.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regex = new RegExp(`(^|[^a-zA-Z0-9_-])(${escaped})([^a-zA-Z0-9_-]|$)`, 'i');
        const match = node.value.match(regex);

        if (match && match.index !== undefined) {
          const prefix = match[1];
          const matchedWord = match[2];
          const matchStart = match.index + prefix.length;
          const matchEnd = matchStart + matchedWord.length;

          const before = node.value.slice(0, matchStart);
          const after = node.value.slice(matchEnd);

          linkedCount.set(rule.url, currentCount + 1);

          const newChildren = [];
          if (before) newChildren.push({ type: 'text', value: before });
          newChildren.push({
            type: 'link',
            url: rule.url,
            children: [{ type: 'text', value: matchedWord }],
          });
          if (after) newChildren.push({ type: 'text', value: after });

          parent.children.splice(index, 1, ...newChildren);

          let nextIndex = index;
          for (let i = 0; i < newChildren.length; i++) {
            if (newChildren[i].type === 'text') {
              nextIndex = transformTextNode(newChildren[i], index + i, parent);
            }
          }
          return nextIndex;
        }
      }
      return index + 1;
    }

    visit(tree, (node, index, parent) => {
      if (
        node.type === 'heading' ||
        node.type === 'link' ||
        node.type === 'code' ||
        node.type === 'inlineCode' ||
        node.type === 'html'
      ) {
        return SKIP;
      }

      if (node.type === 'text') {
        transformTextNode(node, index, parent);
        return SKIP;
      }
    });
  };
}

export default remarkAutolinks;
