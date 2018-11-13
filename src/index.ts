import * as Koa from 'koa';
import * as CORS from '@koa/cors';
import * as bodyparser from 'koa-bodyparser';

import {routes} from './routes/index';
import { responseHandler } from './middlewares/responseHandler';

const app = new Koa();

app.use(CORS());

app.use(responseHandler);

app.use(bodyparser());

app.use(routes);

app.listen(4000, () => {
    console.log('Server started.');
});
