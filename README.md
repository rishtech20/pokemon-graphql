# apollo-graphql-typescript-mongoDB-boilerplate

A boilerplate repo with Apollo server, MongoDB and Typescript

Dependencies:

1. Express - to use node express server
2. Nodemon - dev dependency
3. typescript - dev - core TS library which will help in Compiling the TS code to valid JS
4. ts-node - dev - util library that can help us run the TS programs directly from the terminal
5. @types/node - dev - type declarations for node
6. @types/express - dev - type declaration for express code
7. eslint - dev
8. @typescript-eslint/parser - dev
9. @typescript-eslint/eslint-plugin - dev
10. apollo-server-express - TS project so no types
11. graphql + @types/graphql

Files:

1. tsconfig.json - This is where the TS config is customized and acts like a guide for the TS compiler with options required to compile the project.

2. .eslintrc.json - Responsible for setting up the eslint configuration in the project.

Settings:
Add these settings to the settings.json on vscode

```json
"eslint.validate": [
    "javascript",
    "javascriptreact",
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
```
