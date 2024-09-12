// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class postEmpDetails {
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
    this.serviceName = 'postEmpDetails';
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
      instance = new postEmpDetails(
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
    //appendnew_flow_postEmpDetails_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: postEmpDetails');
    //appendnew_flow_postEmpDetails_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: postEmpDetails');

    this.app['post'](
      `${this.serviceBasePath}/postEmpDetails`,
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
          bh = await this.sd_tjFiORFhMUlRW1N3(bh, parentSpanInst);
          //appendnew_next_sd_p7X2Iio7Iwl894mC
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_p7X2Iio7Iwl894mC');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_postEmpDetails_HttpIn
  }
  //   service flows_postEmpDetails

  //appendnew_flow_postEmpDetails_start

  async sd_tjFiORFhMUlRW1N3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tjFiORFhMUlRW1N3',
      parentSpanInst
    );
    try {
      console.log('calling post employee details api');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_NK9ZwmwYoskwbmQs(bh, parentSpanInst);
      //appendnew_next_sd_tjFiORFhMUlRW1N3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tjFiORFhMUlRW1N3',
        spanInst,
        'sd_tjFiORFhMUlRW1N3'
      );
    }
  }

  async sd_NK9ZwmwYoskwbmQs(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'success', data: [] });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_NK9ZwmwYoskwbmQs');
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
  //appendnew_flow_postEmpDetails_Catch
}
