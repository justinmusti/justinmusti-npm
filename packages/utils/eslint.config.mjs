import typescriptEslint from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import path from "node:path"
import { fileURLToPath } from "node:url"
import js from "@eslint/js"
import { FlatCompat } from "@eslint/eslintrc"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
})

export default [{
    ignores: [
        "**/dist/",
        "**/dist/*",
        "./eslint.config.mjs"
    ]
}, ...compat.extends(
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/stylistic"), {
    plugins: {
        "@typescript-eslint": typescriptEslint
    },

    languageOptions: {
        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "script",
        parserOptions: {
            sourceType: "module",
            tsconfigRootDir: "./",
            project: "./tsconfig.json"
        }
    },
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
        "no-console": ["error"],
        "object-curly-spacing": ["error", "always"],
        semi: ["error", "never"],

        "sort-imports": ["error", {
            ignoreCase: true,
            ignoreDeclarationSort: false,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
            allowSeparatedGroups: false
        }],

        quotes: ["error", "double", {
            allowTemplateLiterals: true
        }],

        "@typescript-eslint/no-misused-promises": ["error", {
            checksVoidReturn: {
                attributes: false
            }
        }],

        "react/no-unescaped-entities": 0,
        "react-hooks/exhaustive-deps": 0
    }
}]