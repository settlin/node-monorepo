module.exports = {
	parser: 'babel-eslint',
	plugins: ['react'
  ],
	env: {
		browser: true,
		node: true,
		jquery: true
  },
	rules: {
    // babel inserts "use strict"; for us
    // http://eslint.org/docs/rules/strict
		strict: ['error', 'never'
    ],
    ////////// Possible Errors //////////
		'comma-dangle': ['warn', 'always-multiline'
    ], // disallow trailing commas in object literals
		'no-cond-assign': 'warn', // disallow assignment in conditional expressions
		'no-console': 'warn', // disallow use of console (off by default in the node environment)
		'no-constant-condition': 'warn', // disallow use of constant expressions in conditions
		'no-control-regex': 'warn', // disallow control characters in regular expressions
		'no-debugger': 'warn', // disallow use of debugger
		'no-dupe-keys': 'warn', // disallow duplicate keys when creating object literals
		'no-duplicate-case': 'warn', // http://eslint.org/docs/rules/no-duplicate-case
		'block-scoped-var': 'off', // http://eslint.org/docs/rules/block-scoped-var
		'no-empty': 'warn', // disallow empty statements
		'no-empty-class': 'off', // disallow the use of empty character classes in regular expressions
		'no-ex-assign': 'warn', // disallow assigning to the exception in a catch block
		'no-extra-boolean-cast': 'off', // disallow double-negation boolean casts in a boolean context
		'no-extra-semi': 'warn', // disallow unnecessary semicolons
		'no-func-assign': 'warn', // disallow overwriting functions written as function declarations
		'no-inner-declarations': 'warn', // disallow function or variable declarations in nested blocks
		'no-invalid-regexp': 'error', // disallow invalid regular expression strings in the RegExp constructor
		'no-irregular-whitespace': 'warn', // disallow irregular whitespace outside of strings and comments
		'no-negated-in-lhs': 'off', // disallow negation of the left operand of an in expression
		'no-obj-calls': 'warn', // disallow the use of object properties of the global object (Math and JSON) as functions
		'no-regex-spaces': 'off', // disallow multiple spaces in a regular expression literal
		'no-reserved-keys': 'off', // disallow reserved words being used as object literal keys (off by default)
		'no-sparse-arrays': 'warn', // disallow sparse arrays
		'no-unreachable': 'warn', // disallow unreachable statements after a return, throw, continue, or break statement
		'use-isnan': 'warn', // disallow comparisons with the value NaN
		'valid-jsdoc': 'warn', // Ensure JSDoc comments are valid (off by default)
		'valid-typeof': 'warn', // Ensure that the results of typeof are compared against a valid string
		'no-var': 'off', // http://eslint.org/docs/rules/no-var
    ////////// Variables //////////
		'no-catch-shadow': 'off', // disallow the catch clause parameter name being the same as a variable in the outer scope (off by default in the node environment)
		'no-delete-var': 'off', // disallow deletion of variables
		'no-label-var': 'off', // disallow labels that share a name with a variable
		'no-shadow': 'warn', // disallow declaration of variables already declared in the outer scope
		'no-shadow-restricted-names': 'warn', // disallow shadowing of names such as arguments
		'no-undef': 'off', // disallow use of undeclared variables unless mentioned in a /*global */ block
		'no-undef-init': 'warn', // disallow use of undefined when initializing variables
		'no-undefined': 'warn', // disallow use of undefined variable (off by default)
		'no-use-before-define': ['warn', 'nofunc'
    ], // disallow use of variables before they are defined
		'no-unused-vars': [
			'warn',
      {
        // // disallow declaration of variables that are not used in the code
				vars: 'local',
				args: 'after-used',
				varsIgnorePattern: 'React|AppContainer|Blaze'
      }
    ],
    /*** Best practices */
		'consistent-return': 'warn', // http://eslint.org/docs/rules/consistent-return
		curly: ['warn', 'multi-line'
    ], // http://eslint.org/docs/rules/curly
		'default-case': 'off', // http://eslint.org/docs/rules/default-case
		'dot-notation': [
			'warn',
      {
        // http://eslint.org/docs/rules/dot-notation
				allowKeywords: true
      }
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
				exceptions: ['Array', 'String', 'Date'
        ]
      }
    ], // http://eslint.org/docs/rules/no-extend-native
		'no-extra-bind': 'warn', // http://eslint.org/docs/rules/no-extra-bind
		'no-fallthrough': 'warn', // http://eslint.org/docs/rules/no-fallthrough
		'no-floating-decimal': 'warn', // http://eslint.org/docs/rules/no-floating-decimal
		'no-implied-eval': 'warn', // http://eslint.org/docs/rules/no-implied-eval
		'no-lone-blocks': 'warn', // http://eslint.org/docs/rules/no-lone-blocks
		'no-loop-func': 'warn', // http://eslint.org/docs/rules/no-loop-func
		'no-multi-str': 'warn', // http://eslint.org/docs/rules/no-multi-str
		'no-native-reassign': 'warn', // http://eslint.org/docs/rules/no-native-reassign
		'no-new': 'warn', // http://eslint.org/docs/rules/no-new
		'no-new-func': 'warn', // http://eslint.org/docs/rules/no-new-func
		'no-new-wrappers': 'warn', // http://eslint.org/docs/rules/no-new-wrappers
		'no-octal': 'warn', // http://eslint.org/docs/rules/no-octal
		'no-octal-escape': 'warn', // http://eslint.org/docs/rules/no-octal-escape
		'no-param-reassign': 'off', // http://eslint.org/docs/rules/no-param-reassign
		'no-proto': 'warn', // http://eslint.org/docs/rules/no-proto
		'no-redeclare': 'warn', // http://eslint.org/docs/rules/no-redeclare
		'no-return-assign': 'warn', // http://eslint.org/docs/rules/no-return-assign
		'no-script-url': 'warn', // http://eslint.org/docs/rules/no-script-url
		'no-self-compare': 'warn', // http://eslint.org/docs/rules/no-self-compare
		'no-sequences': 'warn', // http://eslint.org/docs/rules/no-sequences
		'no-throw-literal': 'warn', // http://eslint.org/docs/rules/no-throw-literal
		'no-with': 'warn', // http://eslint.org/docs/rules/no-with
		radix: 'warn', // http://eslint.org/docs/rules/radix
		'vars-on-top': 'off', // http://eslint.org/docs/rules/vars-on-top
		'wrap-iife': ['warn', 'any'
    ], // http://eslint.org/docs/rules/wrap-iife
		yoda: 'warn', // http://eslint.org/docs/rules/yoda
		'max-len': 'off', // http://eslint.org/docs/rules/max-len
    /**
		 * Style
		 */
		indent: [
			'warn',
			'tab',
      {
				SwitchCase: 1
      }
    ], // http://eslint.org/docs/rules/indent
		'brace-style': [
			'warn', // http://eslint.org/docs/rules/brace-style
			'stroustrup',
      {
				allowSingleLine: true
      }
    ],
		quotes: [
			'warn',
			'single',
			'avoid-escape' // http://eslint.org/docs/rules/quotes
    ],
		camelcase: [
			'warn',
      {
        // http://eslint.org/docs/rules/camelcase
				properties: 'never'
      }
    ],
		'comma-spacing': [
			'warn',
      {
        // http://eslint.org/docs/rules/comma-spacing
				before: false,
				after: true
      }
    ],
		'comma-style': ['warn', 'last'
    ], // http://eslint.org/docs/rules/comma-style
		'eol-last': 'warn', // http://eslint.org/docs/rules/eol-last
		'func-names': 'off', // http://eslint.org/docs/rules/func-names
		'func-style': 'off', // http://eslint.org/docs/rules/func-style
		'key-spacing': [
			'warn',
      {
        // http://eslint.org/docs/rules/key-spacing
				beforeColon: false,
				afterColon: true
      }
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
					'OneOf'
        ]
      }
    ],
		'no-multiple-empty-lines': [
			'warn',
      {
        // http://eslint.org/docs/rules/no-multiple-empty-lines
				max: 2
      }
    ],
		'no-nested-ternary': 'off', // http://eslint.org/docs/rules/no-nested-ternary
		'no-new-object': 'warn', // http://eslint.org/docs/rules/no-new-object
		'no-array-constructor': 'warn', // http://eslint.org/docs/rules/no-array-constructor
		'no-spaced-func': 'warn', // http://eslint.org/docs/rules/no-spaced-func
		'no-trailing-spaces': 'warn', // http://eslint.org/docs/rules/no-trailing-spaces
		'no-wrap-func': 'off', // http://eslint.org/docs/rules/no-wrap-func
		'no-underscore-dangle': 'off', // http://eslint.org/docs/rules/no-underscore-dangle
		'one-var': 'off', // http://eslint.org/docs/rules/one-var
		'object-curly-spacing': ['warn', 'never'
    ],
		'padded-blocks': ['warn', 'never'
    ], // http://eslint.org/docs/rules/padded-blocks
		semi: ['warn', 'always'
    ], // http://eslint.org/docs/rules/semi
		'semi-spacing': [
			'warn',
      {
        // http://eslint.org/docs/rules/semi-spacing
				before: false,
				after: true
      }
    ],
		'keyword-spacing': 'warn', // http://eslint.org/docs/rules/keyword-spacing
		'space-before-blocks': 'warn', // http://eslint.org/docs/rules/space-before-blocks
		'space-before-function-paren': ['warn', 'never'
    ], // http://eslint.org/docs/rules/space-before-function-paren
		'space-infix-ops': 'warn', // http://eslint.org/docs/rules/space-infix-ops
		'spaced-line-comment': 'off', // http://eslint.org/docs/rules/spaced-line-comment
		'jsx-quotes': ['warn', 'prefer-single'
    ],
		'react/jsx-uses-vars': 'error',
		'react/jsx-tag-spacing': [
			'warn',
      {
				closingSlash: 'never',
				beforeSelfClosing: 'never',
				afterOpening: 'never',
				beforeClosing: 'never'
      }
    ]
  }
};
