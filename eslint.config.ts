import {defineConfig} from "eslint/config";
import js from "@eslint/js";


export default defineConfig([
  {
    plugins: {
      js
    },
    extends: ["js/recommended"],
    rules: {
      "react/display-name": "off",
      "react-hooks/exhaustive-deps": "off",
    },
  }
]);