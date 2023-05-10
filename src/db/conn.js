const mongoose = require("mongoose");

// creating database
mongoose.connect("mongodb://0.0.0.0:27017/firstDatabase", {
}).then(() => {
    console.log("Connection Success");
}).catch((error) => {
    console.log(error); 
})