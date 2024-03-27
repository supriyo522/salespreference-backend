const express = require('express');
const router = express.Router();
const Sale = require('../models/Sale');

router.get('/', async (req, res) => {
  try {
    const sales = await Sale.find();
    res.json(sales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post('/', async (req, res) => {
    const sale = new Sale({
      date: req.body.date,
      product: req.body.product,
      quantity: req.body.quantity,
      price: req.body.price,
    });
  
    try {
      const newSale = await sale.save();
      res.status(201).json(newSale);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.put('/:id', async (req, res) => {
    try {
      const updatedSale = await Sale.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedSale);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  
  router.delete('/:id', async (req, res) => {
    try {
      await Sale.findByIdAndDelete(req.params.id);
      res.json({ message: 'Sale deleted successfully' });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  });
  

module.exports = router;
