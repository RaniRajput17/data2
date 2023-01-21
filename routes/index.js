const express = require('express');
const passport = require('passport');
const router = express.Router();
const userModel = require("./users")
const multer = require("multer");
const localStrategy = require("passport-local");
const reader = require("xlsx");
// var isjson = require('is-jason');
var json2xls = require('json2xls');
var data=[];

passport.use(new localStrategy(userModel.authenticate()));

const crypto = require("crypto");


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/details', async function(req, res, next) {
  // console.log(req.body)
  const file = reader.readFile('./details2.xlsx')
    let CONSUMERID = req.body.consumerid
    let CHECKTEAM = req.body.checkTeam
    let ACTIONTAKEN = req.body.actionTaken
    let DATE = req.body.date

  const ws = file.Sheets["Sheet1"]
  // let userdata = await userModel.create(data);
  reader.utils.sheet_add_aoa(ws, [[CONSUMERID,CHECKTEAM,ACTIONTAKEN,DATE]], {origin:-1});

  reader.writeFile(file,'./details2.xlsx')
  res.redirect("/");
});



module.exports = router;
