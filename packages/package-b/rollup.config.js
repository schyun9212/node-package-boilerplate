import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import url from "@rollup/plugin-url";
import svgr from "@svgr/rollup";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import { terser } from "rollup-plugin-terser";
import typescript from "rollup-plugin-typescript2";
import pkg from "./package.json";

export default {
  input: "src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "cjs",
    },
    {
      file: `${pkg.main.split(".js")[0]}.min.js`,
      formant: "cjs",
      plugins: [terser()],
    },
    {
      file: pkg.module,
      format: "esm",
    },
    {
      file: `${pkg.module.split(".js")[0]}.min.js`,
      format: "esm",
      plugins: [terser()],
    },
  ],
  plugins: [
    commonjs(),
    resolve(),
    url(), // Enable to load media files as dataURI
    svgr(), // Enable to use svg as component
    peerDepsExternal(), // Set modules in peerDependencies as external to exclude from bundle
    babel({ exclude: "node_modules/**" }),
    typescript({
      tsconfigOverride: { compilerOptions: { declarationMap: false } },
      useTsconfigDeclarationDir: true,
    }),
  ],
};
