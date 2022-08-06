const typscript = require('rollup-plugin-typescript2');

module.exports = {
  rollup(config, options) {
    config.plugins.push(
    //   typscript({
    //     // exclude: ['**/*.stories.tsx'],
    //   })
    );
    return config;
  },
};
