// Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllSpainClients = async()=>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data =await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        dataUpdate.push({
            nombre : val.client_name,
            pais : val.country
        })
    })
    return dataUpdate;
}

// Devuelve un listado con el código de cliente de aquellos clientes que realizaron algún pago en 2008. Tenga en cuenta que deberá eliminar aquellos códigos de cliente que aparezcan repetidos. Resuelva la consulta:

// Utilizando la función YEAR de MySQL.
// Utilizando la función DATE_FORMAT de MySQL.
// Sin utilizar ninguna de las funciones anteriores.


