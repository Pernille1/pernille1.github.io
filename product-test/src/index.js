import {getList} from "./servise.js";
import {productTmpl} from "./template.js";



let productData = [];



const getProductFromList = (productId) => {

    console.log('3. Henter et enkelt product')
    console.log('productData', productData, productId)


    if(productData.length > 0) {
        let product = productData.find( (product) => product.productId = productId )

        console.log(product);

    }else {

        console.log('Ingen product data');


    }

   
    

}

getList('./data/products.json').then( (productList) => {

    console.log('2. Vi arbejder med listen')
    // Får fat i vores element
    let productListElement = document.querySelector('#productList');
    productData = productList;

    /*
        Vi tømmer vores elements indhold.
    */
    // productListElement.innerHTML = '';

    productList.map((prductItem) => {

        productListElement.insertAdjacentHTML('beforeend', productTmpl(prductItem))

    })

    
    getProductFromList('111-000');
})

    
getProductFromList('444-000');