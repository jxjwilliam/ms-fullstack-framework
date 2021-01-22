# 💡 JavaScript Monorepo 模板

## 🪕 特点

### 📑 setup project

- eslint, prettier, airbnb, yarn workspace, lerna
- nodemon, mocha, chai

```shell
$ find . -type d -name node_modules -exec rm -rf {} \;
$ find . -name package-lock.json -exec rm {} \;
$ find . -name yarn.lock -exec rm {} \;

$ yarn add -W -D eslint prettier lerna
$ npx eslint --init
$ yarn add -W -D eslint-plugin-monorepo
$ yarn add -W -D eslint-plugin-prettier eslint-config-prettier
$ yarn add -W -D eslint-plugin-node eslint-config-node
$ yarn add -W -D mocha chai nodemon eslint-plugin-mocha

$ yarn add -W -D @babel/core @babel/node @babel/preset-env @babel/cli
```
