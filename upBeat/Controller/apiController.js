var assert = require('assert');

 exports.getSongs = function(db, partyid, callback) {
  // Get the documents collection
  const collection = db.collection('Songs');
  // Find some documents
  collection.find({'partyid':parseInt(partyid)}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getSongs)");
//    console.log(docs)
    callback(docs);
  });
}


 exports.getParties = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('Parties');
  // Find some documents
  collection.find().toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getParties)");
//    console.log(docs)
    callback(docs);
  });
}

 exports.getParty = function(db, partyid,callback) {
  // Get the documents collection
  const collection = db.collection('Parties');
  // Find some documents
  collection.find({'partyid':parseInt(partyid)}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getParty)");
//    console.log(docs)
    callback(docs);
  });
}


 exports.getPeople = function(db, partyid, callback) {
  // Get the documents collection
  const collection = db.collection('People');
  // Find some documents
  collection.find({'partyid':parseInt(partyid)}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records(getPeople)");
//    console.log(docs)
    callback(docs);
  });
}


exports.createParty = function(db, partyid, djid, callback) { 

const collection = db.collection('Parties');

collection.insertOne({partyid:parseInt(partyid), djid:parseInt(djid)}, function(err, r) {
//    assert.equal(null, err);
//    assert.equal(1, r.insertedCount);
      callback(r);
  });  
}


exports.deleteParty = function(db, partyid, callback) { 

const collection = db.collection('Parties');

collection.deleteOne({ partyid: parseInt(partyid)}, function(err, r) {
      // assert.equal(null, err);
      // assert.equal(1, r.deletedCount);
      callback(r);
    });
}
