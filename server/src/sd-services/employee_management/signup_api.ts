// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR from './signup_service'; //_splitter_
//append_imports_end
export class signup_api {
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
    this.serviceName = 'signup_api';
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
      instance = new signup_api(
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
    //appendnew_flow_signup_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: signup_api');
    //appendnew_flow_signup_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: signup_api');

    this.app['post'](
      `${this.serviceBasePath}/user/register`,
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
          bh = await this.sd_HNvoEEkL7nCatYRV(bh, parentSpanInst);
          //appendnew_next_sd_nJWg37O8nxxeZav3
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_nJWg37O8nxxeZav3');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_signup_api_HttpIn
  }
  //   service flows_signup_api

  //appendnew_flow_signup_api_start

  async sd_HNvoEEkL7nCatYRV(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HNvoEEkL7nCatYRV',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_S67iB9b0j4vD6frRInstance: SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR.signup_service =
        SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR.signup_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_S67iB9b0j4vD6frRInstance.userService(
          spanInst,
          bh.input.body.userName,
          bh.input.body.newpassword,
          bh.input.body.confirmpasword,
          undefined
        );
      bh.local.isError = outputVariables.input.isError;
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_y4xNh3o9UA7f5wwk(bh, parentSpanInst);
      //appendnew_next_sd_HNvoEEkL7nCatYRV
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HNvoEEkL7nCatYRV',
        spanInst,
        'sd_HNvoEEkL7nCatYRV'
      );
    }
  }

  async sd_y4xNh3o9UA7f5wwk(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_y4xNh3o9UA7f5wwk',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_hhx3LmYVqIxQVJeL(bh, parentSpanInst);
      //appendnew_next_sd_y4xNh3o9UA7f5wwk
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_y4xNh3o9UA7f5wwk',
        spanInst,
        'sd_y4xNh3o9UA7f5wwk'
      );
    }
  }

  async sd_hhx3LmYVqIxQVJeL(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_hhx3LmYVqIxQVJeL',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['eq'](
          bh.local.outputMapping,
          'Already Exist',
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_RSKYDP1XvubmvsnQ(bh, parentSpanInst);
      } else {
        bh = await this.sd_CXLkTSjUSoeNIKaD(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_hhx3LmYVqIxQVJeL',
        spanInst,
        'sd_hhx3LmYVqIxQVJeL'
      );
    }
  }

  async sd_CXLkTSjUSoeNIKaD(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_CXLkTSjUSoeNIKaD');
    }
  }

  async sd_RSKYDP1XvubmvsnQ(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_RSKYDP1XvubmvsnQ',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = 'This username is taken. Try another';
      this.tracerService.sendData(spanInst, bh);
      await this.sd_oUynoy711Z9PrKQR(bh, parentSpanInst);
      //appendnew_next_sd_RSKYDP1XvubmvsnQ
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_RSKYDP1XvubmvsnQ',
        spanInst,
        'sd_RSKYDP1XvubmvsnQ'
      );
    }
  }

  async sd_oUynoy711Z9PrKQR(bh, parentSpanInst) {
    try {
      bh.web.res.status(500).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_oUynoy711Z9PrKQR');
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
  //appendnew_flow_signup_api_Catch
}
