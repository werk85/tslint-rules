import * as path from 'path';

export const rulesDirectory = [
  path.join(path.dirname(require.resolve('tslint-eslint-rules')), 'dist/rules')
];

export const rules = {
  // Standard rules sorted as described in the tslint rules documentation
  "member-ordering": [
    true,
    {
      "order": "fields-first"
    }
  ],
  "no-empty-interface": true,
  "no-magic-numbers": true,
  "no-namespace": [true, "allow-declarations"],
  "no-reference": true,
  "no-var-requires": false,
  "only-arrow-functions": [
    true,
    "allow-declarations"
  ],
  "prefer-for-of": true,
  "promise-function-async": true,
  "typedef": [
    true,
    "arrow-parameter",
    "member-variable-declaration",
    "property-declaration",
    "variable-declaration"
  ],
  "typedef-whitespace": [
    true,
    {
      "call-signature": "nospace",
      "index-signature": "nospace",
      "parameter": "nospace",
      "property-declaration": "nospace",
      "variable-declaration": "nospace"
    },
    {
      "call-signature": "onespace",
      "index-signature": "onespace",
      "parameter": "onespace",
      "property-declaration": "onespace",
      "variable-declaration": "onespace"
    }
  ],
  "unified-signatures": true,

  "ban": [],
  "curly": false,
  "forin": true,
  "import-blacklist": ["rxjs", "lodash"],
  "label-position": true,
  "no-arg": true,
  "no-bitwise": true,
  "no-conditional-assignment": true,
  "no-console": [false],
  "no-construct": true,
  "no-debugger": true,
  "no-duplicate-variable": true,
  "no-empty": true,
  "no-eval": true,
  "no-for-in-array": true,
  "no-inferred-empty-object-type": true,
  "no-invalid-this": true,
  "no-null-keyword": true,
  "no-shadowed-variable": true,
  "no-string-literal": true,
  "no-string-throw": true,
  "no-switch-case-fall-through": true,
  "no-unsafe-finally": true,
  "no-unused-expression": true,
  "no-unused-new": true,
  "no-use-before-declare": true,
  "no-var-keyword": true,
  "no-void-expression": false,
  "radix": true,
  "restrict-plus-operands": true,
  "strict-boolean-expressions": false,
  "switch-default": true,
  "triple-equals": true,
  "typeof-compare": true,
  "use-isnan": true,

  "cyclomatic-complexity": [
    true,
    20
  ],
  "eofline": true,
  "indent": false,
  "linebreak-style": [
    true,
    "LF"
  ],
  "max-classes-per-file": [
    true,
    1
  ],
  "max-file-line-count": [false],
  "max-line-length": [
    true,
    130
  ],
  "no-default-export": true,
  "no-mergeable-namespace": true,
  "no-require-imports": false,
  "no-trailing-whitespace": true,
  "object-literal-sort-keys": true,
  "prefer-const": true,
  "trailing-comma": [
    true,
    {
      "multiline": "never",
      "singleline": "never"
    }
  ],

  "align": [
    true,
    "parameters",
    "arguments",
    "statements"
  ],
  "array-type": [
    true,
    "array-simple"
  ],
  "arrow-parens": true,
  "callable-types": true,
  "class-name": true,
  "comment-format": [
    true,
    "check-space",
    "check-uppercase"
  ],
  "completed-docs": [false],
  "file-header": [false],
  "import-spacing": true,
  "interface-name": [
    true,
    "never-prefix"
  ],
  "interface-over-type-literal": true,
  "jsdoc-format": true,
  "new-parens": true,
  "no-angle-bracket-type-assertion": false,
  "no-consecutive-blank-lines": [
    true,
    1
  ],
  "no-parameter-properties": false,
  "object-literal-key-quotes": [
    true,
    "consistent-as-needed"
  ],
  "object-literal-shorthand": true,
  "one-line": [
    true,
    "check-catch",
    "check-else",
    "check-finally",
    "check-open-brace",
    "check-whitespace"
  ],
  "one-variable-per-declaration": [
    true,
    "ignore-for-loop"
  ],
  "ordered-imports": true,
  "quotemark": [
    true,
    "single"
  ],
  "semicolon": [
    true,
    "always"
  ],
  "space-before-function-paren": [
    true,
    {
      "anonymous": "always",
      "method": "never",
      "named": "never",
      "asyncArrow": "always"
    }
  ],
  "variable-name": [
    true,
    "ban-keywords",
    "check-format"
  ],
  "whitespace": [
    true,
    "check-branch",
    "check-decl",
    "check-operator",
    "check-module",
    "check-separator",
    "check-type"
  ],

  // tslint-eslint-rules sorted as documented on in the documentation
  "no-constant-condition": true,
  "no-control-regex": true,
  "no-duplicate-case": true,
  "no-empty-character-class": true,
  "no-ex-assign": true,
  "no-extra-boolean-cast": true,
  "no-extra-semi": true,
  "no-inner-declarations": [
    true,
    "functions"
  ],
  "no-invalid-regexp": true,
  "no-irregular-whitespace": true,
  "no-regex-spaces": true,
  "no-sparse-arrays": true,
  "no-unexpected-multiline": true,
  "valid-jsdoc": false,
  "valid-typeof": true,
  "no-multi-spaces": [
    true,
    {
      "exceptions": {
        "PropertyAssignment": false,
        "VariableDeclarations": false,
        "BinaryExpression": false
      }
    }
  ],
  "array-bracket-spacing": [
    true,
    "never"
  ],
  "block-spacing": [
    true,
    "always"
  ],
  "brace-style": false,
  "ter-indent": [
    true,
    2
  ],
  "ter-max-len": false,
  "object-curly-spacing": [
    true,
    "always"
  ],
  "ter-arrow-body-style": [
    true,
    "as-needed"
  ],
  "ter-arrow-spacing": [true],
  "ter-prefer-arrow-callback": [true]
}
