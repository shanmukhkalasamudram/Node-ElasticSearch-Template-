const config = require('config');
const { Client } = require('@elastic/elasticsearch');

process.env.TZ = 'Asia/Kolkata';

const logger = require('./util/logger/logger.util');
require('./util/axios');

async function bootstrap() {

    const app = require('./app');
    const elasticClient = new Client(config.ELASTIC);

    elasticClient.info()
        .then(response => logger.info(response))
        .catch(error => logger.info(error))
    app.listen(config.APP.PORT, () =>
        logger.info(`server running on port ${config.APP.PORT}`)
    );
}

bootstrap();
