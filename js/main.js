import {getAllOfficesCodeAndCity,getAllOficesFromSpainCityAndMovil}from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven,getBossFullNameAndEmail,getAllFullNameNoSale} from "./module/employees.js";
import {getAllSpainClients,getAllMadridClients} from "./module/clients.js";
import {getAllStatus,getAllLateOrder,getAllRequestTwoDaysBefore,getAllRejectedOrder,getAllOrdersDeliveredInJanuary} from "./module/requests.js";
import {getAllPaymentsbyYear,getAllPymentType,getAllPayment} from "./module/payments.js";
import {getAllGammaOrnamentalesProduct} from "./module/products.js"


console.log(await getAllMadridClients());