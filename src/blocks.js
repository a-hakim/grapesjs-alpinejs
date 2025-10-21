export default (editor, opts = {}) => {
  const bm = editor.BlockManager;
  const categoryLabel = opts.blockCategory || 'Alpine.js';

  // Accordion Block
  bm.add('alpine-accordion', {
    label: 'Accordion',
    category: categoryLabel,
    media: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
      <path d="M7 10h10v2H7zm0 4h10v2H7z"/>
    </svg>`,
    content: {
      type: 'alpine-accordion',
    },
  });

  // Tabs Block
  bm.add('alpine-tabs', {
    label: 'Tabs',
    category: categoryLabel,
    media: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h8v3h10v11z"/>
    </svg>`,
    content: {
      type: 'alpine-tabs',
    },
  });

  // Modal Block
  bm.add('alpine-modal', {
    label: 'Modal',
    category: categoryLabel,
    media: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14H6v-2h6v2zm6-4H6v-2h12v2zm0-4H6V7h12v2z"/>
    </svg>`,
    content: {
      type: 'alpine-modal',
    },
  });

  // Counter Block (Simple example)
  bm.add('alpine-counter', {
    label: 'Counter',
    category: categoryLabel,
    media: `<svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 14c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"/>
      <text x="12" y="14" text-anchor="middle" font-size="8" fill="currentColor">0</text>
    </svg>`,
    content: {
      type: 'alpine-counter',
    },
  });
};
