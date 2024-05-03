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
queryAboutTable1.addEventListener("click", async(e) => {
    let [, report__container] = queryAboutTable1.children
    if (!report__container.innerHTML) {
        let data = await getAllOfficesCodeAndCity();
        let plantilla = "";
        console.log(data);
        var i = 1;
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
            i += 1;
        });
        report__container.innerHTML = plantilla;
    };
});

const queryAboutTable2 = document.querySelector("#queryAboutTable2");
queryAboutTable2.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable2.children
    if (!report__container.innerHTML) {
        let data = await getAllOficesFromSpainCityAndMovil();
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
                        <p><b>ID: </b>${val.id}</p>
                        <p><b>Ciudad: </b>${val.city}</p>
                        <p><b>Telefono: </b>${val.movil}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})


const queryAboutTable3 = document.querySelector("#queryAboutTable3");
queryAboutTable3.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable3.children
    if (!report__container.innerHTML) {
        let data = await getAllEmployeesWithBossAndCodeSeven();
        let plantilla = "";
        console.log(data);
        var i = 1
        data.forEach(val => {
            //let [email] = val.email.match(/(?<=\[)[^\[\]]+@[^@\[\]]+(?=\])/)
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Email: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
})

const queryAboutTable4 = document.querySelector("#queryAboutTable4");   //Falta solucionar
queryAboutTable4.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable4.children
    if (!report__container.innerHTML) {
        let data = await getBossFullNameAndEmail();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `  
                <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>E-mail: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1;
        });
        report__container.innerHTML = plantilla;
    };
});

const queryAboutTable5 = document.querySelector("#queryAboutTable5");
queryAboutTable5.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable5.children
    if (!report__container.innerHTML) {
        let data = await getAllFullNameNoSale();
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
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Apellidos: </b>${val.apellidos}</p>
                        <p><b>Puesto: </b>${val.puesto}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
});

const queryAboutTable6 = document.querySelector("#queryAboutTable6");
queryAboutTable6.addEventListener("click", async (e) => {
    let [, report__container] = queryAboutTable6.children
    if (!report__container.innerHTML) {
        let data = await getAllSpainClients();
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
                        <p><b>Nombre: </b>${val.nombre}</p>
                        <p><b>Pais: </b>${val.pais}</p>
                    </div>
                </div>
            </div>
            `;
            i += 1
        });
        report__container.innerHTML = plantilla;
    }
});

const queryAboutTable7 = document.querySelector("#queryAboutTable7");   //Falta solucionar
queryAboutTable7.addEventListener("click", async (e) =>{
    let [,report__container] = queryAboutTable7.children;
    if (!report__container.innerHTML) {
        let data = await getAllStatusRequest();
        let plantilla = "";
        console.log(data);
        var i = 1;
        data.forEach(val => {
            plantilla += `
            <div class="report__card">
                <div class="card__title">
                    <div>Reporte ${i}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Estado: </b>${val.status}</p>
                        <p><b>Pais: </b>${val.pais}</p>
                    </div>
                </div>
            </div>
            `;
        })
    }
})