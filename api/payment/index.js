/* payment index route */
const { Router } = require('express');

const { handlerPayment } = require('./payment.controller');

const router = Router();

router.post('/', handlerPayment);

module.exports = router;


