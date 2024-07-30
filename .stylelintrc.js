module.exports = {
  extends: "stylelint-config-standard",
  customSyntax: "postcss-styled-syntax",
  rules: {
    "no-empty-source": null,
    "media-feature-range-notation": "prefix",
    "declaration-block-no-redundant-longhand-properties": [
      true,
      { ignoreShorthands: ["gap", "grid-gap"] },
    ],
    "color-function-notation": "legacy",
    "selector-pseudo-element-colon-notation": "single",
  },
};
