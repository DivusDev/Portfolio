


const express = require('express');
const router = express.Router();


/* api ROUTES */


// 

router.get('/', (req, res) => {
  console.log('someone reached the API!')
  res.send('Youve ereached the api')
})

router.get('/weiner', (req, res) => {
  console.log('someone reached the weiner!')
  res.send('Youve ereached the weiner')
})

router.post('/members/search', (req, res) => {
  console.log('Fetching select member(s) data from database...')
})

router.get('/members/search', (req, res) => {
  console.log('Fetching select member(s) data from database...')
})

module.exports = router;