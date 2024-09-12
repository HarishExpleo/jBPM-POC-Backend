// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import { MongoPersistance } from '../../utils/ndefault-mongodb/Mongodb/MongoPersistance'; //_splitter_
//append_imports_end
export class empdetails_service {
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
    this.serviceName = 'empdetails_service';
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
      instance = new empdetails_service(
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
    //appendnew_flow_empdetails_service_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: empdetails_service');
    //appendnew_flow_empdetails_service_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: empdetails_service');
    //appendnew_flow_empdetails_service_HttpIn
  }
  //   service flows_empdetails_service

  async saveEmpDetails(
    parentSpanInst,
    fname: any = undefined,
    lname: any = undefined,
    dob: any = undefined,
    qualification: any = undefined,
    gender: any = undefined,
    address: any = undefined,
    phone: any = undefined,
    referencephone: any = undefined,
    identycard: any = undefined,
    email: any = undefined,
    educationCertificates: any = undefined,
    experienceLetter: any = undefined,
    passbook: any = undefined,
    ...others
  ) {
    const spanInst = this.tracerService.createSpan(
      'saveEmpDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        fname,
        lname,
        dob,
        qualification,
        gender,
        address,
        phone,
        referencephone,
        identycard,
        email,
        educationCertificates,
        experienceLetter,
        passbook,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_sh5W86M40uUPxSjt(bh, parentSpanInst);
      //appendnew_next_saveEmpDetails
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
        'sd_00mZzyi0KW2qU1Xr',
        spanInst,
        'saveEmpDetails'
      );
    }
  }

  async getEmpDetails(parentSpanInst, username: any = undefined, ...others) {
    const spanInst = this.tracerService.createSpan(
      'getEmpDetails',
      parentSpanInst
    );
    let bh: any = {
      input: {
        username,
      },
      local: {
        outputMapping: undefined,
      },
    };
    try {
      bh = this.sdService.__constructDefault(bh);
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_aFfGHVMMKXiVrVVB(bh, parentSpanInst);
      //appendnew_next_getEmpDetails
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
        'sd_gw09jBVJNy6zIKEe',
        spanInst,
        'getEmpDetails'
      );
    }
  }
  //appendnew_flow_empdetails_service_start

  async sd_sh5W86M40uUPxSjt(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_sh5W86M40uUPxSjt',
      parentSpanInst
    );
    try {
      bh.input.empDetails = {
        fname: bh.input.fname,
        lname: bh.input.lname,
        qualification: bh.input.qualification,
        dob: bh.input.dob,
        gender: bh.input.gender,
        phone: bh.input.phone,
        referencephone: bh.input.referencephone,
        address: bh.input.address,
        email: bh.input.email,
        passbook: bh.input.passbook,
        identycard: bh.input.identycard,
        experienceLetter: bh.input.experienceLetter,
        educationCertificates: bh.input.educationCertificates,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_8uSA9W0XTkg7HSaI(bh, parentSpanInst);
      //appendnew_next_sd_sh5W86M40uUPxSjt
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_sh5W86M40uUPxSjt',
        spanInst,
        'sd_sh5W86M40uUPxSjt'
      );
    }
  }

  async sd_8uSA9W0XTkg7HSaI(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_8uSA9W0XTkg7HSaI',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = await MongoPersistance.getInstance().insertOne(
        'sd_X8GfjgUbWUvkJUBZ',
        'postEmpDetails',
        bh.input.empDetails,
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_8uSA9W0XTkg7HSaI
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_8uSA9W0XTkg7HSaI',
        spanInst,
        'sd_8uSA9W0XTkg7HSaI'
      );
    }
  }

  async sd_aFfGHVMMKXiVrVVB(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_aFfGHVMMKXiVrVVB',
      parentSpanInst
    );
    try {
      bh.local.data = {
        userName: 'Hari',
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_cKmOcERVolNHKFhD(bh, parentSpanInst);
      //appendnew_next_sd_aFfGHVMMKXiVrVVB
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_aFfGHVMMKXiVrVVB',
        spanInst,
        'sd_aFfGHVMMKXiVrVVB'
      );
    }
  }

  async sd_cKmOcERVolNHKFhD(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_cKmOcERVolNHKFhD',
      parentSpanInst
    );
    try {
      bh.local.outputMapping = await MongoPersistance.getInstance().find(
        'sd_X8GfjgUbWUvkJUBZ',
        'postEmpDetails',
        bh.body,
        bh.web,
        bh.web
      );
      this.tracerService.sendData(spanInst, bh);
      //appendnew_next_sd_cKmOcERVolNHKFhD
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_cKmOcERVolNHKFhD',
        spanInst,
        'sd_cKmOcERVolNHKFhD'
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
  //appendnew_flow_empdetails_service_Catch
}
