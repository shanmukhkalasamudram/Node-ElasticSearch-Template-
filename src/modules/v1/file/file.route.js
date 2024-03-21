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

router.get(
    '/search',
    authMiddleware({}),
    validationMiddleware(schema.get),
    controller.get
);

module.exports = router;
