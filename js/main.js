import {getAllOfficesCodeAndCity,getAllOficesFromSpainCityAndMovil}from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven,getBossFullNameAndEmail,getAllFullNameNoSale} from "./module/employees.js";
import {getAllSpainClients} from "./module/clients.js";
import {getAllStatus,getAllLateOrder,getAllRequestTwoDaysBefore,getAllRejectedOrder} from "./module/requests.js";
import {getAll2008Payments} from "./module/payments.js";


console.log(await getAllRejectedOrder(2009));