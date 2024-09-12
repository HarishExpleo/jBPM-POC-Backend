// _neu_generated_code__dont_modify_directly_
let instance = null;
//CORE_REFERENCE_IMPORTS
//append_imports_start

import * as cookieParser from 'cookie-parser'; //_splitter_
import { SDBaseService } from '../../services/SDBaseService'; //_splitter_
import { TracerService } from '../../services/TracerService'; //_splitter_
import log from '../../utils/Logger'; //_splitter_
import * as SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N from './empdetails_service'; //_splitter_
//append_imports_end
export class empdetails_api {
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
    this.serviceName = 'empdetails_api';
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
      instance = new empdetails_api(
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
    //appendnew_flow_empdetails_api_TimerStart
  }

  private mountAllMiddlewares() {
    log.debug('mounting all middlewares for service :: empdetails_api');
    //appendnew_flow_empdetails_api_MiddlewareStart
  }

  private mountAllPaths() {
    log.debug('mounting all paths for service :: empdetails_api');

    this.app['post'](
      `${this.serviceBasePath}/empDetails/save`,
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
          bh = await this.sd_QFgs2Hawl9M5ijzi(bh, parentSpanInst);
          //appendnew_next_sd_VrVvg9Ne1r08PRgE
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_VrVvg9Ne1r08PRgE');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );

    this.app['get'](
      `${this.serviceBasePath}/get/empDetails`,
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
          bh = await this.sd_7IbgrLxpcQX83KRn(bh, parentSpanInst);
          //appendnew_next_sd_oYpmHYlxM1aKzey4
        } catch (e) {
          return await this.errorHandler(bh, e, 'sd_oYpmHYlxM1aKzey4');
        }
      },
      this.sdService.getMiddlesWaresBySequenceId(
        null,
        'post',
        this.generatedMiddlewares
      )
    );
    //appendnew_flow_empdetails_api_HttpIn
  }
  //   service flows_empdetails_api

  //appendnew_flow_empdetails_api_start

  async sd_QFgs2Hawl9M5ijzi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_QFgs2Hawl9M5ijzi',
      parentSpanInst
    );
    try {
      bh.local.saveEmpDetails = {
        fname: bh.input.body.fname,
        lname: bh.input.body.lname,
        qualification: bh.input.body.qualification,
        dob: bh.input.body.dob,
        gender: bh.input.body.gender,
        phone: bh.input.body.phone,
        referencephone: bh.input.body.referencephone,
        address: bh.input.body.address,
        email: bh.input.body.email,
        passbook: bh.input.body.passbook,
        identycard: bh.input.body.identycard,
        experienceLetter: bh.input.body.experienceLetter,
        educationCertificates: bh.input.body.educationCertificates,
      };
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_6zGOHPmWgTg95wbi(bh, parentSpanInst);
      //appendnew_next_sd_QFgs2Hawl9M5ijzi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_QFgs2Hawl9M5ijzi',
        spanInst,
        'sd_QFgs2Hawl9M5ijzi'
      );
    }
  }

  async sd_6zGOHPmWgTg95wbi(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_6zGOHPmWgTg95wbi',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2NInstance: SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N.empdetails_service =
        SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N.empdetails_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2NInstance.saveEmpDetails(
          spanInst,
          bh.input.body.fname,
          bh.input.body.lname,
          bh.input.body.dob,
          bh.input.body.qualification,
          bh.input.body.gender,
          bh.input.body.address,
          bh.input.body.phone,
          bh.input.body.referencephone,
          bh.input.body.identycard,
          bh.input.body.email,
          bh.input.body.educationCertificates,
          bh.input.body.experienceLetter,
          bh.input.body.passbook
        );
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_CCCfoipyZpaUjzEf(bh, parentSpanInst);
      //appendnew_next_sd_6zGOHPmWgTg95wbi
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_6zGOHPmWgTg95wbi',
        spanInst,
        'sd_6zGOHPmWgTg95wbi'
      );
    }
  }

  async sd_CCCfoipyZpaUjzEf(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_CCCfoipyZpaUjzEf',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_YPGy2vG0YqNfWPW0(bh, parentSpanInst);
      //appendnew_next_sd_CCCfoipyZpaUjzEf
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_CCCfoipyZpaUjzEf',
        spanInst,
        'sd_CCCfoipyZpaUjzEf'
      );
    }
  }

  async sd_YPGy2vG0YqNfWPW0(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_YPGy2vG0YqNfWPW0');
    }
  }

  async sd_7IbgrLxpcQX83KRn(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_7IbgrLxpcQX83KRn',
      parentSpanInst
    );
    try {
      // bh.local.saveEmpDetails={
      // fname:bh.input.body.fname,
      // lname:bh.input.body.lname,
      // qualification:bh.input.body.qualification,
      // dob:bh.input.body.dob,
      // gender:bh.input.body.gender,
      // phone:bh.input.body.phone,
      // referencephone:bh.input.body.referencephone,
      // address:bh.input.body.address,
      // email:bh.input.body.email,
      // passbook:bh.input.body.passbook,
      // identycard:bh.input.body.identycard,
      // experienceLetter:bh.input.body.experienceLetter,
      // educationCertificates:bh.input.body.educationCertificates
      // }
      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_tpr5PDlZsxr4s28i(bh, parentSpanInst);
      //appendnew_next_sd_7IbgrLxpcQX83KRn
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_7IbgrLxpcQX83KRn',
        spanInst,
        'sd_7IbgrLxpcQX83KRn'
      );
    }
  }

  async sd_tpr5PDlZsxr4s28i(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_tpr5PDlZsxr4s28i',
      parentSpanInst
    );
    try {
      const SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2NInstance: SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N.empdetails_service =
        SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N.empdetails_service.getInstance();
      let outputVariables =
        await SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2NInstance.getEmpDetails(
          spanInst,
          bh.input.body
        );
      bh.local.outputMapping = outputVariables.local.outputMapping;

      this.tracerService.sendData(spanInst, bh);
      bh = await this.sd_0XyklRNkGYm3fxnj(bh, parentSpanInst);
      //appendnew_next_sd_tpr5PDlZsxr4s28i
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_tpr5PDlZsxr4s28i',
        spanInst,
        'sd_tpr5PDlZsxr4s28i'
      );
    }
  }

  async sd_0XyklRNkGYm3fxnj(bh, parentSpanInst) {
    const spanInst = this.tracerService.createSpan(
      'sd_0XyklRNkGYm3fxnj',
      parentSpanInst
    );
    try {
      bh.local.resultMapping = {
        code: 200,
        data: bh.local.outputMapping,
      };
      this.tracerService.sendData(spanInst, bh);
      await this.sd_ssCfU4wdhwpx0AS6(bh, parentSpanInst);
      //appendnew_next_sd_0XyklRNkGYm3fxnj
      return bh;
    } catch (e) {
      return await this.errorHandler(
        bh,
        e,
        'sd_0XyklRNkGYm3fxnj',
        spanInst,
        'sd_0XyklRNkGYm3fxnj'
      );
    }
  }

  async sd_ssCfU4wdhwpx0AS6(bh, parentSpanInst) {
    try {
      bh.web.res.status(200).send(bh.local.resultMapping);

      return bh;
    } catch (e) {
      return await this.errorHandler(bh, e, 'sd_ssCfU4wdhwpx0AS6');
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
  //appendnew_flow_empdetails_api_Catch
}
