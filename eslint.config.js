import pluginJs from "@eslint/js";
import unocss from "@unocss/eslint-config/flat";
import eslintPluginSvelte from "eslint-plugin-svelte";
import globals from "globals";
import tseslint from "typescript-eslint";
import svelteConfig from "./svelte.config.js";

export default [
  unocss,
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...eslintPluginSvelte.configs["flat/recommended"],
  {
    files: ["**/*.svelte", "*.svelte"],
    languageOptions: {
      parserOptions: {
        // Specify the `svelte.config.js`.
        svelteConfig,
      },
    },
  },
];
