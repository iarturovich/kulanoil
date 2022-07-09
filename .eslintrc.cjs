/* eslint-env node */
module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  rules: {
    'no-useless-escape': 'off',
    'comma-dangle': ['error', 'never'],
    quotes: ['error', 'single'],
    'no-multiple-empty-lines': [
      'error',
      {
        max: 1,
        maxEOF: 0
      }
    ],
    semi: ['error', 'never'],
    'space-infix-ops': ['error'],
    'object-curly-spacing': ['error', 'always'],
    'no-multi-spaces': ['error'],
    'key-spacing': [
      2,
      {
        beforeColon: false,
        afterColon: true
      }
    ],
    indent: ['error', 2, { SwitchCase: 1 }],
    'no-trailing-spaces': 'error',
    'padded-blocks': [
      'error',
      {
        blocks: 'never'
      }
    ],
    'no-tab': 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        multiline: 'never'
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 1
        },
        multiline: {
          max: 1
        }
      }
    ],
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below'
      }
    ],
    'vue/v-on-event-hyphenation': [
      'warn',
      'never',
      {
        autofix: true
      }
    ],
    'vue/attribute-hyphenation': ['error', 'never'],
    'vue/require-explicit-emits': 'off',
    'vue/no-template-shadow': 'off',
    'vue/padding-line-between-blocks': ['error', 'always'],
    'vue/html-indent': [
      'error',
      2,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/require-default-prop': 'off'
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.spec.{js,ts,jsx,tsx}',
        'cypress/integration/**.spec.{js,ts,jsx,tsx}'
      ],
      extends: ['plugin:cypress/recommended']
    }
  ]
}
