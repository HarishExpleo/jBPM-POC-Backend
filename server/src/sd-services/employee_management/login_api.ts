// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp from './login_service'; //_splitter_
//append_imports_end
export class login_api {
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
    this.serviceName = 'login_api';
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
      instance = new login_api(
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
    //appendnew_flow_login_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: login_api');
    //appendnew_flow_login_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: login_api');

    this.app['post'](
      `${this.serviceBasePath}/emp/login`,
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
          bh = await this.sd_bd84HsnOeTJDL3l5(bh, parentSpanInst);
          //appendnew_next_sd_OjRl04LsMrsuhvb6
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_OjRl04LsMrsuhvb6');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_login_api_HttpIn
  }
  //   service flows_login_api

  //appendnew_flow_login_api_start

  async sd_bd84HsnOeTJDL3l5(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_bd84HsnOeTJDL3l5',
      parentSpanInst
    );
    try {
      bh.local.logincredentials = {
        userName: bh.input.body.userName,
        password: bh.input.body.password,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_XdkdvCMSWg8SPon2(bh, parentSpanInst);
      //appendnew_next_sd_bd84HsnOeTJDL3l5
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_bd84HsnOeTJDL3l5',
        spanInst,
        'sd_bd84HsnOeTJDL3l5'
      );
    }
  }

  async sd_XdkdvCMSWg8SPon2(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_XdkdvCMSWg8SPon2',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_8h7sP6xWW17scMxpInstance: SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp.login_service =
        SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp.login_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_8h7sP6xWW17scMxpInstance.loginservice(
          spanInst,
          bh.input.body.userName,
          bh.input.body.password
        );
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ECLEycLPZsXsUGsU(bh, parentSpanInst);
      //appendnew_next_sd_XdkdvCMSWg8SPon2
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_XdkdvCMSWg8SPon2',
        spanInst,
        'sd_XdkdvCMSWg8SPon2'
      );
    }
  }

  async sd_ECLEycLPZsXsUGsU(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ECLEycLPZsXsUGsU',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_d48VbLK3oT0x1tH6(bh, parentSpanInst);
      //appendnew_next_sd_ECLEycLPZsXsUGsU
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ECLEycLPZsXsUGsU',
        spanInst,
        'sd_ECLEycLPZsXsUGsU'
      );
    }
  }

  async sd_d48VbLK3oT0x1tH6(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_d48VbLK3oT0x1tH6');
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
  //appendnew_flow_login_api_Catch
}
