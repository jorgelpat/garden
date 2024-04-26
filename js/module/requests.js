//Devuelve un listado con los distintos estados por los que puede pasar un pedido.


export const getAllStatus = async()=>{
    let res = await fetch("http://localhost:5508/requests")
    let data =await res.json();
    let dataUpdate = new Set(); //Se garantiza que no hayan datos duplicados
    data.forEach(val =>{
        let {status} = val
        dataUpdate.add(status)
    })
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
                Codigo_del_pedido: val.code_request,
                Codigo_del_cliente: val.code_client,
                Fecha_de_esperada: val.date_wait,
                Fecha_de_entrega: val.date_delivery,
            })
        }
    })
    return dataUpdate;
}