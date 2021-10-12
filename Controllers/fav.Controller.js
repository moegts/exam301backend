const { ItemsModel } = require('../Models/iteams.Model')
const { favListModel } = require('../Models/user.Model')
const axios = require('axios');

let seedData = async (req, res) => {
    let url = 'https://ltuc-asac-api.herokuapp.com/programmingLangData';
    let axiosData = await axios.get(url);
    let cleanedData = axiosData.data.map(e => {
        return new ItemsModel({
            id: e.id,
            title: e.title,
            dateCreated: e.dateCreated,
            description: e.description,
            imageUrl: e.imageUrl,
        })
    })
    cleanedData.map(e => { e.save() });
}

let getData = async (req, res) => {
    let checker = await ItemsModel.find({});
    res.status(200).json(checker);
}

let checkUser = async (req, res) => {
    let email = req.params.email;
    let checker = await favListModel.findOne({ email });
    if (checker === null) new favListModel({ email }).save(), res.status(200).json('added');
    if (checker != null) res.status(200).json(`welcome: ${email}`);
}

let getUserData = async (req, res) => {
    let email = req.params.email;
    let checker = await favListModel.findOne({ email });
    res.status(200).json(checker);
}

let addToFav = async (req,res) => {
    let id=req.params.id;
    let email=req.params.email;
    let pickedIteam = await ItemsModel.findOne({id});
    let userlist = await favListModel.findOneAndUpdate({email});
    userlist.list.push(pickedIteam);
    userlist.save();
    res.status(200).json(userlist);
}

let deleteItem = async (req,res) => {
    let id=req.params.id;
    let email=req.params.email;
    let userlist = await favListModel.findOne({email});
    userlist.list?.map((e,i)=>{if(id == e?.id)userlist.list.splice(i,1)});
    userlist.save();
    res.status(200).json(userlist);
}

let updateItem = async (req,res) => {
    let id=req.params.id;
    let email=req.params.email;
    let body=req.body;
    let userlist = await favListModel.findOne({email});
    userlist.list.map(e=>{ if(e.id === id){ for (const key in body){ if (body[key] != "" || undefined){ e[key] = body[key]; } } } })
    await favListModel.findOneAndUpdate(email,userlist);
    res.status(200).json(userlist);
}


module.exports = { getData, seedData, checkUser, getUserData, addToFav, deleteItem, updateItem }