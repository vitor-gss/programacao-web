const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
 
 fetch('http://localhost:3000/teste/', {
   method: "GET",
   headers: {"Content-type": "application/json;charset=UTF-8"}
 })
 .then(response => response.json()) 
 .then(json => console.log(json))
 .catch(err => console.log(err));