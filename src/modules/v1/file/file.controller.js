const errorDecorator = require('../../../util/error-decorator/error-decorator.util');
const service = require('./file.service');

const post = errorDecorator(async (req, _res, next) => {
  const { body } = req;
  const data = await service.post(body);
  next(data);
});

const put = errorDecorator(async (req, _res, next) => {
  const { body } = req;
  const { id } = req.params;
  const data = await service.put({ body, id });
  next(data);
});

const get = errorDecorator(async (req, _res, next) => {
  const { keyword } = req.query;
  const data = await service.get(keyword);
  next(data);
});

const list = errorDecorator(async (req, _res, next) => {
  const data = await service.list();
  next(data);
});

const completeList = errorDecorator(async (req, _res, next) => {
  const { page, limit } = req.query;
  const { user_id } = req.headers;
  const data = await service.completeList({ user_id, page, limit });
  next(data);
});

module.exports = {
  post,
  get,
  list,
  put,
  completeList,
};
