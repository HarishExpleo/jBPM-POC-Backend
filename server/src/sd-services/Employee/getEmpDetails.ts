// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class getEmpDetails {
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
    this.serviceName = 'getEmpDetails';
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
      instance = new getEmpDetails(
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
    //appendnew_flow_getEmpDetails_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: getEmpDetails');
    //appendnew_flow_getEmpDetails_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: getEmpDetails');

    this.app['get'](
      `${this.serviceBasePath}/getEmpDetails`,
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
          bh = await this.sd_tcp80zfr9Ff0daNR(bh, parentSpanInst);
          //appendnew_next_sd_M6HbjzsWs8w0d1Fp
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_M6HbjzsWs8w0d1Fp');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_getEmpDetails_HttpIn
  }
  //   service flows_getEmpDetails

  //appendnew_flow_getEmpDetails_start

  async sd_tcp80zfr9Ff0daNR(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tcp80zfr9Ff0daNR',
      parentSpanInst
    );
    try {
      console.log('calling getempDetails');
      this.tracerService.sendData(spanInst, bh);
      await this.sd_Sa9Q9QWhkpBa9jlw(bh, parentSpanInst);
      //appendnew_next_sd_tcp80zfr9Ff0daNR
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tcp80zfr9Ff0daNR',
        spanInst,
        'sd_tcp80zfr9Ff0daNR'
      );
    }
  }

  async sd_Sa9Q9QWhkpBa9jlw(bh, parentSpanInst) {
    try {
      bh.web.res
        .status(200)
        .send({ message: 'employee details successfully mapped' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_Sa9Q9QWhkpBa9jlw');
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
  //appendnew_flow_getEmpDetails_Catch
}
