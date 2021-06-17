module.exports = {
	parser: 'babel-eslint',
	plugins: [
		'react',
		'react-hooks',
	],
	env: {
		browser: true,
		node: true,
		jquery: true,
		es6: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:react/recommended',
	],
	overrides: [
		{
			// for files matching this pattern
			files: ['*.ts', '*.tsx'],
			// following config will override "normal" config
			parser: '@typescript-eslint/parser',
			plugins: [
				'@typescript-eslint',
			],
			extends: ['plugin:@typescript-eslint/recommended'],
			rules: {
				'@typescript-eslint/no-var-requires': 'off',
				'@typescript-eslint/no-use-before-define': ['error', 'nofunc'],
			},
		},
	],
	globals: {
		Log: 'readonly',
		Logger: 'readonly',
		ServerDate: 'readonly',
		js: 'readonly',
		jp: 'readonly',
		pi: 'readonly',
		S3: 'readonly',
		Assets: 'readonly',
		// "var2": "writable"
	},
	rules: {
		// "graphql/template-strings": ['error', {
		//   env: 'apollo',
		// }],
		// babel inserts 'use strict'; for us
		// http://eslint.org/docs/rules/strict
		strict: ['error', 'never'],
		////////// Possible Errors //////////
		'comma-dangle': ['warn', 'always-multiline'], // disallow trailing commas in object literals
		'no-console': 'warn', // disallow use of console (off by default in the node environment)
		'no-debugger': 'warn', // disallow use of debugger
		'block-scoped-var': 'off', // http://eslint.org/docs/rules/block-scoped-var
		'no-empty-class': 'off', // disallow the use of empty character classes in regular expressions
		'no-negated-in-lhs': 'off', // disallow negation of the left operand of an in expression
		'no-prototype-builtins': 'warn',
		'no-reserved-keys': 'off', // disallow reserved words being used as object literal keys (off by default)
		'no-unreachable': 'warn', // disallow unreachable statements after a return, throw, continue, or break statement
		'no-unused-vars': 'warn', // disallow unreachable statements after a return, throw, continue, or break statement
		'valid-jsdoc': 'warn', // Ensure JSDoc comments are valid (off by default)
		'no-var': 'off', // http://eslint.org/docs/rules/no-var
		////////// Variables //////////
		'no-catch-shadow': 'off', // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
		'no-label-var': 'off', // disallow labels that share a name with a variable
		'no-shadow': 'warn', // disallow declaration of variables already declared in the outer scope
		'no-undef-init': 'warn', // disallow use of undefined when initializing variables
		'no-undefined': 'warn', // disallow use of undefined variable (off by default)
		/*** Best practices */
		'consistent-return': 'warn', // http://eslint.org/docs/rules/consistent-return
		curly: ['warn', 'multi-line'], // http://eslint.org/docs/rules/curly
		'default-case': 'off', // http://eslint.org/docs/rules/default-case
		'dot-notation': [
			'warn',
			{
				// http://eslint.org/docs/rules/dot-notation
				allowKeywords: true,
			},
		],
		eqeqeq: 'warn', // http://eslint.org/docs/rules/eqeqeq
		'guard-for-in': 'warn', // http://eslint.org/docs/rules/guard-for-in
		'no-caller': 'warn', // http://eslint.org/docs/rules/no-caller
		'no-else-return': 'warn', // http://eslint.org/docs/rules/no-else-return
		'no-eq-null': 'warn', // http://eslint.org/docs/rules/no-eq-null
		'no-eval': 'warn', // http://eslint.org/docs/rules/no-eval
		'no-extend-native': [
			'warn',
			{
				exceptions: ['Array', 'String', 'Date'],
			},
		], // http://eslint.org/docs/rules/no-extend-native
		'no-extra-bind': 'warn', // http://eslint.org/docs/rules/no-extra-bind
		'no-extra-semi': 'warn', // http://eslint.org/docs/rules/no-extra-bind
		'no-floating-decimal': 'warn', // http://eslint.org/docs/rules/no-floating-decimal
		'no-implied-eval': 'warn', // http://eslint.org/docs/rules/no-implied-eval
		'no-lone-blocks': 'warn', // http://eslint.org/docs/rules/no-lone-blocks
		'no-loop-func': 'warn', // http://eslint.org/docs/rules/no-loop-func
		'no-multi-str': 'warn', // http://eslint.org/docs/rules/no-multi-str
		'no-native-reassign': 'warn', // http://eslint.org/docs/rules/no-native-reassign
		'no-new': 'warn', // http://eslint.org/docs/rules/no-new
		'no-new-func': 'warn', // http://eslint.org/docs/rules/no-new-func
		'no-new-wrappers': 'warn', // http://eslint.org/docs/rules/no-new-wrappers
		'no-octal-escape': 'warn', // http://eslint.org/docs/rules/no-octal-escape
		'no-param-reassign': 'off', // http://eslint.org/docs/rules/no-param-reassign
		'no-proto': 'warn', // http://eslint.org/docs/rules/no-proto
		'no-return-assign': 'error', // http://eslint.org/docs/rules/no-return-assign
		'no-script-url': 'warn', // http://eslint.org/docs/rules/no-script-url
		'no-self-compare': 'warn', // http://eslint.org/docs/rules/no-self-compare
		'no-sequences': 'warn', // http://eslint.org/docs/rules/no-sequences
		'no-throw-literal': 'warn', // http://eslint.org/docs/rules/no-throw-literal
		radix: 'warn', // http://eslint.org/docs/rules/radix
		'vars-on-top': 'off', // http://eslint.org/docs/rules/vars-on-top
		'wrap-iife': ['warn', 'any'], // http://eslint.org/docs/rules/wrap-iife
		yoda: 'warn', // http://eslint.org/docs/rules/yoda
		'max-len': 'off', // http://eslint.org/docs/rules/max-len
		/**
		 * Style
		 */
		indent: [
			'warn',
			'tab',
			{
				SwitchCase: 1,
				ignoredNodes: ['TemplateLiteral'],
			},
		], // http://eslint.org/docs/rules/indent
		'brace-style': [
			'warn', // http://eslint.org/docs/rules/brace-style
			'stroustrup',
			{
				allowSingleLine: true,
			},
		],
		quotes: [
			'warn',
			'single',
			'avoid-escape', // http://eslint.org/docs/rules/quotes
		],
		camelcase: [
			'warn',
			{
				// http://eslint.org/docs/rules/camelcase
				properties: 'never',
			},
		],
		'comma-spacing': [
			'warn',
			{
				// http://eslint.org/docs/rules/comma-spacing
				before: false,
				after: true,
			},
		],
		'comma-style': ['warn', 'last'], // http://eslint.org/docs/rules/comma-style
		'eol-last': 'warn', // http://eslint.org/docs/rules/eol-last
		'func-names': 'off', // http://eslint.org/docs/rules/func-names
		'func-style': 'off', // http://eslint.org/docs/rules/func-style
		'key-spacing': [
			'warn',
			{
				// http://eslint.org/docs/rules/key-spacing
				beforeColon: false,
				afterColon: true,
			},
		],
		'new-cap': [
			'warn',
			{
				// http://eslint.org/docs/rules/new-cap
				newIsCap: true,
				capIsNewExceptions: [
					'Class',
					'SafeString',
					'Given',
					'When',
					'Then',
					'Match',
					'Optional',
					'Maybe',
					'OneOf',
				],
			},
		],
		'no-multiple-empty-lines': [
			'warn',
			{
				// http://eslint.org/docs/rules/no-multiple-empty-lines
				max: 2,
			},
		],
		'no-nested-ternary': 'off', // http://eslint.org/docs/rules/no-nested-ternary
		'no-new-object': 'warn', // http://eslint.org/docs/rules/no-new-object
		'no-array-constructor': 'warn', // http://eslint.org/docs/rules/no-array-constructor
		'no-spaced-func': 'warn', // http://eslint.org/docs/rules/no-spaced-func
		'no-trailing-spaces': 'warn', // http://eslint.org/docs/rules/no-trailing-spaces
		'no-wrap-func': 'off', // http://eslint.org/docs/rules/no-wrap-func
		'no-underscore-dangle': 'off', // http://eslint.org/docs/rules/no-underscore-dangle
		'one-var': 'off', // http://eslint.org/docs/rules/one-var
		'object-curly-spacing': ['warn', 'never'],
		'padded-blocks': ['warn', 'never'], // http://eslint.org/docs/rules/padded-blocks
		semi: ['warn', 'always'], // http://eslint.org/docs/rules/semi
		'semi-spacing': [
			'warn',
			{
				// http://eslint.org/docs/rules/semi-spacing
				before: false,
				after: true,
			},
		],
		'keyword-spacing': 'warn', // http://eslint.org/docs/rules/keyword-spacing
		'space-before-blocks': 'warn', // http://eslint.org/docs/rules/space-before-blocks
		'space-before-function-paren': ['warn', 'never'], // http://eslint.org/docs/rules/space-before-function-paren
		'space-infix-ops': 'warn', // http://eslint.org/docs/rules/space-infix-ops
		'spaced-line-comment': 'off', // http://eslint.org/docs/rules/spaced-line-comment
		'jsx-quotes': ['warn', 'prefer-single'],
		'react/jsx-tag-spacing': [
			'warn',
			{
				closingSlash: 'never',
				beforeSelfClosing: 'never',
				afterOpening: 'never',
				beforeClosing: 'never',
			},
		],
		'react/jsx-max-props-per-line': [
			'warn',
			{
				'maximum': 1,
				'when': 'multiline',
			},
		],
		'react/function-component-definition': [1, {
			'namedComponents': 'function-declaration',
			'unnamedComponents': 'function-expression',
		}],
		'react/jsx-handler-names': [1, {
			'eventHandlerPrefix': 'h',
		}],
		'react/jsx-props-no-multi-spaces': 1,
		'react/jsx-one-expression-per-line': 1,
		'react/jsx-no-useless-fragment': 1,
		'react/jsx-no-undef': 'error',
		'react/jsx-no-bind': [1, {
			'allowArrowFunctions': true,
			'allowFunctions': true,
		}],
		'react/jsx-indent': [1, 'tab', {checkAttributes: true, indentLogicalExpressions: true}],
		'react/self-closing-comp': 1,
		'react/sort-prop-types': ['warn', {
			'ignoreCase': true,
			'requiredFirst': true,
			'sortShapeProp': true,
		}],
		'react/react-in-jsx-scope': 2,
		'react/prefer-stateless-function': 1,
		'react/no-unused-prop-types': 1,
		'react/no-unused-state': 1,
		'react/no-multi-comp': 1,
		'react/no-access-state-in-setstate': 1,
		'react/no-deprecated': 'warn',
		'react/no-did-mount-set-state': 'warn',
		'react/no-did-update-set-state': 'warn',
		'react/boolean-prop-naming': 'warn',
		'react/display-name': 'warn',
		'react/forbid-prop-types': ['warn', {
			'forbid': ['any'],
		}],
		'react/jsx-first-prop-new-line': [1, 'multiline-multiprop'],
		'react/jsx-pascal-case': 'warn',
		'react/jsx-sort-props': 'warn',
		'react/jsx-uses-vars': 'error',
		'react/jsx-closing-tag-location': 'warn',
		'react/jsx-closing-bracket-location': 'warn',
		'react/jsx-boolean-value': ['warn', 'never'],
		'react/jsx-equals-spacing': ['warn', 'never'],
		'react/jsx-fragments': ['warn', 'syntax'],
		'react/jsx-wrap-multilines': ['warn', {
			'declaration': 'parens-new-line',
			'assignment': 'parens-new-line',
			'return': 'parens-new-line',
			'arrow': 'parens-new-line',
			'condition': 'parens-new-line',
			'logical': 'parens-new-line',
			'prop': 'parens-new-line',
		}],
		'react/no-array-index-key': 'warn',
		'react/no-children-prop': 'error',
		'react/no-direct-mutation-state': 'warn',
		'react/prop-types': 'warn',
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': ['warn', {'additionalHooks': 'useTracker|useArrayObjectTracker|useArrayObjectEffect|useArrayObjectCallback'}],

		// specific issues - https://stackoverflow.com/questions/63818415/react-was-used-before-it-was-defined/64024916#64024916
		// 'no-use-before-define': ['error', 'nofunc'], // disallow use of variables before they are defined
		'no-use-before-define': 'off',
		'no-restricted-imports': [
			'error',
			{
				'patterns': ['@material-ui/*/*/*', '!@material-ui/core/test-utils/*'],
			},
		],
	},
};
