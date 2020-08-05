var all = require('./count');

// console.log(counter(["apple", "manog","grapdes"]))
// console.log(all.adder(1,2));
// console.log(all.pi)

var fs = require('fs')
var http = require ('http')

var server = http.createServer(function(req,res){
    console.log("request was made:"+ req.url)
    res.writhead(200,{'Context-Type':'text/html'});

    var myReadStream = fs.createReadStream(__dirname+'/index.html', 'utf8');
    myReadStream.pipe(res);
});

server.listen(3000, )