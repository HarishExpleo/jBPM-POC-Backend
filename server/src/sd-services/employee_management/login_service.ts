// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class login_service {
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
    this.serviceName = 'login_service';
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
      instance = new login_service(
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
    //appendnew_flow_login_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login_service');
    //appendnew_flow_login_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: login_service');
    //appendnew_flow_login_service_HttpIn
  }
  //   service flows_login_service

  async loginservice(
    parentSpanInst,
    userName: any = undefined,
    password: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'loginservice',
      parentSpanInst
    );
    let bh: any = {
      input: {
        userName,
        password,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_UDnOaB0KcSeFqXAq(bh, parentSpanInst);
      //appendnew_next_loginservice
      return (
        // formatting output variables
        {
          input: {},
          local: {
            outputMapping: bh.local.outputMapping,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_nqprFpNNRo7g6STB',
        spanInst,
        'loginservice'
      );
    }
  }
  //appendnew_flow_login_service_start

  async sd_UDnOaB0KcSeFqXAq(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_UDnOaB0KcSeFqXAq',
      parentSpanInst
    );
    try {
      bh.input.logincredentials = {
        userName: bh.input.userName,
        password: bh.input.password,
      };

      bh.input.userCheckstatus;
      bh.local.userNotAvailable;

      bh.input.checkuser = {
        userName: bh.input.userName,
        newpassword: bh.input.password,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_wULmTSrU1t0hViA7(bh, parentSpanInst);
      //appendnew_next_sd_UDnOaB0KcSeFqXAq
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_UDnOaB0KcSeFqXAq',
        spanInst,
        'sd_UDnOaB0KcSeFqXAq'
      );
    }
  }

  async sd_wULmTSrU1t0hViA7(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_wULmTSrU1t0hViA7',
      parentSpanInst
    );
    try {
      bh.local.userCheckstatus = await MongoPersistance.getInstance().find(
        'sd_X8GfjgUbWUvkJUBZ',
        'signuptable',
        bh.input.checkuser,
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VV90wL9TP6JN8Nwl(bh, parentSpanInst);
      //appendnew_next_sd_wULmTSrU1t0hViA7
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_wULmTSrU1t0hViA7',
        spanInst,
        'sd_wULmTSrU1t0hViA7'
      );
    }
  }

  async sd_VV90wL9TP6JN8Nwl(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VV90wL9TP6JN8Nwl',
      parentSpanInst
    );
    try {
      console.log('userCheckstatus', bh.local.userCheckstatus);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_k2kyHBokLYZRkE5G(bh, parentSpanInst);
      //appendnew_next_sd_VV90wL9TP6JN8Nwl
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VV90wL9TP6JN8Nwl',
        spanInst,
        'sd_VV90wL9TP6JN8Nwl'
      );
    }
  }

  async sd_k2kyHBokLYZRkE5G(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_k2kyHBokLYZRkE5G',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.userCheckstatus,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_OoqdIggxc1Zzl7AG(bh, parentSpanInst);
      } else {
        bh = await this.sd_ZDdolwkFDowlGRsZ(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_k2kyHBokLYZRkE5G',
        spanInst,
        'sd_k2kyHBokLYZRkE5G'
      );
    }
  }

  async sd_OoqdIggxc1Zzl7AG(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_OoqdIggxc1Zzl7AG',
      parentSpanInst
    );
    try {
      bh.local.userNotAvailable = 'Your account not exist, try to signup';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_AOazDp1tSczQ5Hfc(bh, parentSpanInst);
      //appendnew_next_sd_OoqdIggxc1Zzl7AG
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_OoqdIggxc1Zzl7AG',
        spanInst,
        'sd_OoqdIggxc1Zzl7AG'
      );
    }
  }

  async sd_AOazDp1tSczQ5Hfc(bh, parentSpanInst) {
    try {
      bh.web.res.status(404).send(bh.local.userNotAvailable);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_AOazDp1tSczQ5Hfc');
    }
  }

  async sd_ZDdolwkFDowlGRsZ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ZDdolwkFDowlGRsZ',
      parentSpanInst
    );
    try {
      bh.local.checkloginstatus = await MongoPersistance.getInstance().find(
        'sd_X8GfjgUbWUvkJUBZ',
        'logintable',
        bh.input.logincredentials,
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CpMSF3vCN95Cb5Z9(bh, parentSpanInst);
      //appendnew_next_sd_ZDdolwkFDowlGRsZ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ZDdolwkFDowlGRsZ',
        spanInst,
        'sd_ZDdolwkFDowlGRsZ'
      );
    }
  }

  async sd_CpMSF3vCN95Cb5Z9(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CpMSF3vCN95Cb5Z9',
      parentSpanInst
    );
    try {
      console.log('Checkloginstatus', bh.local.checkloginstatus);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_WFb0ulQJdVf5GrsK(bh, parentSpanInst);
      //appendnew_next_sd_CpMSF3vCN95Cb5Z9
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CpMSF3vCN95Cb5Z9',
        spanInst,
        'sd_CpMSF3vCN95Cb5Z9'
      );
    }
  }

  async sd_WFb0ulQJdVf5GrsK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_WFb0ulQJdVf5GrsK',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.checkloginstatus,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_uSvJjgKleanqq5LY(bh, parentSpanInst);
      } else {
        bh = await this.sd_1ljCanpVmIH2tGcj(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_WFb0ulQJdVf5GrsK',
        spanInst,
        'sd_WFb0ulQJdVf5GrsK'
      );
    }
  }

  async sd_uSvJjgKleanqq5LY(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_uSvJjgKleanqq5LY',
      parentSpanInst
    );
    try {
      bh.local.emploginresponse =
        await MongoPersistance.getInstance().insertOne(
          'sd_X8GfjgUbWUvkJUBZ',
          'logintable',
          bh.input.logincredentials,
          bh.web,
          bh.web
        );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_2mI1obgAvDn5iHzf(bh, parentSpanInst);
      //appendnew_next_sd_uSvJjgKleanqq5LY
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_uSvJjgKleanqq5LY',
        spanInst,
        'sd_uSvJjgKleanqq5LY'
      );
    }
  }

  async sd_2mI1obgAvDn5iHzf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_2mI1obgAvDn5iHzf',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = bh.local.emploginresponse;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_2mI1obgAvDn5iHzf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_2mI1obgAvDn5iHzf',
        spanInst,
        'sd_2mI1obgAvDn5iHzf'
      );
    }
  }

  async sd_1ljCanpVmIH2tGcj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_1ljCanpVmIH2tGcj',
      parentSpanInst
    );
    try {
      console.log('user already registered');
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_1ljCanpVmIH2tGcj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_1ljCanpVmIH2tGcj',
        spanInst,
        'sd_1ljCanpVmIH2tGcj'
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
    if (bh.web.next) {
      bh.web.next(e);
    } else {
      throw e;
    }
  }
  //appendnew_flow_login_service_Catch
}
