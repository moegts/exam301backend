const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemsSchema = new Schema({
    id:String,
    title:String,
    dateCreated:String,
    description:String,
    imageUrl:String
});

const ItemsModel = mongoose.model("itemsModel", itemsSchema);

module.exports = {ItemsModel};