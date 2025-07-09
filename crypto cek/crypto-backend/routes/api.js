const express = require('express');
const router = express.Router();
const controller = require('../controllers/cryptoController');

//  get top 10 crypto
router.get('/top', controller.topCrypto);

//  get detail crypto
router.get('/:slug', controller.detailCrypto);

// get price crypto
router.get('/price/:slug', controller.priceCrypto);

// get rates crypto
router.get('/rates/:slug1/:slug2', controller.ratesCrypto);

module.exports = router;