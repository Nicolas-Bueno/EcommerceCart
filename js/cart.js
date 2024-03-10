var valueTotal = [0,0];
var valueProduct = [50.00, 30.00];
var qtd = [0,0];

function addItem(item){

    var quantity = document.getElementById('quantity' + item);
    var total = document.getElementById('total' + item);
    qtd[item] += 1;
    valueTotal[item] = Number.parseFloat(valueProduct[item]) * qtd[item];
    quantity.innerHTML = qtd[item];
    total.innerHTML = valueTotal[item].toFixed(2);

}