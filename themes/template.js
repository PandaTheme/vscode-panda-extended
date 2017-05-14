module.exports = [
  {
    // Tagged template hbs``
    scope: 'meta.source.handlebars entity.name.tag',
    settings: {
      foreground: '$light-blue'
    }
  },
  {
    // {{, {{{, () and </>
    scope: 'punctuation.definition.expression, punctuation.definition.subexpression, punctuation.definition.block.unescaped, punctuation.definition.tag',
    settings: {
      fontStyle: 'italic',
      foreground: '$light-orange'
    }
  },
  {
    // name: 'Expression Name',
    scope: 'entity.name.function.expression',
    settings: {
      foreground: '$pink'
    }
  },
  {
    // Unescaped value
    scope: 'entity.unescaped.expression',
    settings: {
      foreground: '$purple'
    }
  },
  {
    // Expression parameter NAME
    scope: 'entity.expression variable.parameter.name',
    settings: {
      foreground: '$orange'
    }
  },
  {
    // Expression parameter VALUE
    scope: 'entity.expression variable.parameter.value',
    settings: {
      foreground: '$light-blue'
    }
  },
  {
    // Ember built in helpers
    scope: 'entity.expression support.function.builtin',
    settings: {
      foreground: '$light-pink'
    }
  },
  {
    // HTML tag names
    scope: 'entity.name.tag.html',
    settings: {
      foreground: '$light-orange'
    }
  },
  {
    // HTML attribute NAME
    scope: 'entity.other.attribute-name.handlebars',
    settings: {
      foreground: '$light-orange'
    }
  }
]
