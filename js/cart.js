var valueTotal = [0, 0];
var valueProduct = [50.00, 30.00];
var qtd = [0, 0];

function addItem(item) {

    var quantity = document.getElementById('quantity' + item);
    var total = document.getElementById('total' + item);
    qtd[item] += 1;
    valueTotal[item] = Number.parseFloat(valueProduct[item]) * qtd[item];
    quantity.innerHTML = qtd[item];
    total.innerHTML = valueTotal[item].toFixed(2);
    subtotal()

}

function removeItem(item) {
    if (qtd[item] > 0) {
        var quantity = document.getElementById('quantity' + item);
        var total = document.getElementById('total' + item);
        qtd[item] -= 1;
        valueTotal[item] = Number.parseFloat(valueProduct[item]) * qtd[item];
        quantity.innerHTML = qtd[item];
        total.innerHTML = valueTotal[item].toFixed(2);
        subtotal()
    }

}

function subtotal(){
   var total = document.getElementById('valueTotal');
   var value = 0;

   for(var i = 0; i < valueTotal.length; i++){
    value += valueTotal[i];
   }
   
   total.innerHTML = value.toFixed(2);

}