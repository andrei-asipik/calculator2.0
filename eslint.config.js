import prettierPlugin from "eslint-plugin-prettier";
import js from "@eslint/js";
import globals from "globals";

export default [
  {
    plugins: { prettier: prettierPlugin },
  },
  {
    ignores: ["node_modules", "dist"],
  },
  js.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.browser,
        ...globals.node,
        ...globals.jest,
      },
    },
  },
  {
    files: ["src/**/*.{js}"],
    rules: {
      "no-unused-vars": "error",
      "no-console": "error",
      eqeqeq: "error",
      curly: "error",
      "no-var": "error",
      "prefer-const": "warn",
      "arrow-spacing": [
        "error",
        {
          before: true,
          after: true,
        },
      ],
      "no-multiple-empty-lines": ["warn", { max: 1, maxEOF: 0 }],
      "prettier/prettier": ["error"],
    },
  },
  {
    files: ["**/*.test.js", "**/*.spec.js"],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
