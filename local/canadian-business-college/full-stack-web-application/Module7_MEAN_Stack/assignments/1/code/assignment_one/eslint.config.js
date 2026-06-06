import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig, globalIgnores } from "eslint/config";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier/flat";

export default defineConfig([
	{
		files: ["**/*.{js,jsx}"],
		extends: [
			js.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite,
		],
		languageOptions: {
			globals: globals.browser,
			parserOptions: { ecmaFeatures: { jsx: true } },
		},
		plugins: { prettier: prettierPlugin },
		rules: {
			indent: ["error", 4],
			semi: ["error", "always"],
			quotes: "off",
			"keyword-spacing": ["error", { before: true, after: true }],
			"linebreak-style": ["error", "unix"],
			"spaced-comment": ["error", "always"],
			"no-var": "error",
		},
	},
]);
