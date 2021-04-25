module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "no-console": "warn",
    "no-eval": "error",
    "import/first": "error",
  },
};
