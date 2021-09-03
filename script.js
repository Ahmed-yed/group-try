//var color=["red","green","teal",true,33,22];//

//console.log(color)//

// lenght//
//push//
//shift//






//var color1=["red","green","teal",true,33,22];
//var color2=["red","green"]
//console.log(color1.splice(2));


//var color1=["red","green","teal",true,33,22];
//var color2=["red","green"]
//console.log(color1.slice(0,2));//


var productName = document.getElementById("productNameInp");
var productPriceInp = document.getElementById("productPriceInp");
var productCatgeoryInp = document.getElementById("productCatgeoryInp");
var productDescInp = document.getElementById("productDescInp");

var productContainer;

if (localStorage.getItem("list") == null) {
    productContainer = [];
}
else {
    productContainer = JSON.parse(localStorage.getItem("list"))
    displayProduct()
}

function addProduct() {
    var product = {
        name: productName.value,
        price: productPriceInp.value,
        category: productCatgeoryInp.value,
        desc: productDescInp.value


    }
    productContainer.push(product);
    localStorage.setItem("list", JSON.stringify(productContainer))
    //clearform()//

    displayProduct();
    console.log(productContainer)
}


function clearform() {
    productName.value = "";
    productPriceInp.value = "";
    productCatgeoryInp.value = "";
    productDescInp.value = "";
}
// console.log();



function displayProduct() {
    var cartoona = ``;

    for (var i = 0; productContainer.lenght; i++) {
        cartoona += ` <tr>
     <td>`+ i + `</td>
     <td>`+ productContainer[i].name + `</td>
     <td>`+ productContainer[i].productPriceInp + `</td>
     <td>`+ productContainer[i].productCatgeoryInp + `</td>
     <td>`+ productContainer[i].productDescInp + `</td>
     <td><button class="btn btn-outline-warning">Update</button></td>
     <td><button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button></td> </tr>`;





    }
    document.getElementById("Table1").innerHTML = cartoona


}
function deleteProduct(index) {

    productContainer.splice(index, 1);
    localStorage.setItem("list", JSON.stringify(productContainer))
    displayProduct();
}
function search(char) {
    var cartoona = ``;
    for (var i = 0; i < productContainer.lenght; i++) {
        if (productContainer[i].name.toLowerCase().includes(char.toLowerCase() == true ||
            productContainer[i].category.toLowerCase().includes(char.toLowerCase() == true))) {
            cartoona += ` <tr>
        <td>`+ i + `</td>
        <td>`+ productContainer[i].name + `</td>
        <td>`+ productContainer[i].productPriceInp + `</td>
        <td>`+ productContainer[i].productCatgeoryInp + `</td>
        <td>`+ productContainer[i].productDescInp + `</td>
        <td><button class="btn btn-outline-warning">Update</button></td>
        <td><button onclick="deleteProduct(`+ i + `)" class="btn btn-outline-danger">Delete</button></td> </tr>`
        }
        else {
            console.log("no data")
        }
    }

}

    
