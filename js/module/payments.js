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
    let clients2008 = data.filter(request => request.date_payment.startsWith("2008"))
    let dataUpdate = new Set()
    clients2008.forEach(client => {
        let {code_client} = client
        dataUpdate.add(code_client)
    })
    dataUpdate = Array.from(dataUpdate)
    return dataUpdate
}


// In construction