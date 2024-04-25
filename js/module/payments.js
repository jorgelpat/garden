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

export const getAll2008Payments = async() => {
    let res = await fetch("http://localhost:5505/requests")
    let data = await res.json()
    let dataUpdate =[]
    data.filter(val=>{
        if(val.date_payment.includes("2008")){
            dataUpdate.push({
                code: val.code_client
            })
        }
    })
    return dataUpdate;
}


// In construction