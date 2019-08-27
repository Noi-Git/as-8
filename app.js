import http from 'http'
import express from 'express'

import logger from 'morgan';
import bodyParser from 'body-parser';
import routes from './server/routes';

const hostname = '127.0.0.1';
const port = 3000;
const app = express()
const server = http.createServer(app);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routes(app);

app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the .',
}));

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


/* Link to the tutorial use to build this project
https://www.alibabacloud.com/blog/building-a-restful-api-with-express-postgresql-and-node-using-es6_594137

Command to start server
pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start

npm start
*/