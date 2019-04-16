const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Megan:<equinox@96>@first-fxezs.mongodb.net/test?retryWrites=true";
const client = new MongoClient(uri, {
  useNewUrlParser: true
});
client.connect((err) => {

  const collection = client.db("FirstDatabase").collection("FirstCollection");

  // perform actions on the collection object
  client.close();
});
