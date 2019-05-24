const {join} = require('path');
const {author, license, name, version} = require('./package.json');
const cwd = __dirname;

const {UI_LIB} = process.env;

const rollupConfig = {
    outputConfig: {
        exports: 'named',
    }
}

module.exports = {
    banner: {
        author: `2018-${new Date().getFullYear()} ${author}\n * Github https://github.com/xaboy/form-create`,
        license,
        name,
        version
    },
    globals: {
        vue: 'Vue',
        iview: 'iview'
    },
    externals: ['vue', 'Vue', 'iview', 'iView'],
    output: {
        format: ['umd'],
        moduleName: 'formCreate',
        fileName: `form-create.${UI_LIB}.js`
    },
    input: join(cwd, '/src/index.js'),
    extendRollupConfig: (config) => {
        config.outputConfig = Object.assign({}, config.outputConfig, {'outputConfig': rollupConfig.outputConfig});
        return config;
    },
    env: {
        'NODE_ENV': 'production',
        'VERSION': version,
        'UI': UI_LIB,
    },
    presets: ['@vue/babel-preset-jsx']
}