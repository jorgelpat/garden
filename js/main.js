import {getAllOfficesCodeAndCity,getAllOficesFromSpainCityAndMovil}from "./module/offices.js"
import {getAllEmployeesWithBossAndCodeSeven,getBossFullNameAndEmail,
    getAllFullNameNoSale} from "./module/employees.js";
import {getAllSpainClients,getAllMadridClients,getClientsAndEmployeesNames,
    getClientsWhoMadePayment, getClientsNoPayment, 
    getClientsWhoMadePaymentsCityAndEmployees,getClientsWhoHaventMadePaymentsAndTheyCity,
    getOfficeAddressOfClientsFromFuenlabrada} from "./module/clients.js";
import {getAllStatusRequest,getAllLateOrder,getAllRequestTwoDaysBefore,
    getAllRejectedOrder,getAllOrdersDeliveredInJanuary} from "./module/requests.js";
import {getAllPaymentsbyYear,getAllPymentType,getAllPayment} from "./module/payments.js";
import {getAllGammaOrnamentalesProduct} from "./module/products.js"


// ----------------Consulta sobre una tabla--------------------------
// console.log(await getAllOfficesCodeAndCity());                   // 1 
// console.log(await getAllOficesFromSpainCityAndMovil());          // 2
// console.log(await getAllEmployeesWithBossAndCodeSeven());        // 3
// console.log(await getBossFullNameAndEmail());                    // 4
// console.log(await getAllFullNameNoSale());                       // 5
// console.log(await getAllSpainClients());                         // 6
// console.log(await getAllStatusRequest());                        // 7
// console.log(await getAllPaymentsbyYear(2008));                   // 8
// console.log(await getAllLateOrder());                            // 9
// console.log(await getAllRequestTwoDaysBefore());                 // 10
// console.log(await getAllRejectedOrder(2009));                    // 11
// console.log(await getAllOrdersDeliveredInJanuary());             // 12
// console.log(await getAllPymentType(2008));                       // 13
console.log(await getAllPayment());                              // 14
// console.log(await getAllGammaOrnamentalesProduct());             // 15
// console.log(await getAllMadridClients());                        // 16


// ----------------CONSULTA MULTITABLA "COMPOSICION INTERNA"----------------------
// console.log(await getClientsAndEmployeesNames());                // 1
// console.log(await getClientsWhoMadePayment());                   // 2
// console.log(await getClientsNoPayment());                        // 3
// console.log(await getClientsWhoMadePaymentsCityAndEmployees());  // 4
// console.log(await getClientsWhoHaventMadePaymentsAndTheyCity()); // 5








