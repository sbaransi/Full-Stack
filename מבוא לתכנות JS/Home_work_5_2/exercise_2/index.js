const productObject ={
    product_name:"",
    product_price:"",
    product_id : "",
    product_creat_date:"",
    
    };

function objectFunction () {

    productObject.product_name=Prompt("Please Enter prouct name");
    productObject.product_price=+Prompt("Please Enter prouct price");
    productObject.product_id=+Prompt("Please Enter prouct id");
    productObject.product_creat_date=Prompt("Please Enter prouct name");
    console.log(productObject);
}


objectFunction();