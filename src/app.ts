const express = require('express');
const cors = require('cors');
const db = require('./db');
const app = express();
app.use(express.json());
app.use(cors());
import { Request, Response} from 'express';

// CREER UNE APPLICATION //

app.post('/application', async (req: Request, res: Response) => {
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
  
  app.get('/application', async (req: Request, res: Response) => {
    try {
      const [application] = await db.promise().query('SELECT * FROM application');
      res.status(200).send(application);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
  // CREER UNE COURSE //
  
  app.post('/course', async (req: Request, res: Response) => {
    try {
      const { nom, date_de_creation, application_id } = req.body;
      const [course] = await db
        .promise()
        .query(
          'INSERT INTO course (nom, date_de_creation, application_id) VALUES (?,?,?)',
          [nom, date_de_creation, application_id]
        );
      res.status(200).send(course);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
  // RECUPERER UNE COURSE //
  
  app.get('/course', async (req: Request, res: Response) => {
    try {
      const [course] = await db.promise().query('SELECT * FROM course');
      res.status(200).send(course);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  
  // RECUPERER UNE APPLICATION ET SES COURSES (ICI L'APPLICATION AVEC L'ID '1') //
  
  app.get('/application-courses', async (req: Request, res: Response) => {
    try {
      const [application] = await db
        .promise()
        .query(
          'SELECT * FROM application a INNER JOIN course c ON a.id=c.application_id WHERE c.application_id=1'
        );
      res.status(200).send(application);
    } catch (err) {
      console.error(err);
      res.sendStatus(500);
    }
  });
  

module.exports.app = app;