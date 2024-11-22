import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginPrettier from "eslint-plugin-prettier";  // Include Prettier plugin

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      globals: globals.browser,  // Define globals for browser environment
    },
    plugins: {
      react: pluginReact,          // Enable React plugin
      prettier: pluginPrettier,    // Enable Prettier plugin
    },
    rules: {
      'eslint/no-all': 'off',      // Disable eslint/no-all rule
      'prettier/prettier': ['error', { 'endOfLine': 'auto' }], // Integrate Prettier
    },
    settings: {
      react: {
        version: 'detect',        // Automatically detect React version
      },
    },
  },
  // Directly include the recommended rules from plugins
  pluginJs.configs.recommended,       // Use recommended JS rules
  pluginReact.configs.flat.recommended, // Use recommended React rules
];
