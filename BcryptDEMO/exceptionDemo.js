var fs = require("fs");
var file = "writeMe.txt";

fs.readFile(file, "utf-8", function (err, data) {
    if (err) {
        throw err
    }
    else {
        console.log(data)
    }
});

// process.on("uncaughtException", function(error){
//     console.log("The Exception was caught")
// })