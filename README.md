### 📑 Initialize

---

```shell
$ exec 3<&1;bash <&3 <(curl https://raw.githubusercontent.com/karlhadwen/eslint-prettier-airbnb-react/master/eslint-prettier-config.sh 2> /dev/null)
```

1. ESLint & Prettier Installation
1. Conforming to Airbnb's JavaScript Style Guide
1. Making ESLint and Prettier work together
1. Building `.eslintrc.json`

### 📑 工具

---

- ESLint + Prettier + Airbnb
- Mocha + Chai + Sinon for testing
- lerna
- concurrently / nodemon

| Name         | Description        |
| ------------ | ------------------ |
| eslint       |                    |
| prettier     |                    |
| airbnb       |                    |
| editorconfig |                    |
| babelrc      |                    |
| mocha        | unit test          |
| chai         | chai-http          |
| dotenv       |                    |
| cross-env    |                    |
| sinon        | sinon-chai         |
| proxyquire   | test doubles       |
| nyc          | istanbyl, coverage |
| lerna        | husky, lint-staged |
| concurrently |                    |
| nodemon      |                    |
| pm2          |                    |
| rimraf       |                    |
|              |                    |
|              |                    |

### 📑 Init project and pre-setup

---

- init

```shell
$ npx express-generator ms-test-framework`
```

- .editorconfig: copy default from http://editorconfig.org
- .nvmrc

```shell
$ touch `node -v` > .nvmrc
```

- .babelrc:
- .gitignore

### 📑 code quality

---

1. [prettier](https://prettier.io/docs/en/install.html)

```shell
$ yarn add prettier -D
$ echo {}> .prettierrc
$ touch .prettierignore
```

1. [eslint](https://eslint.org)

```shell
$ yarn add eslint --dev
$ npx eslint --init
$ touch .eslintignore

$ yarn add -D eslint-config-prettier eslint-plugin-prettier
$ yarn add -D eslint-plugin-import
$ yarn add -D eslint-config-node eslint-plugin-node
```

> Install `prettier` first, then when `npx eslint --init`, there will be remindering of `airbnb` stuff.

### 📑 test - unit testing

---

1. [mocha](mochajs.org)

```shell
$ yarn add -D mocha chai
$ touch test/.eslintrc.json
$ yarn test
```

### 📑 test - test doubles

---

### 📑 test coverage

---

### 📑 package manager

---

### 📑 Summary

---
