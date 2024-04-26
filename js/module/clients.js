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

// Devuelve un listado con todos los clientes que sean de la ciudad de Madrid y cuyo representante de ventas tenga el código de empleado 11 o 30.

export const getAllMadridClients = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data =await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        if (val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30){
            dataUpdate.push({
                Nombre : val.client_name,
                Ciudad : val.city,
                Representante_de_Ventas: val.code_employee_sales_manager
            })
        }  
    })
    return dataUpdate;
}


