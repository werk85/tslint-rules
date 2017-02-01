import * as path from 'path';

const xtends = './tslint-base';
export { xtends as extends };

export const rulesDirectory = [
  path.dirname(require.resolve('codelyzer'))
];

export const rules = {
  'component-class-suffix': true,
  'component-selector': [
    true,
    'element',
    'w85',
    'kebab-case'
  ],
  'directive-class-suffix': true,
  'directive-selector': [
    true,
    'attribute',
    'w85',
    'camelCase'
  ],
  'import-destructuring-spacing': true,
  'invoke-injectable': true,
  'no-access-missing-member': true,
  'no-attribute-parameter-decorator': true,
  'no-forward-ref': true,
  'no-input-rename': true,
  'no-output-rename': true,
  'pipe-naming': [
    true,
    'camelCase',
    'w85'
  ],
  'templates-use-public': true,
  'use-host-property-decorator': true,
  'use-input-property-decorator': true,
  'use-life-cycle-interface': true,
  'use-output-property-decorator': true,
  'use-pipe-transform-interface': true
};
