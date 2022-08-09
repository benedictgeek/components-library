// const typscript = require('rollup-plugin-typescript2');
const typscript = require('@rollup/plugin-typescript');
const image = require('@rollup/plugin-image');

module.exports = {
  rollup(config, options) {
    // config.plugins.push([
    //   typscript({
    //     exclude: ['**/*.stories.tsx'],
    //   }),
    //   image({ exclude: ['*.jpeg'] }),
    // ]);
    return config;
  },
};
