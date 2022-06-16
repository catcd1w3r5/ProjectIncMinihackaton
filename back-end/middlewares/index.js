const debug = require('./debugger');

/**
 *
 * @param app {Express}
 */
module.exports = (app) => {
    app.use(debug);
}
