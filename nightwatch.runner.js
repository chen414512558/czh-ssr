// start the dev driver usring production
const spawn = require('cross-spawn');
let opts = process.argv.slice(2);

if (opts.indexOf('--config') === -1) {
    opts = opts.concat(['--config', './nightwatch.conf.js']);
}

if (opts.indexOf('--env') === -1) {
    opts = opts.concat(['--env', 'chrome']);
}

let runner = spawn('./node_modules/.bin/nightwatch', opts, { stdio: 'inherit' });

runner.on('exit', function (code) {
    process.exit(code)
});

runner.on('error', function (err) {
    throw err
});
