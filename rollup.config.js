import { terser } from "rollup-plugin-terser";
import babel from 'rollup-plugin-babel';
import vue from 'rollup-plugin-vue2';
import postcss from 'rollup-plugin-postcss'

import fs from 'fs'
import path from 'path'

import simplevars from 'postcss-simple-vars';
import nested from 'postcss-nested';
import cssnext from 'postcss-cssnext';
import cssnano from 'cssnano';

const items = fs.readdirSync('./src/components');

const dirs = items.filter(item => {
  return fs.statSync(path.resolve('./src/components', item)).isDirectory()
})

export default dirs.map(dir => {
  return {
    input: `./src/components/${dir}/index.js`,
    output: [
      {
        file: `es/${dir}/index.js`,
        format: 'esm'
      },
      {
        file: `lib/${dir}/index.js`,
        name: `v-${dir}`,
        format: 'umd',
        exports: 'named'
      }
    ],
    plugins: [
      vue(),
      terser(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      postcss({
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ],
        extensions: ['.css'],
        extract: true
      })  
    ]
  }
}).concat([
  {
    input: `./src/index.js`,
    output: [
      {
        file: `es/index.js`,
        format: 'esm'
      },
      {
        file: `lib/index.js`,
        name: `v-ui`,
        format: 'umd',
        exports: 'named'
      }
    ],
    plugins: [
      vue(),
      terser(),
      babel({
        exclude: 'node_modules/**',
        runtimeHelpers: true
      }),
      postcss({
        plugins: [
          simplevars(),
          nested(),
          cssnext({ warnForDuplicates: false, }),
          cssnano(),
        ],
        extensions: ['.css'],
        extract: true
      })  
    ]
  }
])