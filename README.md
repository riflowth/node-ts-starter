## node-ts-starter
This repository was built to reduce setup time of **[NodeJS](https://nodejs.org/en/)** *(16.15.0 LTS)* project
with **[TypeScript](https://www.typescriptlang.org/)** and **[webpack](https://webpack.js.org/)**.

**node-ts-starter** will serve you performance and lightweight setup for your nodejs project
which uses nodejs long-term support version, it will keep you to use new features without any concern.

## 🔧 Usage

There are 2 way to use this starter pack:

1. Click **[Use this template](https://github.com/riflowth/node-ts-starter/generate)** to generate a new GitHub repository with this starter pack.
2. Run the command below to the directory on your computer where you want to create a project with this starter pack.

```bash
npx degit riflowth/node-ts-starter my-project
```


### 📦 Requirements

- Engine
  - [NodeJS](https://nodejs.org/) 16.15.0 (LTS)
- Packages
  - [yarn](https://yarnpkg.com/) - A performance package manager
    - To install, run `corepack enable` on terminal
- Development Tools
  - [vscode](https://code.visualstudio.com/) or [webstorm](https://www.jetbrains.com/webstorm/) - A recommended development tool 

### ⌨️ Commands

- To install required dependencies:
```bash
yarn install
```

- To start development with automatically build process:  
```bash
yarn dev
```

- To build the application for production ready:
```bash
yarn build
```

- To linting your codebase:
```bash
yarn lint
```

- To start the application for production environment:
  - *Need to build the application first*

```bash
yarn start
```
