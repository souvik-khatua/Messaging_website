const mongoose = require('mongoose');
const Chat = require("./models/chat.js");
main().then(()=>{
    console.log("connection suceesful");
 })

// .catch(err => console.log(err));

 async function main() {
 await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let allChats=[
    {
        from:"neha",
        to:"priya",
        msg: "send me your exam sheets",
        created_at: new Date(), 

    },
    {
        from:"kkd",
        to:"mkd",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from:"rohit",
        to:"mohit",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
    {
        from:"nes",
        to:"pati",
        msg: "send me your exam sheets",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);
   







