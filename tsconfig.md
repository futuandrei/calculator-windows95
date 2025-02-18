```js
{
  "compilerOptions": {
    "module": "CommonJS",
    "moduleResolution": "Node",
    "target": "ES2021",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true
  },
  "include": ["src", "tests"],
  "exclude": ["dist", "node_modules"]
}
```

✔ module: "CommonJS" → Ensures Mocha and Node.js can correctly import your files.
✔ target: "ES2021" → Keeps TypeScript stable and avoids experimental features.
✔ No "tests" in exclude → Allows TypeScript to recognize and compile test files.
✔ outDir: "./dist" → Keeps compiled files separate from source files.
