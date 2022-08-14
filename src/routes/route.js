
const express = require('express');

const router = express.Router();

router.get("/movies/:indexnumber", function(req,res){
    const movies = ["rang de basanti", "the shining", "lord of the rings", "batman begains"]
    console.log(req.params.indexnumber)
let moviesindex = req.params.indexnumber
//check index value.less than 0 or greater than array (length - 1)are not valid
if(moviesindex<0 || moviesindex>=movies.length) {
//if the index is invalid send an error message
return res.send('the index value is not correct, please check it')
}

//if the index was valid send the movie at that index in response
let requiredmovie = movies[moviesindex]
res.send(requiredmovie)
})
