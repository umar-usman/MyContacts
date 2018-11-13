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

import * as passport from 'koa-passport';
// const GoogleStrategy = require('passport-google-auth').Strategy

import * as pag from 'passport-google-oauth2';
const GoogleStrategy = pag.Strategy

//const GoogleStrategy = OAuthStrategy;

passport.use(new GoogleStrategy({
    clientID: '502002563979-rtq9ausgvoou62rspe4rhujlocaolcnq.apps.googleusercontent.com',
    clientSecret: 'xSrCWrhIWpoMDbEgnGTSLpdv',
    callbackURL: 'http://localhost:' + (process.env.PORT || 4000) + '/auth/google/callback',
    passReqToCallback   : true
  },
  function(request: any, accessToken: any, refreshToken: any, profile: any, done: any) {
      const t = request;
      const s = accessToken;
      const refreshTokena = refreshToken;
      const sa = accessToken;
      const d = done;
    //   console.log(token, tokenSecret, profile, done);
    // retrieve user ...
    console.log(profile)
    return done();
  }
))

app.listen(4000, () => {
    console.log('Server started.');
});
