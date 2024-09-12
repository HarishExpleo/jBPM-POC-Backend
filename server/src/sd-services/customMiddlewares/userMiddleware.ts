// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { Middleware } from '../../middleware/Middleware'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class userMiddleware {
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
    this.serviceName = 'userMiddleware';
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
      instance = new userMiddleware(
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
    //appendnew_flow_userMiddleware_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: userMiddleware');
    let mw_userMiddleware: Middleware = new Middleware(
      this.serviceName,
      'userMiddleware',
      async (req, res, next) => {
        let bh = {};
        try {
          bh = this.sdService.__constructDefault({ local: {} }, req, res, next);
          let parentSpanInst = null;
          bh = await this.sd_ctz3LlLcAhsK1FFt(bh, parentSpanInst);
          //appendnew_next_sd_ckyCm3OJkH0TMdRK
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_ckyCm3OJkH0TMdRK');
        }
      }
    );
    this.generatedMiddlewares[this.serviceName]['userMiddleware'] =
      mw_userMiddleware;
    //appendnew_flow_userMiddleware_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: userMiddleware');
    //appendnew_flow_userMiddleware_HttpIn
  }
  //   service flows_userMiddleware

  //appendnew_flow_userMiddleware_start

  async sd_ctz3LlLcAhsK1FFt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ctz3LlLcAhsK1FFt',
      parentSpanInst
    );
    try {
      console.log(bh.input);
      console.log('inside user middleware');

      bh.local.continue = true;
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_dNit30HZh7SFp3vX(bh, parentSpanInst);
      //appendnew_next_sd_ctz3LlLcAhsK1FFt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ctz3LlLcAhsK1FFt',
        spanInst,
        'sd_ctz3LlLcAhsK1FFt'
      );
    }
  }

  async sd_dNit30HZh7SFp3vX(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_dNit30HZh7SFp3vX',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['true'](
          bh.local.continue,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_ItcB6xXdogzjm7RA(bh, parentSpanInst);
      } else if (
        this.sdService.operators['false'](
          bh.local.continue,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_CMiwDBPsZ35Yk2BE(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_dNit30HZh7SFp3vX',
        spanInst,
        'sd_dNit30HZh7SFp3vX'
      );
    }
  }

  async sd_ItcB6xXdogzjm7RA(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ItcB6xXdogzjm7RA',
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
        'sd_ItcB6xXdogzjm7RA',
        spanInst,
        'sd_ItcB6xXdogzjm7RA'
      );
    }
  }

  async sd_CMiwDBPsZ35Yk2BE(bh, parentSpanInst) {
    try {
      bh.web.res.status(403).send({ message: 'UNAUTHORIZED' });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CMiwDBPsZ35Yk2BE');
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
  //appendnew_flow_userMiddleware_Catch
}
