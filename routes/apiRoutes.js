const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ('fs');


router.get('/api/notes', async (req, res) => {
    const dbJson = await JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    res.json(dbJson);
  });

router.post('/api/notes', (req, res) => {
    const dbJson = JSON.parse(fs.readFileSync('db/db.json', 'utf-8'));
    const userInput = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    };
    dbJson.push(userInput);
    fs.writeFileSync('db/db.json', JSON.stringify(dbJson));
    res.json(dbJson);
});

  module.exports = router;