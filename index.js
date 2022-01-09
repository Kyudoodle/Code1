const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTI5ODMxMjYxMTM5MjY3NTk1.YdtC2A.YBqjj9p-d18KaFCI6aY2OKtloQQ"

const client = new Discord.Client({
    intents:[
        "GUILDS",
        "GUILD_MESSAGES"
    ]
})

client.on("ready", ()=>{
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if(message.content == "hi"){
       message.reply("Hello World!") 
    }
})

client.login(process.env.TOKEN)