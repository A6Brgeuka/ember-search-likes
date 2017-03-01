module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module"
  },
  extends: [
    "eslint:recommended",
    "standard"
  ],
  env: {
    browser: true
  },
  "rules": {
    "comma-dangle": "off",
    "spaced-comment": "off",
    "no-multiple-empty-lines": "off",
    "generator-star-spacing": "off",
    "no-sequences": "off",
    "key-spacing": "off",
    "no-multi-spaces": "off",
    "func-call-spacing": "off",
    "no-console": "off",
    "quotes": "off",
    "camelcase": "off",
    "padded-blocks": "off",
    "operator-linebreak": "off",
    "no-return-assign": "off",
    "new-cap": "off",
    "arrow-parens": "off",
    "no-template-curly-in-string": "off",
    "no-whitespace-before-property": "off",
    "no-useless-escape": "off"
  },

  globals: {
    "VK": false
  }
};
