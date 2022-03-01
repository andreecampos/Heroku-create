const  express = require("express");
//1.3 sätta dotenv i app.js
const  dotenv = require("dotenv");
dotenv.config();
/*1.4  i terminalen 
git init .
ls
heroku create
*/
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