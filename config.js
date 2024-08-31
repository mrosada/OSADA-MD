const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID, || "x70WVY6I#mWAdIg0bvYAQeumHkMk0755eQNLX5MnafrrC-wXQsL8",
ALIVE_IMG: process.env.ALIVE_IMG, || "https://i.ibb.co/nsNpzrh/Blue-and-White-Modern-The-Future-Of-Artificial-Intelligence-You-Tube-Thumbnail.png",
ALIVE_MSG: process.env.ALIVE_MSG, || "Hello, I am Alive",
};
