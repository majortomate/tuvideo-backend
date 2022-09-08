/* payment index route */
const { Router } = require('express');

const { handlerPayment } = require('./payment.controller');
const { isAuthenticated } = require('../auth/local/auth.service');

const router = Router();

router.post('/', isAuthenticated, handlerPayment);

module.exports = router;


