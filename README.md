# werk85-tslint-rules

Organisation wide tslint rules for werk85.

## Installation

```
npm install werk85-tslint-rules --save-dev
```

## Usage

### Base Rules

Extend your `tslint.json` configuration via

```json
{
  "extends": "werk85-tslint-rules/tslint-base.json"
}
```

and overwrite rules suited for the current project or use on of the more specific configurations listed below.

The usable rule set includes all standard [tslint-rules](https://palantir.github.io/tslint/rules/) and the 
[tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) set. 

### Angular 2 Rules

For Angular 2 based project use the `werk85-tslint-rules/tslint-angular2.json` via

```json
{
  "extends": "werk85-tslint-rules/tslint-angular2.json",
  "rules": {
    "directive-selector": [
      true,
      "attribute",
      "w85", // Prefix used by directives
      "camelCase"
    ],
    "component-selector": [
      true,
      "element",
      "w85", // Prefix used by components
      "kebab-case"
    ]
  }
}
```

**Note:** You have to define the appropriate directive and component prefix by yourself.

This configuration uses the [codelyzer](https://github.com/mgechev/codelyzer) tslint rules and extends the "Base Rules" described above.
