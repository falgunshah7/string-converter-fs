# string-converter-fs

It's javascript library which can help you to conver string into Capitalizes the first letter, Converts a string to kebab-case and Converts a string to snake_case

## Install

```bash
npm install string-converter-fs
```

## Usage

const { capitalize, kebabCase, snakeCase } = require("string-converter-fs");

console.log(capitalize("hello")); // Hello
console.log(kebabCase("Hello World")); // hello-world
console.log(snakeCase("Hello World")); // hello_world
