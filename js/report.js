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



// import "./components/clock.js";
// import { getClientsEmploy } from "./module/clients.js";
// const queryAboutTable7 = document.querySelector("#queryAboutTable7");
// queryAboutTable7.addEventListener("click", async(e)=>{
//     let [,report__container] = queryAboutTable7.children
//     if(!report__container.innerHTML){
//         let data = await getClientsEmploy();
//         let plantilla = "";
//         console.log(data);
//         data.forEach(val => {
//             plantilla += `
//                 <div class="report__card">
//                 <div class="card__title">
//                     <div>${val.client_name}</div>
//                 </div>
//                 <div class="card__body">
//                     <div class="body__marck">
//                         <p><b>Nombre del empleado: </b>${val.name_employee}</p>
//                         <p><b>Ciudad: </b>${val.city}</p>
//                     </div>
//                 </div>
//             </div>
//             `;
//         });
//         report__container.innerHTML = plantilla;
//     }
// })


const queryAboutTable1 = document.querySelector("#queryAboutTable1");
queryAboutTable1.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable1.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Código: </b>${val.codigo}</p>
                        <p><b>Ciudad: </b>${val.ciudad}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})