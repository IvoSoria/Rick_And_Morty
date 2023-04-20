const axios = require('axios')

const getCharById= (res,id) =>{
  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  .then(response => response.data)
  .then(data => {
    let char= {name: data.name, gender: data.gender, species: data.species, origin: data.origin, image: data.image, status: data.status}
  
  res
  .writeHead(200, {"Content-type": "application/json"})
  .end(JSON.stringify(char))
})
  .catch(error => {
    res
      .writeHead(500, {"Content-type": "text/plain"})
      .end(error.message)
  })
    
}
module.exports = getCharById
