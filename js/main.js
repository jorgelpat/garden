import {getAllOfficesCodeAndCity,getAllOficesFromSpainCityAndMovil}from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven,getBossFullNameAndEmail,getAllFullNameNoSale} from "./module/employees.js";
import {getAllSpainClients} from "./module/clients.js";
import {getAllStatus} from "./module/requests.js";
import {getAll2008Payments} from "./module/payments.js";


console.log(await getAll2008Payments());