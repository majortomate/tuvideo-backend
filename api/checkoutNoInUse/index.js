/* checkout.index */
 const express = require('express');
 const { Router } = express;
 const { handlerCheckout } = require('./checkout.controller.js')

 const router = Router();


 router.post('/' , handlerCheckout)
 module.exports = router;
