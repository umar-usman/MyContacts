import * as Router from 'koa-router';

import * as ctrl from '../controllers/test';

const router = new Router();

router.get('/test', ctrl.testApi);

export default router.routes();