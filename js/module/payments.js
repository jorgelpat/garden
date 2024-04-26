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

// export const getAll2008Payments = async() => {
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

export const getAll2008Payments = async (year) => {
    let res = await fetch("http://localhost:5505/payments?payment=PayPal")
    let data = await res.json();
    let dataUpdate = [];
    let filtreCode = new Set();
    data.forEach(val => {
        if (val.date_payment?.split('-')[0] == year && !filtreCode.has(val.code_client)) {
            filtreCode.add(val.code_client)
            dataUpdate.push({
                code_client: val.code_client,
                total: val.total
            })
        }
    })
    dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate.sort((a, b) => b-a)
}