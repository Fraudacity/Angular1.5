const express = require('express')
const fetch = require('node-fetch')
const redis = require('redis')

const PORT = 5000;
const REDIS_PORT = 6379;

//create redis client 
const client = redis.createClient(REDIS_PORT)

// start express web server 

const app = express();

function setResponse(username, repos){
    return `<h2>${username} has ${repo} Githu repos`
}

async function getRepos(req,res,next){
    try{
        console.log(`Fetching Data..`)
        const{ username } = req.params;
        const response = await fetch(`https://api.github.com/user/${username}`);
        const data = await response.json();
        
        const repos = data.public_repos;

        res.send(data);

    }catch(err){
        console.error(err)
        res.status(500);//server error 
    }
}
app.listen(PORT, ()=> {
    console.log(`APp listening on port ${PORT}`)
});