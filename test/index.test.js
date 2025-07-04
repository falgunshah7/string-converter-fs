const { capitalize, kebabCase, snakeCase } = require("string-converter-fs");

describe("String Converter Tests", () => {
  test("capitalize function", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("")).toBe("");
    expect(capitalize(null)).toBe("");
    expect(capitalize("123abc")).toBe("123abc");
  });

  test("kebabCase function", () => {
    expect(kebabCase("Hello World!")).toBe("hello-world");
    expect(kebabCase("multiple   spaces")).toBe("multiple-spaces");
    expect(kebabCase("leading and trailing spaces ")).toBe(
      "leading-and-trailing-spaces"
    );
    expect(kebabCase("123abc")).toBe("123abc");
  });

  test("snakeCase function", () => {
    expect(snakeCase("Hello World!")).toBe("hello_world");
    expect(snakeCase("multiple   spaces")).toBe("multiple_spaces");
    expect(snakeCase("leading and trailing spaces ")).toBe(
      "leading_and_trailing_spaces"
    );
    expect(snakeCase("123abc")).toBe("123abc");
  });
});
