const { series } = require('gulp');
const Server = require('karma').Server;

function defaultTask(cb) {
    new Server({
        configFile: `${__dirname}/karma.conf.js`
    }, cb).start();
}

exports.default = defaultTask;