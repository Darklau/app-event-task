import cracoAlias from 'craco-alias';

const path = require('path');

module.exports = {
    plugins: [
        {
            plugin: cracoAlias,
            options: {
                baseUrl: "./src",
                source: "jsconfig",
            }
        }
    ],
    // webpack: {
    //     alias: {
    //         '@/.': path.resolve(__dirname, 'src'),
    //     },
    // },
};