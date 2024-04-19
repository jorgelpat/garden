import {example} from "./component/shopBillCamper.js"
let myBill = document.querySelector("#myBill")
let data = await getAllProductBill();
let row = ""
data.forEach((val,id)=>{
    val.products.forEach(produc=>{
        row += `
            <tr>
                <td>${produc.descript}</td>
                <td>${produc.descript}</td>
                <td>${produc.descript}</td>
                <td>${produc.descript}</td>
            <tr>
            `
    })
})
myBill.innerHTML = row