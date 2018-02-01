import * as path from 'path';

const maxCyclomaticComplexity = 20;
const maxLineLength = 130;

export const rulesDirectory = [
  path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules')
];

export const rules = {
  'align': [false],
  'array-bracket-spacing': [
    true,
    'never'
  ],
  'array-type': [
    true,
    'array'
  ],
  'arrow-parens': true,
  'ban': [],
  'binary-expression-operand-order': true,
  'block-spacing': [
    true,
    'always'
  ],
  'brace-style': false,
  'callable-types': true,
  'class-name': true,
  'comment-format': [false],
  'completed-docs': [false],
  'curly': false,
  'cyclomatic-complexity': [
    true,
    maxCyclomaticComplexity
  ],
  'encoding': true,
  'eofline': true,
  'file-header': [false],
  'forin': true,
  'import-blacklist': [true, 'rxjs', 'lodash'],
  'import-spacing': true,
  'indent': [true, 'spaces', 2],
  'interface-name': [
    true,
    'never-prefix'
  ],
  'interface-over-type-literal': true,
  'jsdoc-format': false,
  'label-position': true,
  'linebreak-style': [
    true,
    'LF'
  ],
  'max-classes-per-file': [false],
  'max-file-line-count': [false],
  'max-line-length': [
    true,
    maxLineLength
  ],
  'member-ordering': [
    true,
    {
      order: 'fields-first'
    }
  ],
  'new-parens': true,
  'no-angle-bracket-type-assertion': false,
  'no-arg': true,
  'no-bitwise': true,
  'no-conditional-assignment': true,
  'no-consecutive-blank-lines': [
    true,
    1
  ],
  'no-console': [false],
  'no-constant-condition': true,
  'no-construct': true,
  'no-control-regex': true,
  'no-debugger': true,
  'no-default-export': true,
  'no-duplicate-case': true,
  'no-duplicate-imports': true,
  'no-duplicate-variable': true,
  'no-empty': true,
  'no-empty-character-class': true,
  'no-empty-interface': true,
  'no-eval': true,
  'no-ex-assign': true,
  'no-extra-boolean-cast': true,
  'no-extra-semi': true,
  'no-for-in-array': true,
  'no-inferred-empty-object-type': false,
  'no-inner-declarations': [
    true,
    'functions'
  ],
  'no-invalid-regexp': true,
  'no-invalid-template-strings': true,
  'no-invalid-this': true,
  'no-irregular-whitespace': true,
  'no-magic-numbers': false,
  'no-mergeable-namespace': true,
  'no-multi-spaces': [
    true,
    {
      exceptions: {
        BinaryExpression: false,
        PropertyAssignment: false,
        VariableDeclarations: false
      }
    }
  ],
  'no-namespace': [true, 'allow-declarations'],
  'no-null-keyword': true,
  'no-parameter-properties': false,
  'no-reference': true,
  'no-regex-spaces': true,
  'no-require-imports': false,
  'no-shadowed-variable': false,
  'no-sparse-arrays': true,
  'no-string-literal': true,
  'no-string-throw': true,
  'no-submodule-imports': false,
  'no-switch-case-fall-through': true,
  'no-trailing-whitespace': true,
  'no-unexpected-multiline': true,
  'no-unsafe-finally': true,
  'no-unused-expression': true,
  'no-unused-variable': true,
  'no-use-before-declare': true,
  'no-var-keyword': true,
  'no-var-requires': false,
  'no-void-expression': false,
  'number-literal-format': true,
  'object-curly-spacing': [
    true,
    'always'
  ],
  'object-literal-key-quotes': [
    true,
    'consistent-as-needed'
  ],
  'object-literal-shorthand': true,
  'object-literal-sort-keys': true,
  'one-line': [
    true,
    'check-catch',
    'check-else',
    'check-finally',
    'check-open-brace',
    'check-whitespace'
  ],
  'one-variable-per-declaration': [
    true,
    'ignore-for-loop'
  ],
  'only-arrow-functions': [
    true,
    'allow-declarations'
  ],
  'ordered-imports': true,
  'prefer-conditional-expression': true,
  'prefer-const': true,
  'prefer-for-of': true,
  'promise-function-async': true,
  'quotemark': [
    true,
    'single'
  ],
  'radix': true,
  'restrict-plus-operands': false,
  'semicolon': [
    true,
    'always'
  ],
  'space-before-function-paren': [
    true,
    {
      anonymous: 'always',
      asyncArrow: 'always',
      method: 'never',
      named: 'never'
    }
  ],
  'space-within-parens': 0,
  'strict-boolean-expressions': false,
  'switch-default': true,
  'ter-arrow-body-style': false,
  'ter-arrow-spacing': [true],
  'ter-max-len': false,
  'ter-prefer-arrow-callback': [true],
  'trailing-comma': [
    true,
    {
      multiline: 'never',
      singleline: 'never'
    }
  ],
  'triple-equals': true,
  'typedef': [
    true,
    'call-signature',
    'parameter',
    'property-declaration',
    'member-variable-declaration'
  ],
  'typedef-whitespace': [
    true,
    {
      'call-signature': 'nospace',
      'index-signature': 'nospace',
      'parameter': 'nospace',
      'property-declaration': 'nospace',
      'variable-declaration': 'nospace'
    },
    {
      'call-signature': 'onespace',
      'index-signature': 'onespace',
      'parameter': 'onespace',
      'property-declaration': 'onespace',
      'variable-declaration': 'onespace'
    }
  ],
  'typeof-compare': true,
  'unified-signatures': true,
  'use-isnan': true,
  'valid-jsdoc': false,
  'valid-typeof': true,
  'variable-name': [
    true,
    'ban-keywords',
    'check-format'
  ],
  'whitespace': [
    true,
    'check-branch',
    'check-decl',
    'check-operator',
    'check-module',
    'check-separator',
    'check-type'
  ]
};
