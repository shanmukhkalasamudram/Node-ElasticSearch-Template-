const config = {
    APP: {
        MORGAN_LOG_LEVEL: process.env.MORGAN_LOG_LEVEL || 'combined',
        NODE_ENV: process.env.NODE_ENV || 'test',
        PORT: process.env.PORT || 5000,
    },
    LOGGER: {
        LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
        MORGAN_LOG_LEVEL: process.env.MORGAN_LOG_LEVEL || 'combined',
        SILENT_LOGGER: process.env.SILENT_LOGGER || false,
    },
    ELASTIC: process.env.ELASTIC || { node: 'http://localhost:9200' }
};
module.exports = config;
