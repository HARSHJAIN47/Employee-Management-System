module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "no-nested-ternary": "off",
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".js", ".jsx"],
      },
    ],
    "no-param-reassign": 0,
  },
};
