module.exports = [
  {
    // Markdown is italics for some reason?? Sets all MD back to base normal style
    scope: 'meta.paragraph.markdown',
    settings: {
      fontStyle: 'normal'
    }
  },
  {
    // Inline code blocks: `code`
    scope: 'markup.inline.raw',
    settings: {
      foreground: '$green'
    }
  },
  {
    // Headers: ## Heading
    scope: 'punctuation.definition.heading',
    settings: {
      foreground: '$green'
    }
  },
  {
    // List punctuation: -
    scope: 'beginning.punctuation.definition.list',
    settings: {
      foreground: '$pink'
    }
  },
  {
    // Fenced code blocks
    scope: 'markup.fenced_code.block.markdown',
    settings: {
      foreground: '$lighter-gray'
    }
  },
]
