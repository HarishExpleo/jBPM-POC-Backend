//CORE_REFERENCE_IMPORTS
//CORE_REFERENCE_IMPORT-empdetails_service-SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N
import { empdetails_service as SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N } from './sd-services/employee_management/empdetails_service';
//CORE_REFERENCE_IMPORT-empdetails_api-SSD_SERVICE_ID_sd_IlIGliEjUF0028UK
import { empdetails_api as SSD_SERVICE_ID_sd_IlIGliEjUF0028UK } from './sd-services/employee_management/empdetails_api';
//CORE_REFERENCE_IMPORT-login_service-SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp
import { login_service as SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp } from './sd-services/employee_management/login_service';
//CORE_REFERENCE_IMPORT-login_api-SSD_SERVICE_ID_sd_hCrAwWhk2zXGwudf
import { login_api as SSD_SERVICE_ID_sd_hCrAwWhk2zXGwudf } from './sd-services/employee_management/login_api';
//CORE_REFERENCE_IMPORT-signup_service-SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR
import { signup_service as SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR } from './sd-services/employee_management/signup_service';
//CORE_REFERENCE_IMPORT-signup_api-SSD_SERVICE_ID_sd_TnUnoK1LYch8f3UJ
import { signup_api as SSD_SERVICE_ID_sd_TnUnoK1LYch8f3UJ } from './sd-services/employee_management/signup_api';
//CORE_REFERENCE_IMPORT-getEmpDetails-SSD_SERVICE_ID_sd_rBvsQy6e2a4KGtyz
import { getEmpDetails as SSD_SERVICE_ID_sd_rBvsQy6e2a4KGtyz } from './sd-services/Employee/getEmpDetails';
//CORE_REFERENCE_IMPORT-idsutil-sd_9pBMALo7q29aLFtK
import { idsutil as sd_9pBMALo7q29aLFtK } from './sd-services/idsutil';
//CORE_REFERENCE_IMPORT-ids-sd_B9EfxZzsjNpJ1o0x
import { ids as sd_B9EfxZzsjNpJ1o0x } from './sd-services/ids';
//CORE_REFERENCE_IMPORT-emplogin-SSD_SERVICE_ID_sd_6QKdJWdJegQSKVSe
import { emplogin as SSD_SERVICE_ID_sd_6QKdJWdJegQSKVSe } from './sd-services/Employee/emplogin';
//CORE_REFERENCE_IMPORT-signupApi-SSD_SERVICE_ID_sd_Hn9aN6rVC83XMSDC
import { signupApi as SSD_SERVICE_ID_sd_Hn9aN6rVC83XMSDC } from './sd-services/Employee/signupApi';
//CORE_REFERENCE_IMPORT-userMiddleware-SSD_SERVICE_ID_sd_v3mVO0JaJLZqsHkw
import { userMiddleware as SSD_SERVICE_ID_sd_v3mVO0JaJLZqsHkw } from './sd-services/customMiddlewares/userMiddleware';
//CORE_REFERENCE_IMPORT-postEmpDetails-SSD_SERVICE_ID_sd_LmlvGFCGMP6BdEis
import { postEmpDetails as SSD_SERVICE_ID_sd_LmlvGFCGMP6BdEis } from './sd-services/Employee/postEmpDetails';
//CORE_REFERENCE_IMPORT-searchUsers-SSD_SERVICE_ID_sd_dwyiljmWFYiRi790
import { searchUsers as SSD_SERVICE_ID_sd_dwyiljmWFYiRi790 } from './sd-services/Users/searchUsers';
//CORE_REFERENCE_IMPORT-getUsers-SSD_SERVICE_ID_sd_1TIlpy6cQrTUoNSJ
import { getUsers as SSD_SERVICE_ID_sd_1TIlpy6cQrTUoNSJ } from './sd-services/Users/getUsers';

export const UserRoutes = [
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-empdetails_service-SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N
SSD_SERVICE_ID_sd_lN8kCZZyfWH1xO2N,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-empdetails_api-SSD_SERVICE_ID_sd_IlIGliEjUF0028UK
SSD_SERVICE_ID_sd_IlIGliEjUF0028UK,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-login_service-SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp
SSD_SERVICE_ID_sd_8h7sP6xWW17scMxp,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-login_api-SSD_SERVICE_ID_sd_hCrAwWhk2zXGwudf
SSD_SERVICE_ID_sd_hCrAwWhk2zXGwudf,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-signup_service-SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR
SSD_SERVICE_ID_sd_S67iB9b0j4vD6frR,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-signup_api-SSD_SERVICE_ID_sd_TnUnoK1LYch8f3UJ
SSD_SERVICE_ID_sd_TnUnoK1LYch8f3UJ,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-getEmpDetails-SSD_SERVICE_ID_sd_rBvsQy6e2a4KGtyz
SSD_SERVICE_ID_sd_rBvsQy6e2a4KGtyz,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-idsutil-sd_9pBMALo7q29aLFtK
sd_9pBMALo7q29aLFtK,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-ids-sd_B9EfxZzsjNpJ1o0x
sd_B9EfxZzsjNpJ1o0x,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-emplogin-SSD_SERVICE_ID_sd_6QKdJWdJegQSKVSe
SSD_SERVICE_ID_sd_6QKdJWdJegQSKVSe,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-signupApi-SSD_SERVICE_ID_sd_Hn9aN6rVC83XMSDC
SSD_SERVICE_ID_sd_Hn9aN6rVC83XMSDC,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-userMiddleware-SSD_SERVICE_ID_sd_v3mVO0JaJLZqsHkw
SSD_SERVICE_ID_sd_v3mVO0JaJLZqsHkw,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-postEmpDetails-SSD_SERVICE_ID_sd_LmlvGFCGMP6BdEis
SSD_SERVICE_ID_sd_LmlvGFCGMP6BdEis,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-searchUsers-SSD_SERVICE_ID_sd_dwyiljmWFYiRi790
SSD_SERVICE_ID_sd_dwyiljmWFYiRi790,
//CORE_REFERENCE_PUSH_TO_ROUTE_ARRAY-getUsers-SSD_SERVICE_ID_sd_1TIlpy6cQrTUoNSJ
SSD_SERVICE_ID_sd_1TIlpy6cQrTUoNSJ,
];
