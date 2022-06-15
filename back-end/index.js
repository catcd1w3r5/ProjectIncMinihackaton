const express = require('express');
const {
    loadEndpoints,
    loadMiddlewares,
    setLoggingEndpointOrMiddlewareDisabled,
    setLoggingFileSkipped
} = require('./ExpressServer');
const port = process.env.PORT || 3030;


const app = express();
setLoggingFileSkipped(console.warn);
setLoggingEndpointOrMiddlewareDisabled(console.warn);

loadEndpoints(app, './controller/endpoints');
loadMiddlewares(app, './middlewares');

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
