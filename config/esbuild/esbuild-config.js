const Esbuild = require('esbuild')
const path = require('path')

Esbuild.build({
    bundle: true,
    entryNames: "bundle",
    minify: process.env.MODE === 'production',
    outdir: path.resolve(__dirname, "..", "..", "build"),
    entryPoints: [path.resolve(__dirname, "..", "..", "src", "index.jsx")],
    sourcemap: process.env.MODE === 'development '
})