import express from 'express';
import cors from 'cors';

const server = express();
server.use(express.json());
server.use(cors());

let tweets = [];
let user = {};


server.post ('/sign-up', (req, res) => {
    user = req.body;
    res.send("Ok");
});

server.post ('/tweets', (req, res) => {
    tweets.push(req.body);
    res.send('OK');
});

server.get('/tweets', (req, res) => {
    if (tweets.length === 0){
        res.send(tweets);
    }else{
        const range = tweets.length<10 ? 0 : tweets.length-10;
        let lastTenTweets = [];
        for (let i=range; i<tweets.length; i++){
            lastTenTweets.push(tweets[i]);
        };
        res.send(lastTenTweets);
    }
    
});

server.listen(5000);