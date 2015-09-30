window.addEventListener('load', function() {
    var count;
    //var countProducts;
    var products;
    var row;
    var quantity;
    products = document.querySelector('.table-main');
    count = products.rows.length;
    //add id for rows
    for(var i = 0; i < count; i++){
        products.rows[i].id = 'item-'+i;
        products.rows[i].cells[4].addEventListener('click', function() {
            row = this.parentNode.id;
            quantity = this.parentNode.cells[2];
        });
    }
    document.querySelector('#writeoff').addEventListener('click', function(){
        var userQuantity = document.querySelector('#recipient').value;
        var different = ((+quantity.innerHTML)-(+userQuantity));
        if(different>=0) {
            quantity.innerHTML = different;
        } else {
            alert ('Запрос превышает количество товара на складе!');
        }
    })
});