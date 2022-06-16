const logger = require('./logger');
const app = require('express')();
const port = process.env.PORT || 3030;

require('./middlewares')(app);
require('./controller/endpoints')(app)

app.listen(port, () => {
    logger.info(`Server is running on port ${port}`);
});
