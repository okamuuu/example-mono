module.exports = { 
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: ["plugin:@next/next/recommended"],
  rules: {
    "@next/next/no-img-element": 0
  },  
};
