const Twilio = require("twilio");

const client = new Twilio(
    "ACb3090f7ba303410979b340bc5b5351cf", 
    "b7a874af411eba96b853d9a72d90d4b6"
);

client.messages
    .list()
    .then(messages => 
        console.log(`The most recent message is ${messages[0].body}`)
    ).catch(err => console.log(err));

console.log("Gathering your message...");