/** @type {import("prettier").Config} */

const config = {
  trailingComma: "es5",
  tabWidth: 2,
  semi: true,
  singleQuote: false,
  importOrder: ["<THIRD_PARTY_MODULES>", "^@/(.*)$", "^\\.\\./(.*)$", "^[./]"],
  importOrderSeparation: true,
  importOrderSortSpecifiers: false,
  importOrderParserPlugins: ["typescript", "jsx"],
  plugins: ["@trivago/prettier-plugin-sort-imports"],
};

module.exports = config;
