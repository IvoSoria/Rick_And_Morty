const http = require('http');
const getCharById = require("../src/controllers/getCharById");


http.createServer((req, res) => {

  res.setHeader('Access-Control-Allow-Origin', '*');

  if(req.url.includes("/rickandmorty/character")){
    const id = req.url.split("/").at(-1)
    getCharById(res,id);
  }

})
.listen(3001, 'localhost');
