const errorDecorator = require('../../../util/error-decorator/error-decorator.util');
const service = require('./file.service');

const post = errorDecorator(async (req, _res, next) => {
    const data = await service.post();
    next(data);
});

const get = errorDecorator(async (req, _res, next) => {
    const data = await service.get();
    next(data);
});

module.exports = {
    post,
    get
};
