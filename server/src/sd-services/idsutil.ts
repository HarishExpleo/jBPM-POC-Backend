// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { custom, Issuer } from 'openid-client'; //_splitter_
import * as settings from '../config/config'; //_splitter_
import { SDBaseService } from '../services/SDBaseService'; //_splitter_
import { TracerService } from '../services/TracerService'; //_splitter_
import log from '../utils/Logger'; //_splitter_
//append_imports_end
export class idsutil {
  public client: any;
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
    this.serviceName = 'idsutil';
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
      instance = new idsutil(
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
    //appendnew_flow_idsutil_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: idsutil');
    //appendnew_flow_idsutil_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: idsutil');
    //appendnew_flow_idsutil_HttpIn
  }
  //   service flows_idsutil

  async getIDSClientInstance(parentSpanInst, clientInstance = null, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getIDSClientInstance',
      parentSpanInst
    );
    let bh: any = {
      input: {
        clientInstance,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_imEdq4agcPuVXh3n(bh, parentSpanInst);
      //appendnew_next_getIDSClientInstance
      return (
        // formatting output variables
        {
          input: {
            clientInstance: bh.input.clientInstance,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_mPVjHNZaqofBUva0',
        spanInst,
        'getIDSClientInstance'
      );
    }
  }

  async getAuthorizationParams(parentSpanInst, authParams = null, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getAuthorizationParams',
      parentSpanInst
    );
    let bh: any = {
      input: {
        authParams,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_7YL6DXa7u6TVTwOf(bh, parentSpanInst);
      //appendnew_next_getAuthorizationParams
      return (
        // formatting output variables
        {
          input: {
            authParams: bh.input.authParams,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bIf2cSwqkFunQTOE',
        spanInst,
        'getAuthorizationParams'
      );
    }
  }

  async handleTokenExpiry(
    parentSpanInst,
    existingSession = '',
    newSession = '',
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'handleTokenExpiry',
      parentSpanInst
    );
    let bh: any = {
      input: {
        existingSession,
        newSession,
      },
      local: {},
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_Td7SEkoGS5kQ5exT(bh, parentSpanInst);
      //appendnew_next_handleTokenExpiry
      return (
        // formatting output variables
        {
          input: {
            newSession: bh.input.newSession,
          },
          local: {},
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_jpyXReDY9BgISjQ4',
        spanInst,
        'handleTokenExpiry'
      );
    }
  }
  //appendnew_flow_idsutil_start

  async sd_imEdq4agcPuVXh3n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_imEdq4agcPuVXh3n',
      parentSpanInst
    );
    try {
      bh.local.client = this.client;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_NDvR3YN7qjsaaO0E(bh, parentSpanInst);
      //appendnew_next_sd_imEdq4agcPuVXh3n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_imEdq4agcPuVXh3n',
        spanInst,
        'sd_imEdq4agcPuVXh3n'
      );
    }
  }

  async sd_NDvR3YN7qjsaaO0E(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_NDvR3YN7qjsaaO0E',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['istype'](
          bh.local.client,
          'undefined',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J9L3oEbqPtl8tfbi(bh, parentSpanInst);
      } else {
        bh = await this.sd_GcPSutxeqn0Wesps(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_yYERocq55ZaySBE3',
        spanInst,
        'sd_NDvR3YN7qjsaaO0E'
      );
    }
  }

  async sd_J9L3oEbqPtl8tfbi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J9L3oEbqPtl8tfbi',
      parentSpanInst
    );
    try {
      const DEFAULT_HTTP_OPTIONS = {
        timeout: 60000,
      };

      custom.setHttpOptionsDefaults({
        timeout: DEFAULT_HTTP_OPTIONS.timeout,
      });
      log.info(
        `Identity server default HTTP options : ${DEFAULT_HTTP_OPTIONS}`
      );
      const issuer = await Issuer.discover(
        settings.default['ids']['issuerURL']
      );
      log.info(`Identity server discovered at : ${issuer.issuer}`);
      const client = new issuer.Client({
        client_id: settings.default['ids']['client_id'],
        client_secret: settings.default['ids']['client_secret'],
      });
      client[custom.clock_tolerance] = parseInt(
        process.env.CLOCK_TOLERANCE.toString()
      );
      log.info('Client connected...');
      bh.input.clientInstance = client;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_LM2lsUDh5BWTTwmM(bh, parentSpanInst);
      //appendnew_next_sd_J9L3oEbqPtl8tfbi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VqSPUOlNCqK5Vksl',
        spanInst,
        'sd_J9L3oEbqPtl8tfbi'
      );
    }
  }

  async sd_LM2lsUDh5BWTTwmM(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_LM2lsUDh5BWTTwmM',
      parentSpanInst
    );
    try {
      this.client = bh.input.clientInstance;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_LM2lsUDh5BWTTwmM
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_LM2lsUDh5BWTTwmM',
        spanInst,
        'sd_LM2lsUDh5BWTTwmM'
      );
    }
  }

  async sd_GcPSutxeqn0Wesps(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_GcPSutxeqn0Wesps',
      parentSpanInst
    );
    try {
      bh.input.clientInstance = this.client;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_GcPSutxeqn0Wesps
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_GcPSutxeqn0Wesps',
        spanInst,
        'sd_GcPSutxeqn0Wesps'
      );
    }
  }

  async sd_7YL6DXa7u6TVTwOf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7YL6DXa7u6TVTwOf',
      parentSpanInst
    );
    try {
      bh.input.authParams = {
        scope: 'openid profile email address phone offline_access user',
        prompt: 'consent',
      };
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_7YL6DXa7u6TVTwOf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_AXChgj4RPGr2QqAM',
        spanInst,
        'sd_7YL6DXa7u6TVTwOf'
      );
    }
  }

  async sd_Td7SEkoGS5kQ5exT(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_Td7SEkoGS5kQ5exT',
      parentSpanInst
    );
    try {
      const tokenset = bh.input.existingSession.data.tokenset;
      bh.local.expires_at = tokenset['expires_at'] * 1000;
      bh.local.refreshTime = new Date().valueOf() + 300000; // 5min before
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k3DExrGQArMQa22b(bh, parentSpanInst);
      //appendnew_next_sd_Td7SEkoGS5kQ5exT
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_T49FtSMJBO86PTdh',
        spanInst,
        'sd_Td7SEkoGS5kQ5exT'
      );
    }
  }

  async sd_k3DExrGQArMQa22b(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k3DExrGQArMQa22b',
      parentSpanInst
    );
    try {
      let unsatisfied = true;
      if (
        this.sdService.operators['gt'](
          bh.local.expires_at,
          bh.local.refreshTime,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_5nD65FpeyZEpXupm(bh, parentSpanInst);
        unsatisfied = false;
      }
      if (unsatisfied) {
        bh = await this.sd_nBCUXYI1J1IjPR1x(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_gBQe3nSpgGlJrzP2',
        spanInst,
        'sd_k3DExrGQArMQa22b'
      );
    }
  }

  async sd_5nD65FpeyZEpXupm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_5nD65FpeyZEpXupm',
      parentSpanInst
    );
    try {
      bh.input.newSession = bh.input.existingSession.data;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_5nD65FpeyZEpXupm
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_o8sCIGJU6bAtaOEG',
        spanInst,
        'sd_5nD65FpeyZEpXupm'
      );
    }
  }

  async sd_nBCUXYI1J1IjPR1x(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_nBCUXYI1J1IjPR1x',
      parentSpanInst
    );
    try {
      let outputVariables = await this.getIDSClientInstance(
        spanInst,
        undefined
      );
      bh.input.client = outputVariables.input.clientInstance;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_qL9Mviy7F4sc2t67(bh, parentSpanInst);
      //appendnew_next_sd_nBCUXYI1J1IjPR1x
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WTn2UkqmqFklCfJe',
        spanInst,
        'sd_nBCUXYI1J1IjPR1x'
      );
    }
  }

  async sd_qL9Mviy7F4sc2t67(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_qL9Mviy7F4sc2t67',
      parentSpanInst
    );
    try {
      bh.local.refresh_token = await bh.input.client.introspect(
        bh.input.existingSession.data.tokenset.refresh_token,
        'refresh_token'
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ASHgsZiMGqDcx0SB(bh, parentSpanInst);
      //appendnew_next_sd_qL9Mviy7F4sc2t67
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_Kocng0ljk9jekUlF',
        spanInst,
        'sd_qL9Mviy7F4sc2t67'
      );
    }
  }

  async sd_ASHgsZiMGqDcx0SB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ASHgsZiMGqDcx0SB',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.refresh_token.active,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_J6XKRgByHasFBSp8(bh, parentSpanInst);
      } else {
        bh = await this.sd_EgUC5B8p6Vp4y70s(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_pwOVS0rDtGOyAyy3',
        spanInst,
        'sd_ASHgsZiMGqDcx0SB'
      );
    }
  }

  async sd_J6XKRgByHasFBSp8(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_J6XKRgByHasFBSp8',
      parentSpanInst
    );
    try {
      bh.input.newSession = { rotated: true };
      bh.input.newSession['tokenset'] = await bh.input.client.refresh(
        bh.input.existingSession.data.tokenset.refresh_token
      );
      bh.input.newSession['userInfo'] = await bh.input.client.userinfo(
        bh.input.newSession['tokenset']['access_token']
      );
      bh.input.newSession['tokenset']['claims'] = Object.assign(
        {},
        bh.input.newSession['tokenset'].claims()
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_J6XKRgByHasFBSp8
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_JL0ZgfubSyiMjLhX',
        spanInst,
        'sd_J6XKRgByHasFBSp8'
      );
    }
  }

  async sd_EgUC5B8p6Vp4y70s(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_EgUC5B8p6Vp4y70s',
      parentSpanInst
    );
    try {
      bh.input.newSession = false;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_EgUC5B8p6Vp4y70s
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_lWO397ANAldxPyu6',
        spanInst,
        'sd_EgUC5B8p6Vp4y70s'
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
      (await this.sd_NL1jgWiUk81R5OnY(bh, parentSpanInst))
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
  async sd_NL1jgWiUk81R5OnY(bh, parentSpanInst) {
    const nodes = ['handleTokenExpiry'];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_EgUC5B8p6Vp4y70s(bh, parentSpanInst);
      //appendnew_next_sd_NL1jgWiUk81R5OnY
      return true;
    }
    return false;
  }
  //appendnew_flow_idsutil_Catch
}
