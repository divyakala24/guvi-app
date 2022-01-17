const mongo = require("../Mongo");
const { ObjectId } = require("mongodb");

const services = {
    getPosts(){
     return mongo.db.collection("petshop").find().toArray();
    },
    createPosts(data){
        return mongo.db.collection("petshop").insert(data);
    },
    updatePosts(id, data){

       return mongo.db.collection("petshop").findOneAndUpdate({ _id: ObjectId( id) } , { $set : data }, { returnDocument: true});
    },
    deletePosts(id){
      return mongo.db.collection("petshop").deleteOne({ _id: ObjectId(id) } );

    }
}
module.exports = services;