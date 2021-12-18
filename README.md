# @younho9/typescript-esm-starter

[![CI](https://github.com/younho9/typescript-esm-starter/actions/workflows/main.yml/badge.svg)](https://github.com/younho9/typescript-esm-starter/actions/workflows/main.yml)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> Personal TypeScript ES module starter template

## Getting Started

- Click the [Use this template](https://github.com/younho9/typescript-esm-starter/generate) button.

## Features

- [Pure ESM package](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
- [Ignore Lockfiles](https://github.com/sindresorhus/ama/issues/479#issuecomment-310661514)
- Lint code via [XO](https://github.com/xojs/xo#readme)
- Lint commit message via [commitlint](https://github.com/conventional-changelog/commitlint) using [`@commitlint/config-conventional`](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#readme)
- Unit Test via [AVA](https://github.com/avajs/ava#readme)
- Test type definition via [tsd](https://github.com/SamVerschueren/tsd#readme)
- [GitHub Actions CI](https://github.com/younho9/typescript-esm-starter/blob/main/.github/workflows/main.yml) for commits and pull requests
- Git hooks via [husky](https://github.com/typicode/husky#readme)
  - `pre-commit`: Lint & Test code & Test type definition
  - `commit-msg`: Lint commit message
- Simple [Visual Studio Code configs](https://github.com/younho9/typescript-esm-starter/tree/main/.vscode)

## LICENSE

[MIT](LICENSE)

---

REMOVE ABOVE CONTENTS

---

# My Awesome Module

[![CI](https://github.com/younho9/my-awesome-module/actions/workflows/main.yml/badge.svg)](https://github.com/younho9/my-awesome-module/actions/workflows/main.yml)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/xojs/xo)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

> Lorem ipsum dolor sit amet

## Install

```sh
$ npm install my-awesome-module
```

## Usage

```ts
import greet from "my-awesome-module";

greet("username");
//=> 'Hello username'
```

## LICENSE

[MIT](LICENSE)
