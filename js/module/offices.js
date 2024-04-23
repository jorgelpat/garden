//Devuelve un listado con el código de oficina y la ciudad donde hay oficinas.

export const getAllOfficesCodeAndCity = async ()=>{
    let res = await fetch("http://localhost:5504/offices");
    let data = await res.json();
    let dataUpdate = {};
    data.forEach(val => {
        dataUpdate.push({
            codigo: val.code_office,
            ciudad: val.city
        })
    })
    return dataUpdate;
}


// Devuelve un listado con la ciudad y teléfono de las oficinas de España
export const getAllOficesFromSpainCityAndMovil = async() =>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val =>{
        dataUpdate.push({
            id: val.id,
            ciudad: val.city,
            telefono: val.movil
        })
    })

    return data;
}