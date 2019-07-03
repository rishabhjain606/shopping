const getDb = require('../util/database').getDb;
const mongodb = require('mongodb');

const ObjectId = mongodb.ObjectID;

class User{
  constructor(username, email){
    this.name = username;
    this.email = email;
  }

  save(){
    const db = getDb();
    return db.collection('users').insertOne(this);
  }

  static findById(userID){
    const db = getDb();
    return db.collection('users').findOne({_id: new ObjectId(userID)});
  }
}