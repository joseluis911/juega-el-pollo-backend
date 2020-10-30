const express = require('express');
const purchasesController =  require('../controllers/purchases');
const router = express.Router();

// GET /user/purchases
router.get('/purchases', purchasesController.getPurchases);

// POST /user/newPurchase
router.post('/newPurchase', purchasesController.newPurchase);

module.exports = router;