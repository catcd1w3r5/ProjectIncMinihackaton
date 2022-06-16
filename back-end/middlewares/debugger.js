const logging = require('../logger');
/**
 *
 * @param req {Request}
 * @param _ {Response}
 * @param next
 */
module.exports = (req, _, next) => {
//log the request
    let info =
        `request method: ${req.method} \n
        request url: ${req.url} \n
        request headers: ${JSON.stringify(req.headers)} \n
        request body: ${JSON.stringify(req.body)} \n
        request params: ${JSON.stringify(req.params)} \n
        request query: ${JSON.stringify(req.query)} \n
        request cookies: ${JSON.stringify(req.cookies)} \n
        request ip: ${req.ip}        
        `;

    logging.info(info);
    next();
}
