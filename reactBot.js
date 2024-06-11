const {Telegraf}=require('telegraf');
const {message}=require('telegraf/filters');
const jokes = require('./jokes');
require('dotenv').config()


// username : react_on_bot
// bot_link : t.me/react_on_bot

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx)=>ctx.reply("Welcome to ReactBot."));
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.on('sticker', (ctx) => ctx.reply('😀'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.command('joke', (ctx) => {
    const x=Math.floor(Math.random()*100);
    const joke=jokes.jokes[x];
    ctx.reply(joke.setup);
    ctx.reply(joke.punchline);
});
// bot.stop((ctx)=>ctx.reply("Thank you."))
bot.launch();