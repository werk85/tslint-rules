import * as path from 'path';

const xtends = './tslint-base';
export { xtends as extends };

export const rulesDirectory = [
  path.dirname(require.resolve('codelyzer'))
];

export const rules = {
  "directive-selector": [
    true,
    "attribute",
    "w85",
    "camelCase"
  ],
  "component-selector": [
    true,
    "element",
    "w85",
    "kebab-case"
  ],
  "use-input-property-decorator": true,
  "use-output-property-decorator": true,
  "use-host-property-decorator": true,
  "no-attribute-parameter-decorator": true,
  "no-input-rename": true,
  "no-output-rename": true,
  "no-forward-ref": true,
  "use-life-cycle-interface": true,
  "use-pipe-transform-interface": true,
  "pipe-naming": [
    true,
    "camelCase",
    "w85"
  ],
  "component-class-suffix": true,
  "directive-class-suffix": true,
  "import-destructuring-spacing": true,
  "templates-use-public": true,
  "no-access-missing-member": true,
  "invoke-injectable": true
};
