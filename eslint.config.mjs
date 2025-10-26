//}, globalIgnores(["node_modules/**/*", "build/**/*", "*.config.js"])]);
    import globals from "globals";
    import pluginJs from "@eslint/js";
    import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
    import pluginReact from "eslint-plugin-react";
    import pluginReactHooks from "eslint-plugin-react-hooks";
    import pluginJsxA11y from "eslint-plugin-jsx-a11y";
    import pluginPrettier from "eslint-plugin-prettier";
    import configPrettier from "eslint-config-prettier";

    export default [
      {
        files: ["**/*.{js,jsx,mjs,cjs}"], // Apply to JavaScript and JSX files
        languageOptions: {
          parserOptions: {
            ecmaFeatures: {
              jsx: true, // Enable JSX parsing
            },
            ecmaVersion: "latest",
            sourceType: "module",
          },
          globals: {
            ...globals.browser, // Add browser global variables
          },
        },
        plugins: {
		'react': pluginReact,
		'react-hooks': pluginReactHooks,
		'jsx-a11y': pluginJsxA11y,
		'prettier': pluginPrettier
          /*react: pluginReactConfig,
          "react-hooks": pluginReactHooks,
          "jsx-a11y": pluginJsxA11y,
          prettier: pluginPrettier,*/
        },
        rules: {
          ...pluginJs.configs.recommended.rules,
          ...pluginReactConfig.rules,
          ...pluginReactHooks.configs.recommended.rules,
          ...pluginJsxA11y.configs.recommended.rules,
          //...configPrettier.rules,
          //"prettier/prettier": "error",  Enforce prettier formatting
          //"react/react-in-jsx-scope": "off",  Disable rule if using React 17+ JSX Transform
          // Add or override other rules as needed
	  "no-unused-vars": "warn"
        },
        settings: {
          react: {
            version: "detect", // Automatically detect React version
          },
        },
	ignores: ["eslint.config.mjs","*.config.js","*.config.cjs","build/","node_modules/"]
      },
    ];
