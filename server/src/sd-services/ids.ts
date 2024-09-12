// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import * as crypto from 'crypto'; //_splitter_
import * as url from 'url'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { Middleware } from '../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
import * as sd_9pBMALo7q29aLFtK from './idsutil'; //_splitter_
//append_imports_end
export class ids {
  private sdService = new SDBaseService();
  private tracerService = new TracerService();
  private app;
  private serviceBasePath: string;
  private generatedMiddlewares: Object;
  private serviceName: string;

  private globalTimers: any;
  private constructor(
    app,
    generatedeMiddlewares,
    routeCall,
    middlewareCall,
    globalTimers
  ) {
    this.serviceName = 'ids';
    this.app = app;
    this.serviceBasePath = this.app.settings.base;
    this.generatedMiddlewares = generatedeMiddlewares;
    this.globalTimers = globalTimers;
  }

  static getInstance(
    app?,
    generatedeMiddlewares?,
    routeCall?,
    middlewareCall?,
    globalTimers?
  ) {
    if (!instance) {
      instance = new ids(
        app,
        generatedeMiddlewares,
        routeCall,
        middlewareCall,
        globalTimers
      );
    }
    instance.mountCalls(routeCall, middlewareCall);
    return instance;
  }

  private mountCalls(routeCall, middlewareCall) {
    if (routeCall) {
      this.mountAllPaths();
      this.mountAllListeners();
    }
    if (middlewareCall) {
      this.generatedMiddlewares[this.serviceName] = {};
      this.mountAllMiddlewares();
      this.mountTimers();
    }
  }

  async mountAllListeners() {
    //append_listeners
  }

  async mountTimers() {
    //appendnew_flow_ids_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: ids');
    let mw_hrefstart: Middleware = new Middleware(
      this.serviceName,
      'hrefstart',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_ilpkkw9mhsqd7Te1(bh, parentSpanInst);
          //appendnew_next_sd_hlHS6VxF3nG6OsQ1
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_hlHS6VxF3nG6OsQ1');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['hrefstart'] = mw_hrefstart;
    let mw_Authorize: Middleware = new Middleware(
      this.serviceName,
      'Authorize',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_laaKgJCeBtZxTXDM(bh, parentSpanInst);
          //appendnew_next_sd_T7iP1unLShB74Zdq
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_T7iP1unLShB74Zdq');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['Authorize'] = mw_Authorize;
    //appendnew_flow_ids_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: ids');

    this.app['get'](
      `${this.serviceBasePath}/login`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_Ngl4H2NjSCjrfsOl(bh, parentSpanInst);
          //appendnew_next_sd_5ejF2NIisKUmr2pf
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_5ejF2NIisKUmr2pf');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/login/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_PVL71Kuv671K5GvK(bh, parentSpanInst);
          //appendnew_next_sd_fN0M6bFib2FsqpUr
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_fN0M6bFib2FsqpUr');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/user/info`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_3pG6p1HJ1W8gyCIP(bh, parentSpanInst);
          //appendnew_next_sd_uCMfk4DQaTC4qmqK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_uCMfk4DQaTC4qmqK');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        'IDSAuthroizedAPIs',
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_4y5vAFkv31ViEleW(bh, parentSpanInst);
          //appendnew_next_sd_Fs7qRnyrjGpSMU6X
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_Fs7qRnyrjGpSMU6X');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/logout/cb`,
      cookieParser(),
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'pre',
        this.generatedMiddlewares
      ),

      async (req, res, next) => {
        let bh: any = {};
        try {
          bh = this.sdService.__constructDefault(
            { local: {}, input: {} },
            req,
            res,
            next
          );
          let parentSpanInst = null;
          bh = await this.sd_1gT3icCxRhZeh1hW(bh, parentSpanInst);
          //appendnew_next_sd_CjkloZDizJNXH0cR
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_CjkloZDizJNXH0cR');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_ids_HttpIn
  }
  //   service flows_ids

  //appendnew_flow_ids_start

  async sd_Ngl4H2NjSCjrfsOl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Ngl4H2NjSCjrfsOl',
      parentSpanInst
    );
    try {
      bh.local.idsConfigured = false;
      if (
        settings.default.hasOwnProperty('ids') &&
        settings.default['ids'].hasOwnProperty('client_id') &&
        settings.default['ids'].hasOwnProperty('client_secret')
      ) {
        bh.local.idsConfigured = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NfdahLoADmaE16hh(bh, parentSpanInst);
      //appendnew_next_sd_Ngl4H2NjSCjrfsOl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Ngl4H2NjSCjrfsOl',
        spanInst,
        'sd_Ngl4H2NjSCjrfsOl'
      );
    }
  }

  async sd_NfdahLoADmaE16hh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NfdahLoADmaE16hh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.idsConfigured,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_jB9oHLgHqYuhZ88T(bh, parentSpanInst);
      } else {
        bh = await this.sd_1fTlLU5bXkbPg54L(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_NfdahLoADmaE16hh',
        spanInst,
        'sd_NfdahLoADmaE16hh'
      );
    }
  }

  async sd_jB9oHLgHqYuhZ88T(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_jB9oHLgHqYuhZ88T',
      parentSpanInst
    );
    try {
      bh.local.reqParams = {
        state: crypto.randomBytes(16).toString('hex'),
        nonce: crypto.randomBytes(16).toString('hex'),
        isMobile: bh.input.query.isMobile,
        redirectTo: bh.input.query.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VDXvHtudcYaBdU7G(bh, parentSpanInst);
      //appendnew_next_sd_jB9oHLgHqYuhZ88T
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jB9oHLgHqYuhZ88T',
        spanInst,
        'sd_jB9oHLgHqYuhZ88T'
      );
    }
  }

  async sd_VDXvHtudcYaBdU7G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VDXvHtudcYaBdU7G',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.reqParams;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HMkRSLgL1cUUwHHo(bh, parentSpanInst);
      //appendnew_next_sd_VDXvHtudcYaBdU7G
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VDXvHtudcYaBdU7G',
        spanInst,
        'sd_VDXvHtudcYaBdU7G'
      );
    }
  }

  async sd_HMkRSLgL1cUUwHHo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HMkRSLgL1cUUwHHo',
      parentSpanInst
    );
    try {
      const sd_9pBMALo7q29aLFtKInstance: sd_9pBMALo7q29aLFtK.idsutil =
        sd_9pBMALo7q29aLFtK.idsutil.getInstance();
      let outputVariables =
        await sd_9pBMALo7q29aLFtKInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nLstL98RUWfEKVk6(bh, parentSpanInst);
      //appendnew_next_sd_HMkRSLgL1cUUwHHo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HMkRSLgL1cUUwHHo',
        spanInst,
        'sd_HMkRSLgL1cUUwHHo'
      );
    }
  }

  async sd_nLstL98RUWfEKVk6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nLstL98RUWfEKVk6',
      parentSpanInst
    );
    try {
      const sd_9pBMALo7q29aLFtKInstance: sd_9pBMALo7q29aLFtK.idsutil =
        sd_9pBMALo7q29aLFtK.idsutil.getInstance();
      let outputVariables =
        await sd_9pBMALo7q29aLFtKInstance.getAuthorizationParams(
          spanInst,
          undefined
        );
      bh.input.authParams = outputVariables.input.authParams;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_JLW2otTiALqlXevh(bh, parentSpanInst);
      //appendnew_next_sd_nLstL98RUWfEKVk6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nLstL98RUWfEKVk6',
        spanInst,
        'sd_nLstL98RUWfEKVk6'
      );
    }
  }

  async sd_JLW2otTiALqlXevh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_JLW2otTiALqlXevh',
      parentSpanInst
    );
    try {
      const authorizationRequest = Object.assign(
        {
          redirect_uri: url.resolve(bh.web.req.href, '/api/login/cb'),
          scope: 'openid profile email address phone user',
          state: bh.local.reqParams.state,
          nonce: bh.local.reqParams.nonce,
          response_type: bh.input.client.response_types[0],
        },
        bh.input.authParams
      );

      bh.local.redirectHeaders = {
        location: bh.input.client.authorizationUrl(authorizationRequest),
      };

      this.tracerService.sendData(spanInst, bh);
      await this.sd_HbFp0s7G1fqMtXzy(bh, parentSpanInst);
      //appendnew_next_sd_JLW2otTiALqlXevh
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JLW2otTiALqlXevh',
        spanInst,
        'sd_JLW2otTiALqlXevh'
      );
    }
  }

  async sd_HbFp0s7G1fqMtXzy(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_HbFp0s7G1fqMtXzy');
    }
  }

  async sd_1fTlLU5bXkbPg54L(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1fTlLU5bXkbPg54L',
      parentSpanInst
    );
    try {
      bh.local.res = {
        message:
          'IDS client not registered. Register on the Neutrinos Stuido and try again',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_2wNPLPgeIYgnZ5Tl(bh, parentSpanInst);
      //appendnew_next_sd_1fTlLU5bXkbPg54L
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1fTlLU5bXkbPg54L',
        spanInst,
        'sd_1fTlLU5bXkbPg54L'
      );
    }
  }

  async sd_2wNPLPgeIYgnZ5Tl(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.res.message);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_2wNPLPgeIYgnZ5Tl');
    }
  }

  async sd_ilpkkw9mhsqd7Te1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ilpkkw9mhsqd7Te1',
      parentSpanInst
    );
    try {
      const protocol =
        bh.input.headers['x-forwarded-proto'] || bh.web.req.protocol;
      const href =
        protocol + '://' + bh.web.req.get('Host') + bh.web.req.originalUrl;
      bh.web.req.href = href;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_DvHFo4luBr5AQvGJ(bh, parentSpanInst);
      //appendnew_next_sd_ilpkkw9mhsqd7Te1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ilpkkw9mhsqd7Te1',
        spanInst,
        'sd_ilpkkw9mhsqd7Te1'
      );
    }
  }

  async sd_DvHFo4luBr5AQvGJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DvHFo4luBr5AQvGJ',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DvHFo4luBr5AQvGJ',
        spanInst,
        'sd_DvHFo4luBr5AQvGJ'
      );
    }
  }

  async sd_PVL71Kuv671K5GvK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PVL71Kuv671K5GvK',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.input.sessionParams = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_AbtCfgG4Y0ZNrQjn(bh, parentSpanInst);
      //appendnew_next_sd_PVL71Kuv671K5GvK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PVL71Kuv671K5GvK',
        spanInst,
        'sd_PVL71Kuv671K5GvK'
      );
    }
  }

  async sd_AbtCfgG4Y0ZNrQjn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_AbtCfgG4Y0ZNrQjn',
      parentSpanInst
    );
    try {
      const sd_9pBMALo7q29aLFtKInstance: sd_9pBMALo7q29aLFtK.idsutil =
        sd_9pBMALo7q29aLFtK.idsutil.getInstance();
      let outputVariables =
        await sd_9pBMALo7q29aLFtKInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_R4YkrlxVj6jOwJaJ(bh, parentSpanInst);
      //appendnew_next_sd_AbtCfgG4Y0ZNrQjn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AbtCfgG4Y0ZNrQjn',
        spanInst,
        'sd_AbtCfgG4Y0ZNrQjn'
      );
    }
  }

  async sd_R4YkrlxVj6jOwJaJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_R4YkrlxVj6jOwJaJ',
      parentSpanInst
    );
    try {
      const params = bh.input.client.callbackParams(bh.web.req);
      let tokenset = await bh.input.client.callback(
        url.resolve(bh.web.req.href, 'cb'),
        params,
        {
          nonce: bh.input.sessionParams.data.nonce,
          state: bh.input.sessionParams.data.state,
        }
      );

      bh.local.redirectTo = bh.input.sessionParams.data.redirectTo;

      bh.local.userDetails = {
        tokenset: Object.assign({}, tokenset),
        userInfo: await bh.input.client.userinfo(tokenset['access_token']),
      };
      bh.local.userDetails['tokenset']['claims'] = Object.assign(
        {},
        tokenset.claims()
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_D8Y0FoLK2EryRyXW(bh, parentSpanInst);
      //appendnew_next_sd_R4YkrlxVj6jOwJaJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_R4YkrlxVj6jOwJaJ',
        spanInst,
        'sd_R4YkrlxVj6jOwJaJ'
      );
    }
  }

  async sd_D8Y0FoLK2EryRyXW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_D8Y0FoLK2EryRyXW',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.userDetails;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_YvkZ0OZcJI1FrCxJ(bh, parentSpanInst);
      //appendnew_next_sd_D8Y0FoLK2EryRyXW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_D8Y0FoLK2EryRyXW',
        spanInst,
        'sd_D8Y0FoLK2EryRyXW'
      );
    }
  }

  async sd_YvkZ0OZcJI1FrCxJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_YvkZ0OZcJI1FrCxJ',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.input.sessionParams.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_dUn36riEYylGvM97(bh, parentSpanInst);
      } else {
        bh = await this.sd_aFwh8y2DYEas8fu9(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_YvkZ0OZcJI1FrCxJ',
        spanInst,
        'sd_YvkZ0OZcJI1FrCxJ'
      );
    }
  }

  async sd_dUn36riEYylGvM97(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dUn36riEYylGvM97',
      parentSpanInst
    );
    try {
      bh.local.htmlResponse = `
 <html>
   <script>
      let _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_bB40NetwpxfrLxuW(bh, parentSpanInst);
      //appendnew_next_sd_dUn36riEYylGvM97
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dUn36riEYylGvM97',
        spanInst,
        'sd_dUn36riEYylGvM97'
      );
    }
  }

  async sd_bB40NetwpxfrLxuW(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script-src 'sha256-wcX+PzUovy0uNFqMGCbbbzuT5v4aAxU9obFNyt6BHAQ='",
      });

      bh.web.res.status(200).send(bh.local.htmlResponse);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_bB40NetwpxfrLxuW');
    }
  }

  async sd_aFwh8y2DYEas8fu9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aFwh8y2DYEas8fu9',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_GPmUKHVNQfOC4mob(bh, parentSpanInst);
      //appendnew_next_sd_aFwh8y2DYEas8fu9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aFwh8y2DYEas8fu9',
        spanInst,
        'sd_aFwh8y2DYEas8fu9'
      );
    }
  }

  async sd_GPmUKHVNQfOC4mob(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('Redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_GPmUKHVNQfOC4mob');
    }
  }

  async sd_3pG6p1HJ1W8gyCIP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3pG6p1HJ1W8gyCIP',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.session = JSON.parse(JSON.stringify(requestObject.session));
      }

      this.tracerService.sendData(spanInst, bh);
      await this.sd_j1xzF8T89GeymtDG(bh, parentSpanInst);
      //appendnew_next_sd_3pG6p1HJ1W8gyCIP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3pG6p1HJ1W8gyCIP',
        spanInst,
        'sd_3pG6p1HJ1W8gyCIP'
      );
    }
  }

  async sd_j1xzF8T89GeymtDG(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.session.data.userInfo);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_j1xzF8T89GeymtDG');
    }
  }

  async sd_wRsuCTJzih1MQSYo(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wRsuCTJzih1MQSYo',
      parentSpanInst
    );
    try {
      bh.web.res.redirect('/api/login');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_wRsuCTJzih1MQSYo
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wRsuCTJzih1MQSYo',
        spanInst,
        'sd_wRsuCTJzih1MQSYo'
      );
    }
  }

  async sd_4y5vAFkv31ViEleW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4y5vAFkv31ViEleW',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cW1eqaT4LVmSSU88(bh, parentSpanInst);
      //appendnew_next_sd_4y5vAFkv31ViEleW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4y5vAFkv31ViEleW',
        spanInst,
        'sd_4y5vAFkv31ViEleW'
      );
    }
  }

  async sd_cW1eqaT4LVmSSU88(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cW1eqaT4LVmSSU88',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;
      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset
      ) {
        bh.local.sessionData['data']['redirectTo'] =
          bh.input.query['redirectTo'];
        bh.local.sessionData['data']['isMobile'] = bh.input.query['isMobile'];
        bh.local.sessionExists = true;
      } else {
        delete bh.local.sessionData['redirectTo'];
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_w4RiVeChhQG3TGiP(bh, parentSpanInst);
      //appendnew_next_sd_cW1eqaT4LVmSSU88
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cW1eqaT4LVmSSU88',
        spanInst,
        'sd_cW1eqaT4LVmSSU88'
      );
    }
  }

  async sd_w4RiVeChhQG3TGiP(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_w4RiVeChhQG3TGiP',
      parentSpanInst
    );
    try {
      const sd_9pBMALo7q29aLFtKInstance: sd_9pBMALo7q29aLFtK.idsutil =
        sd_9pBMALo7q29aLFtK.idsutil.getInstance();
      let outputVariables =
        await sd_9pBMALo7q29aLFtKInstance.getIDSClientInstance(
          spanInst,
          undefined
        );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_OFGnkRXtMa9Z4dGl(bh, parentSpanInst);
      //appendnew_next_sd_w4RiVeChhQG3TGiP
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_w4RiVeChhQG3TGiP',
        spanInst,
        'sd_w4RiVeChhQG3TGiP'
      );
    }
  }

  async sd_OFGnkRXtMa9Z4dGl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OFGnkRXtMa9Z4dGl',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_0Ehahwtf4lQgloDl(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_u3DyI9d9v6JPjsyX(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OFGnkRXtMa9Z4dGl',
        spanInst,
        'sd_OFGnkRXtMa9Z4dGl'
      );
    }
  }

  async sd_0Ehahwtf4lQgloDl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0Ehahwtf4lQgloDl',
      parentSpanInst
    );
    try {
      await Promise.all([
        bh.local.sessionData.data.tokenset.access_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.access_token,
              'access_token'
            )
          : undefined,
        bh.local.sessionData.data.tokenset.refresh_token
          ? bh.input.client.revoke(
              bh.local.sessionData.data.tokenset.refresh_token,
              'refresh_token'
            )
          : undefined,
      ]);

      bh.local.res = {
        idsURL: url.format(
          Object.assign(
            url.parse(bh.input.client.issuer.end_session_endpoint),
            {
              search: null,
              query: {
                id_token_hint: bh.local.sessionData.data.tokenset.id_token,
                post_logout_redirect_uri: url.resolve(
                  bh.web.req.href,
                  '/api/logout/cb'
                ),
                client_id: settings.default['ids']['client_id'],
              },
            }
          )
        ),
        sessionExists: true,
      };

      // Remove user info and tokenset before login redirect
      bh.local.sessionData.data.tokenset = null;
      bh.local.sessionData.data.userInfo = null;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst);
      //appendnew_next_sd_0Ehahwtf4lQgloDl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0Ehahwtf4lQgloDl',
        spanInst,
        'sd_0Ehahwtf4lQgloDl'
      );
    }
  }

  async sd_dCWCI7Lqpk6tk1KJ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dCWCI7Lqpk6tk1KJ',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.sessionData.data;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XgTucEwGKFIXMPEK(bh, parentSpanInst);
      //appendnew_next_sd_dCWCI7Lqpk6tk1KJ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dCWCI7Lqpk6tk1KJ',
        spanInst,
        'sd_dCWCI7Lqpk6tk1KJ'
      );
    }
  }

  async sd_XgTucEwGKFIXMPEK(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_XgTucEwGKFIXMPEK');
    }
  }

  async sd_u3DyI9d9v6JPjsyX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_u3DyI9d9v6JPjsyX',
      parentSpanInst
    );
    try {
      bh.local.res = {
        sessionExists: false,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_XgTucEwGKFIXMPEK(bh, parentSpanInst);
      //appendnew_next_sd_u3DyI9d9v6JPjsyX
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_u3DyI9d9v6JPjsyX',
        spanInst,
        'sd_u3DyI9d9v6JPjsyX'
      );
    }
  }

  async sd_1gT3icCxRhZeh1hW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1gT3icCxRhZeh1hW',
      parentSpanInst
    );
    try {
      bh.local.isPasswordResetCallback =
        !!bh.input.query.password_reset_username;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_pguPtnu45szjsQhh(bh, parentSpanInst);
      //appendnew_next_sd_1gT3icCxRhZeh1hW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1gT3icCxRhZeh1hW',
        spanInst,
        'sd_1gT3icCxRhZeh1hW'
      );
    }
  }

  async sd_pguPtnu45szjsQhh(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_pguPtnu45szjsQhh',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_Y9iItSSanriND233(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.isPasswordResetCallback,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_zvnWXEh4AjxlzkV8(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pguPtnu45szjsQhh',
        spanInst,
        'sd_pguPtnu45szjsQhh'
      );
    }
  }

  async sd_Y9iItSSanriND233(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Y9iItSSanriND233',
      parentSpanInst
    );
    try {
      const sessionStore = bh.web.req.sessionStore;
      const res = new Promise((res, rej) => {
        sessionStore.all((err, sessions) => {
          const promises = Object.keys(sessions).map((sid) => {
            return new Promise((resolve, reject) => {
              sessionStore.get(sid, (err, session) => {
                if (
                  session?.data?.userInfo?.username ===
                  bh.input.query.password_reset_username
                ) {
                  log.debug(
                    `[LCB] username matched::${session.data.userInfo.username}`
                  );
                  sessionStore.destroy(sid, (err, d) => {
                    resolve(d);
                  });
                } else {
                  resolve(undefined);
                }
              });
            });
          });
          Promise.all(promises).then((d) => res(d));
        });
      });

      const rr = await res;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ziw8sH2WYccBRSNv(bh, parentSpanInst);
      //appendnew_next_sd_Y9iItSSanriND233
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Y9iItSSanriND233',
        spanInst,
        'sd_Y9iItSSanriND233'
      );
    }
  }

  async sd_ziw8sH2WYccBRSNv(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'destroyed' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ziw8sH2WYccBRSNv');
    }
  }

  async sd_zvnWXEh4AjxlzkV8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_zvnWXEh4AjxlzkV8',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2yy4MgXAzcf90HlB(bh, parentSpanInst);
      //appendnew_next_sd_zvnWXEh4AjxlzkV8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_zvnWXEh4AjxlzkV8',
        spanInst,
        'sd_zvnWXEh4AjxlzkV8'
      );
    }
  }

  async sd_2yy4MgXAzcf90HlB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2yy4MgXAzcf90HlB',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_HPpzGuRQ9BCIxjqO(bh, parentSpanInst);
      //appendnew_next_sd_2yy4MgXAzcf90HlB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2yy4MgXAzcf90HlB',
        spanInst,
        'sd_2yy4MgXAzcf90HlB'
      );
    }
  }

  async sd_HPpzGuRQ9BCIxjqO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HPpzGuRQ9BCIxjqO',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['se'](
          bh.local.sessionData.data.isMobile,
          'true',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_KItoDdwFGypzOJ45(bh, parentSpanInst);
      } else {
        bh = await this.sd_TILjvFTOxwoWr4cv(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HPpzGuRQ9BCIxjqO',
        spanInst,
        'sd_HPpzGuRQ9BCIxjqO'
      );
    }
  }

  async sd_KItoDdwFGypzOJ45(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_KItoDdwFGypzOJ45',
      parentSpanInst
    );
    try {
      bh.local.res = `<html>
   <script>
      var _timer;
      _timer = setInterval(() => {
                  if(window.webkit) {
                      window.webkit.messageHandlers.cordova_iab.postMessage(JSON.stringify({'auth': 'success'}));
                      clearInterval(_timer);
                  }
              }, 250);
      
   </script>
</html>`;
      this.tracerService.sendData(spanInst, bh);
      await this.sd_qpG1xEw2pljEQipg(bh, parentSpanInst);
      //appendnew_next_sd_KItoDdwFGypzOJ45
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_KItoDdwFGypzOJ45',
        spanInst,
        'sd_KItoDdwFGypzOJ45'
      );
    }
  }

  async sd_qpG1xEw2pljEQipg(bh, parentSpanInst) {
    try {
      bh.web.res.set({
        'Content-Security-Policy':
          "script 'sha256-j4HHWBMKh2PoLEAu017BWktgUmmL7VVMjnHuNWUHGOg='",
      });

      bh.web.res.status(200).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_qpG1xEw2pljEQipg');
    }
  }

  async sd_TILjvFTOxwoWr4cv(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TILjvFTOxwoWr4cv',
      parentSpanInst
    );
    try {
      bh.local.redirectHeaders = {
        location: bh.local.sessionData.data.redirectTo,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_QJA2SJmiqPItTByQ(bh, parentSpanInst);
      //appendnew_next_sd_TILjvFTOxwoWr4cv
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TILjvFTOxwoWr4cv',
        spanInst,
        'sd_TILjvFTOxwoWr4cv'
      );
    }
  }

  async sd_QJA2SJmiqPItTByQ(bh, parentSpanInst) {
    try {
      bh.web.res.set(bh.local.redirectHeaders);

      bh.web.res.status(302).send('redirecting');

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_QJA2SJmiqPItTByQ');
    }
  }

  async sd_laaKgJCeBtZxTXDM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_laaKgJCeBtZxTXDM',
      parentSpanInst
    );
    try {
      bh.local = {};
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_GwMr0ykcl0qcQNAL(bh, parentSpanInst);
      //appendnew_next_sd_laaKgJCeBtZxTXDM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_laaKgJCeBtZxTXDM',
        spanInst,
        'sd_laaKgJCeBtZxTXDM'
      );
    }
  }

  async sd_GwMr0ykcl0qcQNAL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GwMr0ykcl0qcQNAL',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        bh.local.sessionData = JSON.parse(
          JSON.stringify(requestObject.session)
        );
      }

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_f8H3cNOKboD3GmT1(bh, parentSpanInst);
      //appendnew_next_sd_GwMr0ykcl0qcQNAL
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GwMr0ykcl0qcQNAL',
        spanInst,
        'sd_GwMr0ykcl0qcQNAL'
      );
    }
  }

  async sd_f8H3cNOKboD3GmT1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_f8H3cNOKboD3GmT1',
      parentSpanInst
    );
    try {
      bh.local.sessionExists = false;

      if (
        bh.local.sessionData &&
        bh.local.sessionData.data &&
        bh.local.sessionData.data.tokenset &&
        bh.local.sessionData.data.tokenset.access_token &&
        bh.local.sessionData.data.tokenset.refresh_token
      ) {
        bh.local.sessionExists = true;
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_nm9T3nE7BIanzrOx(bh, parentSpanInst);
      //appendnew_next_sd_f8H3cNOKboD3GmT1
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_f8H3cNOKboD3GmT1',
        spanInst,
        'sd_f8H3cNOKboD3GmT1'
      );
    }
  }

  async sd_nm9T3nE7BIanzrOx(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nm9T3nE7BIanzrOx',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['true'](
          bh.local.sessionExists,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_TAgFlEcPQrekvIA9(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_ZbAGaKa1PcOS7oOW(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nm9T3nE7BIanzrOx',
        spanInst,
        'sd_nm9T3nE7BIanzrOx'
      );
    }
  }

  async sd_TAgFlEcPQrekvIA9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_TAgFlEcPQrekvIA9',
      parentSpanInst
    );
    try {
      const sd_9pBMALo7q29aLFtKInstance: sd_9pBMALo7q29aLFtK.idsutil =
        sd_9pBMALo7q29aLFtK.idsutil.getInstance();
      let outputVariables = await sd_9pBMALo7q29aLFtKInstance.handleTokenExpiry(
        spanInst,
        bh.local.sessionData,
        undefined
      );
      bh.local.newSession = outputVariables.input.newSession;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_SxGD4ma5SiPxVC6y(bh, parentSpanInst);
      //appendnew_next_sd_TAgFlEcPQrekvIA9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_TAgFlEcPQrekvIA9',
        spanInst,
        'sd_TAgFlEcPQrekvIA9'
      );
    }
  }

  async sd_SxGD4ma5SiPxVC6y(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_SxGD4ma5SiPxVC6y',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['false'](
          bh.local.newSession,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_4HRXtRXMW9W4Fgqg(bh, parentSpanInst);
      } else {
        bh = await this.sd_iKD6WcdzLShzPobR(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SxGD4ma5SiPxVC6y',
        spanInst,
        'sd_SxGD4ma5SiPxVC6y'
      );
    }
  }

  async sd_4HRXtRXMW9W4Fgqg(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_4HRXtRXMW9W4Fgqg',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        let p = function () {
          return new Promise<void | string>((resolve, reject) => {
            requestObject.session.destroy(function (error) {
              if (error) {
                return reject(error);
              }
              return resolve();
            });
          });
        };
        await p();
      }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_QbAy2OH4Fs6PYaH6(bh, parentSpanInst);
      //appendnew_next_sd_4HRXtRXMW9W4Fgqg
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_4HRXtRXMW9W4Fgqg',
        spanInst,
        'sd_4HRXtRXMW9W4Fgqg'
      );
    }
  }

  async sd_QbAy2OH4Fs6PYaH6(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QbAy2OH4Fs6PYaH6',
      parentSpanInst
    );
    try {
      bh.local.res = {
        code: 'TOKEN_EXPIRED',
        message: 'Token invalid or access revoked',
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lrwKbEXNoYC9U84y(bh, parentSpanInst);
      //appendnew_next_sd_QbAy2OH4Fs6PYaH6
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QbAy2OH4Fs6PYaH6',
        spanInst,
        'sd_QbAy2OH4Fs6PYaH6'
      );
    }
  }

  async sd_lrwKbEXNoYC9U84y(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send(bh.local.res);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_lrwKbEXNoYC9U84y');
    }
  }

  async sd_iKD6WcdzLShzPobR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iKD6WcdzLShzPobR',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.newSession.rotated,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_s3QhgfPWGs2bxAyu(bh, parentSpanInst);
      } else {
        bh = await this.sd_UReCzz8e2cAMf0G1(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iKD6WcdzLShzPobR',
        spanInst,
        'sd_iKD6WcdzLShzPobR'
      );
    }
  }

  async sd_s3QhgfPWGs2bxAyu(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_s3QhgfPWGs2bxAyu',
      parentSpanInst
    );
    try {
      delete bh.local.newSession.rotated;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_V5OL0W2P8hNcyF0h(bh, parentSpanInst);
      //appendnew_next_sd_s3QhgfPWGs2bxAyu
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_s3QhgfPWGs2bxAyu',
        spanInst,
        'sd_s3QhgfPWGs2bxAyu'
      );
    }
  }

  async sd_V5OL0W2P8hNcyF0h(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_V5OL0W2P8hNcyF0h',
      parentSpanInst
    );
    try {
      let requestObject = bh.web.req;
      if (requestObject.session) {
        requestObject.session.data = bh.local.newSession;
      }
      this.tracerService.sendData(spanInst, bh);
      await this.sd_UReCzz8e2cAMf0G1(bh, parentSpanInst);
      //appendnew_next_sd_V5OL0W2P8hNcyF0h
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_V5OL0W2P8hNcyF0h',
        spanInst,
        'sd_V5OL0W2P8hNcyF0h'
      );
    }
  }

  async sd_UReCzz8e2cAMf0G1(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UReCzz8e2cAMf0G1',
      parentSpanInst
    );
    try {
      bh.web.next();
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UReCzz8e2cAMf0G1',
        spanInst,
        'sd_UReCzz8e2cAMf0G1'
      );
    }
  }

  async sd_ZbAGaKa1PcOS7oOW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZbAGaKa1PcOS7oOW',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['cont'](
          bh.input.path,
          '/user/info',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uSfkU0WvFmVtvamW(bh, parentSpanInst);
      } else {
        bh = await this.sd_Uo2jyPTMIjIY7EaO(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZbAGaKa1PcOS7oOW',
        spanInst,
        'sd_ZbAGaKa1PcOS7oOW'
      );
    }
  }

  async sd_uSfkU0WvFmVtvamW(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uSfkU0WvFmVtvamW',
      parentSpanInst
    );
    try {
      bh.local.res = { message: 'Session expired' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lrwKbEXNoYC9U84y(bh, parentSpanInst);
      //appendnew_next_sd_uSfkU0WvFmVtvamW
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uSfkU0WvFmVtvamW',
        spanInst,
        'sd_uSfkU0WvFmVtvamW'
      );
    }
  }

  async sd_Uo2jyPTMIjIY7EaO(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Uo2jyPTMIjIY7EaO',
      parentSpanInst
    );
    try {
      bh.local.res = { code: 'NO_SESSION', message: 'Session not present' };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_lrwKbEXNoYC9U84y(bh, parentSpanInst);
      //appendnew_next_sd_Uo2jyPTMIjIY7EaO
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Uo2jyPTMIjIY7EaO',
        spanInst,
        'sd_Uo2jyPTMIjIY7EaO'
      );
    }
  }

  //appendnew_node

  // error_handler_slot
  private async errorHandler(
    bh,
    e,
    src,
    parentSpanInst?,
    functionName?
  ): Promise<any> {
    console.error(e);
    bh.error = e;
    bh.errorSource = src;
    bh.errorFunName = functionName;
    this.tracerService.sendData(parentSpanInst, bh, true);
    if (
      false ||
      (await this.sd_sKQEpoVD0TwFVvtZ(bh, parentSpanInst)) ||
      (await this.sd_D5MtixZz0ZEASo2z(bh, parentSpanInst))
      /*appendnew_next_Catch*/
    ) {
      return bh;
    } else {
      if (bh.web.next) {
        bh.web.next(e);
      } else {
        throw e;
      }
    }
  }
  async sd_sKQEpoVD0TwFVvtZ(bh, parentSpanInst) {
    const nodes = [
      'sd_nLstL98RUWfEKVk6',
      'sd_fN0M6bFib2FsqpUr',
      'sd_AbtCfgG4Y0ZNrQjn',
      'sd_R4YkrlxVj6jOwJaJ',
      'sd_PVL71Kuv671K5GvK',
      'sd_YvkZ0OZcJI1FrCxJ',
      'sd_dUn36riEYylGvM97',
      'sd_aFwh8y2DYEas8fu9',
      'sd_bB40NetwpxfrLxuW',
      'sd_GPmUKHVNQfOC4mob',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_wRsuCTJzih1MQSYo(bh, parentSpanInst);
      //appendnew_next_sd_sKQEpoVD0TwFVvtZ
      return true;
    }
    return false;
  }
  async sd_D5MtixZz0ZEASo2z(bh, parentSpanInst) {
    const nodes = ['sd_TAgFlEcPQrekvIA9'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_QbAy2OH4Fs6PYaH6(bh, parentSpanInst);
      //appendnew_next_sd_D5MtixZz0ZEASo2z
      return true;
    }
    return false;
  }
  //appendnew_flow_ids_Catch
}
