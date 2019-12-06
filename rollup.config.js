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

const getPlugin = (isComponent = false) => {
  return [
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
      extract: isComponent ? true : 'lib/index.css'
    })  
  ]
}

export default dirs.map(dir => {
  return {
    input: `./src/components/${dir}/index.js`,
    output: {
      file: `lib/${dir}/index.js`,
      name: `v-${dir}`,
      format: 'umd',
      exports: 'named'
    },
    plugins: getPlugin(true)
  }
}).concat([
  {
    input: `./src/index.esm.js`,
    output: {
      file: `lib/v-ui.esm.js`,
      format: 'esm'
    },
    plugins: getPlugin(false)
  },
  {
    input: `./src/index.umd.js`,
    output: {
      file: `lib/v-ui.umd.js`,
      name: `v-ui`,
      format: 'umd',
      exports: 'named'
    },
    plugins: getPlugin(false)
  }
])