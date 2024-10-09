// CommonJS stylelint configuration for Vite + React + Tailwind
module.exports = {
  extends: ["stylelint-config-tailwindcss"],
  customSyntax: "postcss-syntax",
  rules: {
    "at-rule-no-unknown": [
      true,
      {
        ignoreAtRules: [
          "tailwind",
          "apply",
          "layer",
          "variants",
          "responsive",
          "screen",
        ],
      },
    ],
    // Add other rules if needed
  },
};
