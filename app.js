const  express = require("express");
//1.7  npm install mongoose kolla diary.js
const mongoose  =  require("mongoose");
//1.8 npm install ejs
//1.3 sätta dotenv i app.js
const  dotenv = require("dotenv");
dotenv.config();
//1.9  vi lägger vår DiaryEntry  model
const   {DiaryEntry} = require("./models/diary");



/*1.4  i terminalen 
git init .
ls
heroku create, sen click på första länken
git status, git add . , git status, git status,  git add Procfile, 
git commit -m 'skriv  något', git push herroku master
*/
//1.5 skapar Procfile
//1.6 efter att vi har commitat så finns ett länk och clickar där
const app = express()
//1.1 heroku bestämmer vår port process.env.PORT 
//1.2 npm install dotenv för att  öppna  server PORT=3000
const PORT = process.env.PORT;

//1.10 använd async await
app.get("/", async (req, res)=>{
    const entries =  await DiaryEntry.find();
    res.render("index.ejs", {entries :  entries});
});

//1.11 mongoose.connect
mongoose.connect("mongodb://localhost/backend1");

app.listen(PORT, ()=>{
    console.log(`Started express server on port  ${PORT}`)
})