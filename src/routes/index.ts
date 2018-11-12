import * as Compose from 'koa-compose';

import contact from './contact';
import test from './test';

export const routes = Compose([
    contact,
    test
]);