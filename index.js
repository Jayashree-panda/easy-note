const express = require('express');
const bodyParser = require('body-parser');
const dconf = require("./config/config.database")
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;
// create express app
const app = express();
require("./app/routes/note.route")(app)

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to EasyNotes application. Take notes quickly. Organize and keep track of all your notes."});
});



MongoClient.connect(dconf.url, function(err, db) {
  if (err) {
      console.log(err)
    }
else{
  console.log("Database created!");
}
//   db.close();
});
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening at 3000")
})