const express = require('express');
const {
    ItemCreate, 
    getItems, 
    getItem,
    deleteItem,
    updateItem,
} = require('../controllers/item');

const router = express.Router();

router.get('/', (req,res) => {
    res.send({ message: 'Server on C:'})
});

//Item

router.post('/item', ItemCreate);
router.get('/items', getItems);
router.get('/itembyid/:id', getItem);
router.delete('/deloneitem/:id', deleteItem);
router.put('/update/:id', updateItem);


module.exports = router;