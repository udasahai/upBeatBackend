var express = require('express');
var router = express.Router();
var db = require('../db');
var apiControl = require('../Controller/apiController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('api', { title: 'Express' });
});


//return all parties
router.get('/parties', function(req, res, next) {

    apiControl.getParties(db.get(), function(docs){
      console.log(docs)
      var stringPost = JSON.stringify(docs);
      res.status(200).send(stringPost);
    }); 
});

/*
get function that takes party id and returns a list of all songs in that party. 
*/
router.get('/songs/:partyid', function(req, res, next) {

    apiControl.getSongs(db.get(), req.params.partyid ,function(docs){
      console.log(docs)
      var stringPost = JSON.stringify(docs);
      res.status(200).send(stringPost);
    }); 
});


// return people at a given party
router.get('/people/:partyid', function(req, res, next) {

    apiControl.getPeople(db.get(), req.params.partyid ,function(docs){
      console.log(docs)
      var stringPost = JSON.stringify(docs);
      res.status(200).send(stringPost);
    }); 
});


//create a new party
router.post('/parties/:partyid/:djid',function(req, res, next) {

  // res.status(201).send(req.body.title);
  apiControl.getParty (db.get(), req.params.partyid ,function(docs){
      console.log(docs)

      if(docs.length > 0)
        res.sendStatus(400);
      else {
        
        apiControl.createParty(db.get(),req.params.partyid ,req.params.djid, 
        	function(r) {

            if(r.insertedCount != 1)
                res.sendStatus(400);
            else {
                res.sendStatus(201);
            }

          });
      }
    }); 
});


router.delete('/parties/:partyid', function(req, res, next) {
  
  apiControl.deleteParty(db.get(),req.params.partyid, function(r) {
            //console.log(r);
            if(r.deletedCount==1)
              res.sendStatus(204);
            else 
              res.sendStatus(400);
          });
});




module.exports = router;
