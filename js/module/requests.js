//Devuelve un listado con los distintos estados por los que puede pasar un pedido.


export const getAllStatusRequest = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = new Set(); //Se garantiza que no hayan datos duplicados
    data.forEach(val =>{
        // let {status} = val
        dataUpdate.add(val.status)

    })
    // dataUpdate = [... new Set(dataUpdate)]
    return dataUpdate;
}


// Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllLateOrder = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let dateWait = new Date(val.date_wait);
        let dateDelivery = new Date(val.date_delivery);
        if (dateDelivery > dateWait) {
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Codigo_cliente: val.code_client,
                Fecha_esperada: val.date_wait,
                Fecha_entregada: val.date_delivery,
            })
        }
    })
    return dataUpdate;
}

// Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

//     Utilizando la función ADDDATE de MySQL.
//     Utilizando la función DATEDIFF de MySQL.
//     ¿Sería posible resolver esta consulta utilizando el operador de suma + o resta -?


export const getAllRequestTwoDaysBefore = async () => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let dateWait = new Date(val.date_wait);
        let dateDelivery = new Date(val.date_delivery)
        let diferenciaMilisegundos = dateWait - dateDelivery;  //Se calcula la diferencia en milisegundos
        let diferenciaDias = diferenciaMilisegundos/(1000*60*60*24);  //Se convierte los milisegundos en dias
        if (diferenciaDias >= 2) {
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Codigo_cliente: val.code_client,
                Fecha_esperada: val.date_wait,
                Fecha_entregada: val.date_delivery,
            })
        }
    })
    return dataUpdate;
}


// Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

export const getAllRejectedOrder = async(year) => {
    let res = await fetch("http://localhost:5508/requests?status=Rechazado");
    let data = await res.json();
    //let fecha = new Date(year)
    let dataUpdate = [];
    data.forEach(val => {
        if (val.status == "Rechazado" && val.date_request.split("-")[0] == year){   //val.date_request == fecha // val.date_request.split("-")[0] // .getFullYear()
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Fecha_pedido: val.date_request,
                Fecha_esperada: val.date_wait,
                Comentario: val.comment,
                Codigo_cliente: val.code_client,
            })
        }
    })
    return dataUpdate
}

// Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.

export const getAllOrdersDeliveredInJanuary = async() => {
    let res = await fetch("http://localhost:5508/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        if (val.date_request.split("-")[1] == "01"){
            dataUpdate.push({
                Codigo_pedido: val.code_request,
                Fecha_pedido: val.date_request,
                Fecha_esperada: val.date_wait,
                Comentario: val.comment,
                Codigo_cliente: val.code_client
            })
        }
    })
    return dataUpdate;
}

