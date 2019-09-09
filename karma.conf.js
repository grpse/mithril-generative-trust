process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = (config) => {
    config.set({
        basePath: '',
        frameworks: ["mocha", "chai"],
        files: [
            'node_modules/mithril/mithril.js',
            'spec/index.spec.js',
        ],
        preprocessors: {
            'spec/lib/mithril-query/mithril-query.js' : ['webpack'],
            'spec/**/*.spec.js': ['webpack'],
            'spec/index.spec.js': ['webpack']
        },
        exclude: [],
        reporters: ['spec'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        // browsers: ['Chrome'],
        // singleRun: false
        browsers: ['ChromeHeadless'],
        singleRun: true
    });
};
