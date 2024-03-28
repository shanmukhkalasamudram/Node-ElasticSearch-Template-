const router = require('express').Router();
const authMiddleware = require('../../../middlewares/authentication.middleware');
const validationMiddleware = require('../../../middlewares/validation.middleware');
const controller = require('./file.controller');
const schema = require('./file.schema');

router.post(
  '/',
  authMiddleware({}),
  validationMiddleware(schema.get),
  controller.post
);

router.put(
  '/:id',
  authMiddleware({}),
  validationMiddleware(schema.get),
  controller.put
);

router.get(
  '/search',
  authMiddleware({}),
  validationMiddleware(schema.get),
  controller.get
);

router.get(
  '/pending-list',
  authMiddleware({}),
  validationMiddleware(schema.get),
  controller.list
);

router.get(
  '/list',
  authMiddleware({}),
  validationMiddleware(schema.get),
  controller.completeList
);

module.exports = router;
