// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class signup_service {
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
    this.serviceName = 'signup_service';
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
      instance = new signup_service(
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
    //appendnew_flow_signup_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: signup_service');
    //appendnew_flow_signup_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: signup_service');
    //appendnew_flow_signup_service_HttpIn
  }
  //   service flows_signup_service

  async userService(
    parentSpanInst,
    userName: any = undefined,
    newpassword: any = undefined,
    confirmpasword: any = undefined,
    isError: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'userService',
      parentSpanInst
    );
    let bh: any = {
      input: {
        userName,
        newpassword,
        confirmpasword,
        isError,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_VFIEV9eemMaHA2T3(bh, parentSpanInst);
      //appendnew_next_userService
      return (
        // formatting output variables
        {
          input: {
            isError: bh.input.isError,
          },
          local: {
            outputMapping: bh.local.outputMapping,
          },
        }
      );
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_SRXtrg8trjsfDx2M',
        spanInst,
        'userService'
      );
    }
  }
  //appendnew_flow_signup_service_start

  async sd_VFIEV9eemMaHA2T3(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_VFIEV9eemMaHA2T3',
      parentSpanInst
    );
    try {
      bh.input.credentials = {
        userName: bh.input.userName,
        newpassword: bh.input.newpassword,
        confirmpasword: bh.input.confirmpasword,
      };

      bh.input.checkcondition = {
        userName: bh.input.userName,
      };

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_ubYUjpfga7avlVuF(bh, parentSpanInst);
      //appendnew_next_sd_VFIEV9eemMaHA2T3
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_VFIEV9eemMaHA2T3',
        spanInst,
        'sd_VFIEV9eemMaHA2T3'
      );
    }
  }

  async sd_ubYUjpfga7avlVuF(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_ubYUjpfga7avlVuF',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = await MongoPersistance.getInstance().find(
        'sd_X8GfjgUbWUvkJUBZ',
        'signuptable',
        bh.input.checkcondition,
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_PPtGBmOjcI0EWxYb(bh, parentSpanInst);
      //appendnew_next_sd_ubYUjpfga7avlVuF
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_ubYUjpfga7avlVuF',
        spanInst,
        'sd_ubYUjpfga7avlVuF'
      );
    }
  }

  async sd_PPtGBmOjcI0EWxYb(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_PPtGBmOjcI0EWxYb',
      parentSpanInst
    );
    try {
      console.log('result', bh.local.outputMapping);

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_DepPpGkk68H4fMRm(bh, parentSpanInst);
      //appendnew_next_sd_PPtGBmOjcI0EWxYb
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_PPtGBmOjcI0EWxYb',
        spanInst,
        'sd_PPtGBmOjcI0EWxYb'
      );
    }
  }

  async sd_DepPpGkk68H4fMRm(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_DepPpGkk68H4fMRm',
      parentSpanInst
    );
    try {
      if (
        this.sdService.operators['empty'](
          bh.local.outputMapping,
          undefined,
          undefined,
          undefined
        )
      ) {
        bh = await this.sd_cZK5P52KzQ84cE8n(bh, parentSpanInst);
      } else {
        bh = await this.sd_HFoklbM99Lw2aRZK(bh, parentSpanInst);
      }
      this.tracerService.sendData(spanInst, bh);

      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_DepPpGkk68H4fMRm',
        spanInst,
        'sd_DepPpGkk68H4fMRm'
      );
    }
  }

  async sd_HFoklbM99Lw2aRZK(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_HFoklbM99Lw2aRZK',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = 'Already Exist';
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_HFoklbM99Lw2aRZK
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_HFoklbM99Lw2aRZK',
        spanInst,
        'sd_HFoklbM99Lw2aRZK'
      );
    }
  }

  async sd_cZK5P52KzQ84cE8n(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cZK5P52KzQ84cE8n',
      parentSpanInst
    );
    try {
      bh.local.empResult = await MongoPersistance.getInstance().insertOne(
        'sd_X8GfjgUbWUvkJUBZ',
        'signuptable',
        bh.input.credentials,
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_3deJtmpkdPX4P7uS(bh, parentSpanInst);
      //appendnew_next_sd_cZK5P52KzQ84cE8n
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cZK5P52KzQ84cE8n',
        spanInst,
        'sd_cZK5P52KzQ84cE8n'
      );
    }
  }

  async sd_3deJtmpkdPX4P7uS(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_3deJtmpkdPX4P7uS',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = bh.local.empResult;

      console.log('outputmapping', bh.local.outputMapping);
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_3deJtmpkdPX4P7uS
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_3deJtmpkdPX4P7uS',
        spanInst,
        'sd_3deJtmpkdPX4P7uS'
      );
    }
  }

  async sd_iDXwbaFhYqO3ILHE(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_iDXwbaFhYqO3ILHE',
      parentSpanInst
    );
    try {
      bh.input.isError = true;
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_iDXwbaFhYqO3ILHE
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_iDXwbaFhYqO3ILHE',
        spanInst,
        'sd_iDXwbaFhYqO3ILHE'
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
      (await this.sd_c9EeEzG0cIJx4mNn(bh, parentSpanInst))
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
  async sd_c9EeEzG0cIJx4mNn(bh, parentSpanInst) {
    const nodes = [
      'sd_SRXtrg8trjsfDx2M',
      'sd_VFIEV9eemMaHA2T3',
      'sd_3deJtmpkdPX4P7uS',
    ];
    if (nodes.includes(bh.errorSource)) {
      bh = await this.sd_iDXwbaFhYqO3ILHE(bh, parentSpanInst);
      //appendnew_next_sd_c9EeEzG0cIJx4mNn
      return true;
    }
    return false;
  }
  //appendnew_flow_signup_service_Catch
}
