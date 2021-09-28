import * as express from 'express';
import routes from './api/routes';
import * as cors from 'cors';

const app = express();
app.use(express.json());
app.use(routes);
app.use(cors);

export default app;