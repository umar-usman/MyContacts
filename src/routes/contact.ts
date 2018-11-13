import * as Router from 'koa-router';

import * as ctrl from '../controllers/contact';

const router = new Router();

router.get('/', ctrl.getAll);

router.post('/create', ctrl.create);

router.put('/update/:contactId', ctrl.update);

router.delete('/delete/:contactId', ctrl.remove);

export default router.routes();