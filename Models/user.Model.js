const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const favListSchema = new Schema({
    email:String,
    list:Array
});

const favListModel = mongoose.model("favList", favListSchema);

module.exports = {favListModel};