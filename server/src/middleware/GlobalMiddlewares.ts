// _neu_generated_code__dont_modify_directly_

//append_imports_start

import * as cors from 'cors'; //_splitter_
import * as expressSession from 'express-session'; //_splitter_
//append_imports_end
export let Middlewares = {
  cors: () => {
    let corsOptions = {
      origin: true,

      credentials: true,

      preflightContinue: false,
    };
    return cors(corsOptions);
  },
  sd_7EmxxOk703exD5hF: () => {
    let sess: expressSession.SessionOptions = {
      cookie: {
        secure: false,
        httpOnly: false,
        maxAge: 15 * 24 * 60 * 60 * 1000,
        sameSite: 'lax',
      },

      proxy: false,

      resave: false,

      rolling: false,

      saveUninitialized: false,

      secret: 'qPXoLFLDtk',

      unset: 'keep',
    };
    return expressSession(sess);
  },
  //appendnew_flow
};
