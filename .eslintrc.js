const prettierConfig = require("./.prettierrc.js");

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:prettier/recommended",
    "prettier",
  ],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
  },
  plugins: ["react", "@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
      },
      typescript: {},
    },
    react: {
      pragma: "React",
      version: "17.0.2",
    },
  },
  rules: {
    // Possible errors
    "no-console": "warn",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
    "react/react-in-jsx-scope": "off",
    "react/prop-types": 0,
    "prettier/prettier": ["error", prettierConfig],
  },
};
