const express = require('express');
const handlers = require('../handlers/based.js');

const router = express.Router();
router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<h1>Hello from Express.js!</h1>');
  res.end();
});

router.get('/eclairage/horaires/:date',async (req, res) => {
  const rows = await handlers.getEclairage(req.params.date);
  if(rows.length > 0) {
    res.status(200);
    res.json(rows);
  }else{
    res.status(404).send('There is no value for this date.');
  }
})


router.post('/', (req, res) => res.json({ postBody: req.body }));

module.exports = router;