module.exports = {
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module",
    "ecmaFeatures": {
      "impliedStrict": true,
      "arrowFunctions": true
    }
  },
  "ignorePatterns": "node_modules",
  "env": {
    "es6": true
  },
  "globals": {
    "tabris": false,
    "$": false,
    "JSX": false,
    "localStorage": false,
    "XMLHttpRequest": false,
    "fetch": false,
    "device": false,
    "ImageData": false,
    "Worker": false,
    "onmessage": true,
    "postMessage": false,
    "console": false,
    "global": false,
    "__dirname": false,
    "setTimeout": false,
    "module": false,
    "createImageBitmap": false,
    "require": false,
    "FormData": false
  },
  "rules": {
    "eol-last": "warn",
    "eqeqeq": [
      "warn",
      "allow-null"
    ],
    "linebreak-style": [
      "warn",
      "unix"
    ],
    "no-trailing-spaces": "warn",
    "no-console": "off",
    "no-var": "warn",
    "no-invalid-this": "off",
    "prefer-const": "warn",
    "no-use-before-define": "off",
    "prefer-arrow-callback": [
      "warn",
      {
        "allowNamedFunctions": true,
        "allowUnboundThis": false
      }
    ]
  },
  "overrides": [
    {
      "files": [
        "*.ts",
        "*.jsx",
        "*.tsx"
      ],
      "env": {
        "node": true,
        "mocha": true
      },
      "parser": "@typescript-eslint/parser",
      "plugins": [
        "@typescript-eslint/eslint-plugin",
        "react"
      ],
      "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module",
        "project": "./tsconfig.json",
        "tsconfigRootDir": __dirname
      },
      "extends": [
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
      ],
      "rules": {
        "@typescript-eslint/await-thenable": "warn",
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/no-inferrable-types": "off",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-floating-promises": "error",
        "@typescript-eslint/no-namespace": "off",
        "@typescript-eslint/no-parameter-properties": "off",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/consistent-type-assertions": [
          "error",
          {
            "assertionStyle": "as",
            "objectLiteralTypeAssertions": "allow-as-parameter"
          }
        ],
        "react/jsx-uses-vars": "warn", // mark imports used as JSX elements as used
        "indent": "off",
        "react/jsx-indent-props": "warn", // works better than built-in "indent" rule
        "react/jsx-boolean-value": "warn",
        "react/jsx-curly-brace-presence": "warn",
        "react/jsx-curly-newline": "warn",
        "react/jsx-curly-spacing": "warn",
        "react/jsx-no-comment-textnodes": "warn",
        "react/jsx-no-duplicate-props": "warn",
        "react/jsx-pascal-case": "warn",
        "react/jsx-wrap-multilines": [
          "warn",
          {
            "declaration": "parens-new-line",
            "assignment": "parens-new-line",
            "return": "parens-new-line",
            "arrow": "ignore",
            "condition": "ignore",
            "logical": "ignore",
            "prop": "ignore"
          }
        ]
      },
      "overrides": [
        {
          "files": [
            "*.jsx"
          ],
          "rules": {
            "@typescript-eslint/explicit-member-accessibility": [
              "warn",
              {
                "accessibility": "no-public"
              }
            ]
          }
        }
      ]
    }
  ]
}
