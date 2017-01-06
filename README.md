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
  "extends": "werk85-tslint-rules"
}
```

and overwrite rules suited for the current project or use on of the more specific configurations listed below.

The usable rule set includes all standard [tslint-rules](https://palantir.github.io/tslint/rules/) and the
[tslint-eslint-rules](https://github.com/buzinas/tslint-eslint-rules) set.

### Angular 2 Rules

For Angular 2 based project use the `werk85-tslint-rules/lib/tslint-angular2` via

```json
{
  "extends": "werk85-tslint-rules/tslint-angular2",
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
    ],
    "pipe-naming": [
      true,
      "camelCase",
      "w85" // Prefix used by pipes
    ],
  }
}
```

**Note:** You have to define the appropriate directive, component and pipe prefix by yourself.

This configuration uses the [codelyzer](https://github.com/mgechev/codelyzer) tslint rules and extends the "Base Rules" described above.
