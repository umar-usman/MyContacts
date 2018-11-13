import * as passport from 'koa-passport';
import * as Router from 'koa-router';

import * as ctrl from '../controllers/test';
import { Context } from 'koa';

const router = new Router();

router.get('/test', ctrl.testApi);

router.get('/auth/google',
    passport.authenticate('google', { scope:
        [ 'https://www.googleapis.com/auth/plus.login',
          'https://www.googleapis.com/auth/plus.profile.emails.read' ] })
)

router.get('/app', (ctx: Context) => {
    ctx.body = 'hello hi';
});

router.get('/', (ctx: Context) => {
    ctx.body = 'lol';
})

router.get('/auth/google/callback',
  passport.authenticate('google', {
    successRedirect: '/app',
    failureRedirect: '/'
  })
);

export default router.routes();