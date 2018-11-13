import * as Router from 'koa-router';

import * as ctrl from '../controllers/test';

const router = new Router({
    prefix: '/test'
});

router.get('/', ctrl.testApi);

//testing user
// router.get('/', ctrl.getUser);

router.post('/create', ctrl.addUser);

export default router.routes();