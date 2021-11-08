import express from 'express';
import 'express-async-errors';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import hmRouter from './router/hm.js';
import fcmRouter from './router/fcm.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use('/hm', hmRouter);
app.use('/fcm', fcmRouter);

//not found
app.use((req, res, next) => {
  res.status(404).send('not available');
});

//server 500 error
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send('try again plz');
});

app.listen(5000);
