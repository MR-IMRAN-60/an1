const express = require('express');
const fs = require('fs');
const app = express();
app.use(express.json());
app.set('json spaces', 2);
const port = 3000;

const statusesData = JSON.parse(fs.readFileSync('status.json'));

app.get('/status', (req, res) => {

  const randomIndex = Math.floor(Math.random() * statusesData.length);
  const randomStatus = statusesData[randomIndex];
  const author = {
    name: 'Mohammad Imran',
    contact: 'https://www.facebook.com/Mohammad.Rakib240',
  };

  res.json({
    data: randomStatus,
    author,
  });
});

app.listen(port, () => {
  console.log(`┌────────────────── ∘°❉°∘ ─────────────────┐`);
  console.log(`

#### ##     ## ########     ###    ##    ## 
 ##  ###   ### ##     ##   ## ##   ###   ## 
 ##  #### #### ##     ##  ##   ##  ####  ## 
 ##  ## ### ## ########  ##     ## ## ## ## 
 ##  ##     ## ##   ##   ######### ##  #### 
 ##  ##     ## ##    ##  ##     ## ##   ### 
#### ##     ## ##     ## ##     ## ##    ## 

`);
  console.log(`Atuher: MOHAMMAD IMRAN`);
  console.log(`Version: 1.0.0`);
  console.log(`Language: Node.js`);
  console.log(`Port: ${port}`);
  console.log(`Server started`);
  console.log(`Servar link: https://imran-bot.moh4mm4di4r4n.repl.co`);
  console.log(`Server is running on port ${port}`);
  console.log(`REPLIT ID: ${process.env.REPL_ID}`);


  console.log(`└──────────────────── °∘❉∘° ────────────────────┘`);
});

app.get('/', (req, res) => //res.send('YAHALLO!!'));
res.sendFile(__dirname+'/Imran/imran.html'))