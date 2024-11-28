const globals = require("globals");
const jest = require("eslint-plugin-jest");

module.exports = [
  {
    files: ["**/*.js"],
    languageOptions: {
      ecmaVersion: 2018,
      sourceType: "module",
      globals: {
        ...globals.browser,
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
      },
    },
    plugins: {
      jest,
    },
    rules: {
      "max-classes-per-file": "off",
      "no-underscore-dangle": "off",
      "no-console": "off",
      "no-shadow": "off",
      "no-restricted-syntax": ["error", "LabeledStatement", "WithStatement"],
    },
  },
  {
    files: ["*.js"],
    ignores: ["babel.config.js"],
  },
];

