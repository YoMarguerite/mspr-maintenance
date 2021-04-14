const express = require('express');
const models = require('../model/based');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/eclairage/horaires/:date',async (req, res) => {
  console.log(req.params.date);
  res.json(await models.getEclairage(req.params.date));
})


router.post('/', (req, res) => res.json({ postBody: req.body }));

module.exports = router;