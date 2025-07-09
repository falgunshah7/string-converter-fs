# 📦 string-converter-fs

![npm](https://img.shields.io/npm/v/string-converter-fs)
![npm](https://img.shields.io/npm/dm/string-converter-fs)
![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)

A simple and lightweight JavaScript utility library for converting strings into different formats:

- ✅ Capitalize the first letter
- ✅ Convert to **kebab-case**
- ✅ Convert to **snake_case**

---

## 📥 Installation

```bash
npm install string-converter-fs
```

🚀 Usage

```js
const { capitalize, kebabCase, snakeCase } = require("string-converter-fs");

console.log(capitalize("hello world")); // Hello world
console.log(kebabCase("Hello World")); // hello-world
console.log(snakeCase("Hello World")); // hello_world
```

✨ API Methods
🔹 capitalize(string)
Capitalizes the first letter of the string.

```js
capitalize("falgun"); // "Falgun"
```

🔹 kebabCase(string)
Converts the string to kebab-case.

```js
kebabCase("Falgun Shah"); // "falgun-shah"
```

🔹 snakeCase(string)
Converts the string to snake_case.

```js
snakeCase("Falgun Shah"); // "falgun_shah"
```

📄 License
MIT © falgunshah7

🙌 Contributing
Pull requests and feature suggestions are welcome!
Feel free to open an issue or submit a PR.
