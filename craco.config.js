const cracoAlias = require('craco-alias');

const path = require('path');

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                tsConfigPath: "./tsconfig.paths.json",
                baseUrl: "./src",
                source: "tsconfig",
            }
        }
    ],
    // webpack: {
    //     alias: {
    //         '@/.': path.resolve(__dirname, 'src'),
    //     },
    // },
};