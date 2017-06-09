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
      foreground: '_green'
    }
  },
  {
    // Headers: ## Heading
    scope: 'punctuation.definition.heading',
    settings: {
      foreground: '_green'
    }
  },
  {
    // List punctuation: -
    scope: 'beginning.punctuation.definition.list',
    settings: {
      foreground: '_pink'
    }
  },
  {
    // Fenced code blocks
    scope: 'markup.fenced_code.block.markdown',
    settings: {
      foreground: '_lighter-gray'
    }
  },
]
