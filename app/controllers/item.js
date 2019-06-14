const {
  createItem,
  getAllItems,
  getOneItem,
  deleteOneItem,
  updateOneItem } = require('../actions');

const ItemCreate = (req, res) => {
  createItem(req.body)
    .then(
      item => res.status(201).json({
        "message": "Item Created",
        item,
      })
    ).catch((error) => res.status(400).send(error))
}

const getItems = (req, res) => {
  getAllItems()
    .then(
      items => res.status(201).json({
        items,
      })
    ).catch((error) => res.status(400).send(error))
};

const getItem = (req, res) => {
  const id = req.params.id;
  getOneItem(id)
    .then(
      items => res.status(201).json({
        items,
      })
    ).catch((error) => res.status(400).send(error))
};

const deleteItem = (req, res) => {
  const id = req.params.id;
  deleteOneItem(id)
    .then(
      (items) => {
        if (items === null) {
          return res.status(404).send("No existe")
        }
        return res.status(200).json({
          message: "Eso perro ",
          items,
        })
      })
    .catch((error) => res.status(400).send(error))
};

const updateItem = (req, res) => {
  console.log("hola")
  const data = req.body;
  const id = req.params.id;
  updateOneItem(id, data)
    .then(
      (items) => {
        item => res.status(200).json({
          item,
        })
      })
    .catch((error) => res.status(400).send(error))
}


module.exports = {
  ItemCreate,
  getItems,
  getItem,
  deleteItem,
  updateItem,

}