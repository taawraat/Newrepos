function addToCart(id,tax){
    const priceStr = document.getElementById(id).getElementsByTagName('h4')[0].innerHTML
    const quantityStr = document.getElementById(id).getElementsByTagName('input')[0].value
    const priceInt = parseInt(priceStr.substring(1));
    const quantityInt = parseInt(quantityStr);
    
    const currTotal = parseInt(document.getElementById("total-prod").innerHTML) + quantityInt;

    document.getElementById("total-prod").innerHTML = currTotal;

    const currPrice = parseInt(document.getElementById("total-price").innerHTML.slice(0, -1)) + (quantityInt * priceInt);
    console.log(id)
    
    document.getElementById("total-price").innerHTML = currPrice + '$'

    const currDeliveryCost = parseInt(document.getElementById("delivery-cost").innerHTML.slice(0, -1));
    const currShippingCost = parseInt(document.getElementById("shipping-cost").innerHTML.slice(0, -1));

    if(currDeliveryCost === 0)
        document.getElementById("delivery-cost").innerHTML = "10$"

    if(currShippingCost === 0)
        document.getElementById("shipping-cost").innerHTML = "99$"
    
    const taxVal = parseInt(document.getElementById("tax").innerHTML.slice(0, -1)) + parseInt(tax);

    document.getElementById('tax').innerHTML = taxVal + '$';

    const currIntotal = currPrice + taxVal + parseInt("10") + parseInt("99")

    document.getElementById("intotal").innerHTML = currIntotal + '$'
}

function clearAll(){
    document.getElementById("total-prod").innerHTML = 0;
    document.getElementById("total-price").innerHTML = "0$";
    document.getElementById("delivery-cost").innerHTML = "0$";
    document.getElementById("shipping-cost").innerHTML = "0$";
    document.getElementById('tax').innerHTML = '0$';
    document.getElementById("intotal").innerHTML = "0$";
}