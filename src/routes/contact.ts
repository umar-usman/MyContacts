import * as Router from 'koa-router';

import * as ctrl from '../controllers/contact';

const router = new Router();

router.get('/', ctrl.getAll);

export default router.routes();