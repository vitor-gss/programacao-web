const fetch = require("node-fetch");
 
 fetch('https://localhost:3000', {
   method: "GET",
   headers: {"Content-type": "application/json;charset=UTF-8"}
 })
 .then(response => response.json()) 
 .then(json => console.log(json))
 .catch(err => console.log(err));