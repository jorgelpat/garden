import { getEmployByCode } from "./employees.js";
import { getOfficesByCode } from "./offices.js";
import { getPaymentByClientCode } from "./payments.js";


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


// Consultas multitabla (Composición interna)
//1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
export const getClientsAndEmployeesNames = async() =>{
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1:address1Client,
            address2:address2Client,
            city,
            region:regionClients,
            country:countryClients,
            postal_code:postal_codeClients,
            limit_credit,
            id:idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id:idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country:countryOffice,
            region:regionOffice,
            postal_code:postal_codeOffice,
            movil,
            address1:address1Office,
            address2:address2Office,
            id:idOffice,
            ...officeUpdate
        } = office


        let data = {...clientsUpdate, ...employUpdate, ...officeUpdate};
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate       
        }=data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    // [
    //     {
    //         city: "San Francisco"
    //         client_name : "GoldFish Garden"
    //         name_employee: "Walter Santiago Sanchez Lopez"
    //     }
    // ]
    return clients;
}





//2. Muestra el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getClientsWhoMadePayment = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client == clientsUpdate.client_code) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients
}

//3. Muestra el nombre de los clientes que **no** hayan realizado pagos junto con el nombre de sus representantes de ventas.
export const getClientsNoPayment = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_office,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client != clientsUpdate.client_code) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients
}

//4.Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con 
//la ciudad de la oficina a la que pertenece el representante.
export const getClientsWhoMadePaymentsCityAndEmployees = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office

        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            code_office,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client == clientsUpdate.client_code && officeUpdate.code_office == employUpdate.code_office) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients
}

//5.  Devuelve el nombre de los clientes que **no** hayan hecho pagos y 
//el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsWhoDidntMadePaymentsAndTheyCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office

        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            code_office,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client != clientsUpdate.client_code && officeUpdate.code_office == employUpdate.code_office) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients

}
// 7. Devuelve el nombre de los clientes y el nombre de sus representantes 
// junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsEmploy = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            city,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id: idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office


        let data = { ...clientsUpdate, ...employUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate
        } = data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        clients[i] = dataUpdate
    }
    return clients;
}


//5.  Devuelve el nombre de los clientes que **no** hayan hecho pagos y 
//el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante.
export const getClientsWhoHaventMadePaymentsAndTheyCity = async () => {
    let res = await fetch("http://localhost:5501/clients");
    let clients = await res.json();

    for (let i = 0; i < clients.length; i++) {
        let {
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1,
            address2,
            city,
            region,
            country,
            postal_code,
            limit_credit,
            id,
            ...clientsUpdate
        } = clients[i];
        let [payments] = await getPaymentByClientCode(clientsUpdate.client_code)
        if (payments) {
            var {
                payment,
                id_transaction,
                date_payment,
                total,
                id: idPayments,
                ...paymentsUpdate
            } = payments
        }
        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            name,
            lastname1,
            lastname2,
            employee_code,
            extension,
            email,
            code_boss,
            position,
            id: idEmployee,
            ...employUpdate
        } = employ
        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            ...officeUpdate
        } = office

        let data = { ...clientsUpdate, ...employUpdate, ...paymentsUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            client_code,
            code_client,
            code_office,
            ...dataUpdate
        } = data;
        if (paymentsUpdate.code_client != clientsUpdate.client_code && officeUpdate.code_office == employUpdate.code_office) {
            dataUpdate.name_employee = `${employ.name} `
            dataUpdate.lastnames_employee = `${employ.lastname1} ${employ.lastname2}`
            clients[i] = dataUpdate
        }
    }
    clients = clients.filter(client => client.name_employee && client.lastnames_employee);
    return clients

}


//6.Lista la dirección de las oficinas que tengan clientes en `Fuenlabrada`.
export const getOfficeAddressOfClientsFromFuenlabrada = async () => {
    let res = await fetch(`http://localhost:5501/clients?city=Fuenlabrada`)
    let clients = await res.json()
    for (let i = 0; i < clients.length; i++) {
        let {
            client_code,
            contact_name,
            contact_lastname,
            phone,
            fax,
            address1: address1Client,
            address2: address2Client,
            region: regionClients,
            country: countryClients,
            postal_code: postal_codeClients,
            limit_credit,
            id: idClients,
            ...clientsUpdate
        } = clients[i];

        let [employ] = await getEmployByCode(clientsUpdate.code_employee_sales_manager)
        let {
            extension,
            email,
            code_boss,
            position,
            id: idEmploy,
            name,
            lastname1,
            lastname2,
            employee_code,
            ...employUpdate
        } = employ

        let [office] = await getOfficesByCode(employUpdate.code_office)

        let {
            country: countryOffice,
            region: regionOffice,
            postal_code: postal_codeOffice,
            movil,
            address1: address1Office,
            address2: address2Office,
            id: idOffice,
            city,
            ...officeUpdate
        } = office


        let data = { ...clientsUpdate, ...employUpdate, ...officeUpdate };
        let {
            code_employee_sales_manager,
            code_office,
            ...dataUpdate
        } = data;

        dataUpdate.name_employee = `${name} ${lastname1} ${lastname2}`
        dataUpdate.address1 = `${address1Office}`
        dataUpdate.address2 = `${address2Office}`
        clients[i] = dataUpdate
    }
    return clients;
}