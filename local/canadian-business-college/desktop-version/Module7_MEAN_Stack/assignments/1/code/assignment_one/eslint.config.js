import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";
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
			indent: ["error", "tab"],
			semi: ["error", "always"],
			quotes: "off",
			"keyword-spacing": ["error", { before: true, after: true }],
			"spaced-comment": ["error", "always"],
			"no-var": "error",
			"no-unused-vars": "off",
		},
	},
	{
		files: ["server.js", "config/database_config.js"],
		extends: [js.configs.recommended],
		languageOptions: {
			globals: globals.node,
			parserOptions: { sourceType: "module" },
		},
		plugins: { prettier: prettierPlugin },
		rules: {
			indent: ["error", "tab"],
			semi: ["error", "always"],
			quotes: "off",
			"keyword-spacing": ["error", { before: true, after: true }],
			"spaced-comment": ["error", "always"],
			"no-var": "error",
			"no-unused-vars": "off",
			"no-useless-assignment": "off",
		},
	},

	prettierConfig,
]);
