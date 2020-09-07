<div align="center">
  <h1>npm-description</h1>
  <a href="https://npmjs.com/package/npm-description">
    <img alt="npm" src="https://img.shields.io/npm/v/npm-description.svg">
  </a>
  <a href="https://github.com/bconnorwhite/npm-description">
    <img alt="typescript" src="https://img.shields.io/github/languages/top/bconnorwhite/npm-description.svg">
  </a>
  <a href="https://github.com/bconnorwhite/npm-description">
    <img alt="GitHub stars" src="https://img.shields.io/github/stars/bconnorwhite/npm-description?label=Stars%20Appreciated%21&style=social">
  </a>
  <a href="https://twitter.com/bconnorwhite">
    <img alt="Twitter Follow" src="https://img.shields.io/twitter/follow/bconnorwhite.svg?label=%40bconnorwhite&style=social">
  </a>
</div>

<br />

> Fetch a package's description from NPM.

Uses [cross-fetch](https://npmjs.com/package/cross-fetch) to support usage in both brower and node.

## Installation

```bash
yarn add npm-description
```

```bash
npm install npm-description
```

<br />

## API

### Usage
```ts
import { getDescription, getDescriptions } from "npm-description";

getDescription("chalk").then((result) => {
  console.log(result); // "Terminal string styling done right"
});

getDescriptions(["chalk", "commander"]).then((result) => {
  console.log(result.chalk); // "Terminal string styling done right"
  console.log(result.commander); // "the complete solution for node.js command-line programs"
});
```

### Types
```ts
import { getDescription, getDescriptions, Descriptions } from "npm-description";

function getDescription(name: string): Promise<string>;

function getDescriptions(names: string[]): Promise<Descriptions>;

export type Descriptions = {
  [name: string]: string;
};
```

<br />

<h2>Dependencies<img align="right" alt="dependencies" src="https://img.shields.io/david/bconnorwhite/npm-description.svg"></h2>

- [cross-fetch](https://npmjs.com/package/cross-fetch): Universal WHATWG Fetch API for Node, Browsers and React Native

##

<br />

<h2>Dev Dependencies<img align="right" alt="David" src="https://img.shields.io/david/dev/bconnorwhite/npm-description.svg"></h2>

- [@bconnorwhite/bob](https://npmjs.com/package/@bconnorwhite/bob): Bob is a toolkit for TypeScript projects
- [jest](https://npmjs.com/package/jest): Delightful JavaScript Testing.

##

<br />

<h2>License <img align="right" alt="license" src="https://img.shields.io/npm/l/npm-description.svg"></h2>

[MIT](https://mit-license.org/)

<br />

## Related Packages:
- [all-package-names](https://npmjs.com/package/all-package-names): Get all NPM package names.
- [npms-io-client](https://npmjs.com/package/npms-io-client): A universal typed npms.io client
- [is-name-taken](https://npmjs.com/package/is-name-taken): Check if an NPM package name is taken
