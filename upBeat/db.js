var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
  client: null
}

exports.connect = function(url, done) {
  if (state.db) return done()

  MongoClient.connect(url, function(err, client) {
    if (err) return done(err)
    state.db = client.db('PartyServer');
    state.client = client;
    done()
  })
}

exports.get = function() {
  return state.db;
}

exports.close = function(done) {
  if (state.db) {
    state.client.close(function(err, result) {
      state.db = null
      state.client = null
      state.mode = null
      done(err)
    })
  }
}