const chalk = require('chalk');
const warn = (...args) => console.warn(chalk.yellow(...args));
const error = (...args) => console.error(chalk.redBright(...args));
const info = (...args) => console.info(chalk.green(...args));
const log = (...args) => console.log(chalk.whiteBright(...args));
const debug = (...args) => console.debug(chalk.bgYellow.black(...args));
const trace = (...args) => console.trace(chalk.bgRed.black(...args));

const logger = {warn, error, info, log, debug, trace};

const test = _ => {
    logger.log("log");
    logger.warn("warn");
    logger.error("error");
    logger.info("info");
    logger.debug("debug");
    logger.trace("trace");
}

logger.test = test;

module.exports = logger;
