// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
//append_imports_end
export class searchUsers {
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
    this.serviceName = 'searchUsers';
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
      instance = new searchUsers(
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
    //appendnew_flow_searchUsers_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: searchUsers');
    //appendnew_flow_searchUsers_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: searchUsers');

    this.app['post'](
      `${this.serviceBasePath}/users/search/:userId`,
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
          bh = await this.sd_VcplmdbSmdib8d48(bh, parentSpanInst);
          //appendnew_next_sd_n23kGBSkhQPohqZl
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_n23kGBSkhQPohqZl');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_searchUsers_HttpIn
  }
  //   service flows_searchUsers

  //appendnew_flow_searchUsers_start

  async sd_VcplmdbSmdib8d48(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VcplmdbSmdib8d48',
      parentSpanInst
    );
    try {
      console.log(JSON.stringify(bh.input));
      this.tracerService.sendData(spanInst, bh);
      await this.sd_MMLhQD1S6vA3WI2k(bh, parentSpanInst);
      //appendnew_next_sd_VcplmdbSmdib8d48
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VcplmdbSmdib8d48',
        spanInst,
        'sd_VcplmdbSmdib8d48'
      );
    }
  }

  async sd_MMLhQD1S6vA3WI2k(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send({ message: 'success', data: [] });

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_MMLhQD1S6vA3WI2k');
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
  //appendnew_flow_searchUsers_Catch
}
