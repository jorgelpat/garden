// Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

// Utilizando la función YEAR de MySQL.
// Utilizando la función DATE_FORMAT de MySQL.
// Sin utilizar ninguna de las funciones anteriores.


// export const getAll = async() =>{
//     let res = await fetch("http://localhost:5505/payments")
//     let data = await res.json();
//     let dataUpdate = [];
//     let fecha = new Date();
    
// }

// export const getAllPaymentsbyYear = async() => {
//     let res = await fetch("http://localhost:5505/requests")
//     let data = await res.json()
//     let dataUpdate =[]
//     data.filter(val=>{
//         if(val.date_payment.includes("2008")){
//             dataUpdate.push({
//                 code: val.code_client
//             })
//         }
//     })
//     return dataUpdate;
// }
// In construction

export const getAllPaymentsbyYear = async (year) => {
    let res = await fetch("http://localhost:5505/payments")
    let data = await res.json();
    let dataUpdate = [];
    let filtreCode = new Set();
    data.forEach(val => {
        if (val.date_payment?.split('-')[0] == year && !filtreCode.has(val.code_client)) {
            filtreCode.add(val.code_client)
            dataUpdate.push({
                code_client: val.code_client,
                total: val.total,
                year: val.date_payment
            })
        }
    })
    //dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate
}

// Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPymentType = async (year) => {
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        if (val.date_payment?.split('-')[0] == year) {
            dataUpdate.push({
                code_client: val.code_client,
                total: val.total,
                year: val.date_payment,
                tipo_de_pago: val.payment
            })
        }
    })
    return dataUpdate.sort((a, b) => b-a)
}

// Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.

export const getAllPayment = async()=>{
    let res = await fetch("http://localhost:5505/payments")
    let data =await res.json();
    let dataUpdate = new Set(); //Se garantiza que no hayan datos duplicados
    data.forEach(val =>{
        // let {payment} = val
        dataUpdate.add(val.payment)
    })
    return dataUpdate;
}

export const getPaymentByClientCode = async (clientCode) => {
    let res = await fetch(`http://localhost:5505/payments?code_client=${clientCode}`);
    let data = await res.json();
    return data;
}