const mongoose = require('mongoose')

mongoose.Promise = glocal.Promise

//connect
before(function(){
    mongoose.connect("mongodb://localhost/mongoosedb");
    mongoose.connection
    .once("open", function(){
        console.log("Connection has been made");
        document();
    })
    .on("error", function(){
        console.log("connection error "+ error);
    });
});


