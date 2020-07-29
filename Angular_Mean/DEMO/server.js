var express = require('express');
var app = express();

// app.get('/', function(req, res){
//     res.send("Hello world from Server.js")
// });

app.use(express.static(__dirname+"/public"));


app.get('/contactlist', function(req, res){
console.log(' I received a Get Request')
 person1 = {
        name:'Tim',
        email:'time@gmail.com',
        numnber:'(111) 111-1111'
    };
    person2 = {
        name:'Kim',
        email:'kim@gmail.com',
        numnber:'(111) 111-1111'
    };   
     person3 = {
        name:'Jim',
        email:'jim@gmail.com',
        numnber:'(111) 111-1111'
    };
    person4 = {
        name:'Jane',
        email:'jane@gmail.com',
        numnber:'(111) 111-1111'
    };
    person5 = {
        name:'Mary',
        email:'mary@gmail.com',
        numnber:'(111) 111-1111'
    };
    var contactlist = [person1,person2,person3,person4,person5];
    res.json(contactlist);
})
app.listen(3000);
console.log("Server is running on port 3000")