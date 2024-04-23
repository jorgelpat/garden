import fs from 'node:fs';

fs.readFile(import.meta.dirname+"db/product.json", "utf8",(err,data) => {
    console.log(JSON.parse(data));
    let [product1] = json.products
    let {description:des, gama:Herramientas} = product1;
    console.log(product1);
})

