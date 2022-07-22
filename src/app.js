const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
app.use(express.json());
app.use(cors());

// CREER UNE APPLICATION //

app.post('/application', async (req, res) => {
  try {
    const { nom, numero_de_version } = req.body;
    const [application] = await db
      .promise()
      .query('INSERT INTO application (nom, numero_de_version) VALUES (?,?)', [
        nom,
        numero_de_version,
      ]);
    res.status(200).send(application);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// RECUPERER UNE APPLICATION //

app.get('/application', async (req, res) => {
  try {
    const [application] = await db.promise().query('SELECT * FROM application');
    res.status(200).send(application);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

module.exports.app = app;
