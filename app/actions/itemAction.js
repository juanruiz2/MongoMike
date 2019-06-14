const Item = require('../models/Item');

const createItem= async(data) => {
    return Item.create(data);
}

const getAllItems = () => {
    return Item.find();
}

const getOneItem = (id) => {
    return Item.findById(id);
}

const deleteOneItem = (id) => {
    return Item.findByIdAndDelete(id);
}

const updateOneItem = (id, data) => {
    console.log(id)
    console.log(data)
  return  Item.findOneAndUpdate(id, {$set: data}, {new: true})
} 

module.exports = {
    createItem,
    getAllItems,
    getOneItem,
    deleteOneItem,
    updateOneItem,
}