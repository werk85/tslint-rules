import * as path from 'path';

const xtends = './tslint-base';
export { xtends as extends };

export const rulesDirectory = [
  path.dirname(require.resolve('codelyzer'))
];

export const rules = {
  'angular-whitespace': [
    true,
    'check-interpolation',
    'check-semicolon'
  ],
  'banana-in-box': true,
  'component-class-suffix': [
    true,
    'Component',
    'Container'
  ],
  'component-selector': [
    true,
    'element',
    'w85',
    'kebab-case'
  ],
  'directive-class-suffix': [
    true,
    'Directive'
  ],
  'directive-selector': [
    true,
    'attribute',
    'w85',
    'camelCase'
  ],
  'import-destructuring-spacing': true,
  'no-attribute-parameter-decorator': true,
  'no-forward-ref': true,
  'no-input-rename': true,
  'no-output-on-prefix': true,
  'no-output-rename': false,
  'pipe-impure': true,
  'pipe-naming': [
    true,
    'camelCase',
    'w85'
  ],
  'use-host-property-decorator': true,
  'use-input-property-decorator': true,
  'use-life-cycle-interface': true,
  'use-output-property-decorator': true,
  'use-pipe-transform-interface': true,
  'use-view-encapsulation': true
};
