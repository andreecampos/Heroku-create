const  express = require("express");
//1.3 sätta dotenv i app.js
const  dotenv = require("dotenv");
dotenv.config();
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

app.get("/", (req, res)=>{
    res.send("<h1>Hello wolrds</h1>");
})

app.listen(PORT, ()=>{
    console.log(`Started express server on port  ${PORT}`)
})