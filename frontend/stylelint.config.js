// ES Module stylelint configuration for Vite + React + Tailwind
export default {
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
