module.exports = defineConfig([
	{
		files: ["website/**/*.{js,jsx}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
		},
		rules: {
			"no-console": "off", // Allow console statements for debugging
			"func-names": "off", // Allow unnamed functions for flexibility
			"multiline-comment-style": "off", // Allow any style of multiline comments
			// Prettier controls quote style; disable ESLint's quote rule
			"linebreak-style": ["error", "unix"], // Enforce Unix linebreaks for cross-platform consistency
			"no-restricted-globals": "off", // Allow all global variables
			"no-alert": "off", // Allow alert for simple debugging purposes
			"no-plusplus": "off", // Allow ++ operator for incrementing values
			"max-len": "off", // Disable max line length to allow flexibility in code formatting
			"no-param-reassign": ["off"], // Allow reassignment of function parameters
			"prefer-const": "off", // Allow let even when variables are not reassigned
			"no-undef": "off", // Allow usage of undefined variables
			"no-restricted-syntax": "off", // Allow all syntax
			"import/no-extraneous-dependencies": "off", // Allow importing devDependencies
			"prettier/prettier": ["warn", { singleQuote: true, endOfLine: "auto" }], // Prettier: use single quotes and auto-detect line endings
		},
	},
	// Prettier config should be last to disable conflicting ESLint rules
	prettierConfig,
]);
