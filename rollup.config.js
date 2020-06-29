import typescript from "@rollup/plugin-typescript";

export default [
  {
    input: "./src/index.tsx",
    output: [
      {
        dir: "dist",
        format: "cjs",
      },
    ],
    external: ["react", "tiny-flag", "emoji-supported"],
    plugins: [typescript({ declaration: true, declarationDir: "dist" })],
  },
  {
    input: "./src/index.tsx",
    output: [
      {
        file: "dist/index.mjs",
        format: "es",
      },
    ],
    external: ["react", "tiny-flag", "emoji-supported"],
    plugins: [typescript({})],
  },
];
