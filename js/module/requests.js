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