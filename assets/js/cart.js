$(document).ready(function() {
    id = getId();
    io.socket.get("/cartItem", function(data) {
        cartDiv = $("#cart");
        console.log(data);
        total = 0;
        for(var i = 0; i < data.length; i++) {
            item = data[i];
            cartDiv.append(newItem(item));
            total = total + (item.quantity * item.item.price);
        }
        $("#grandtotal h4").text(formatPrice(total + 1.2));
    });
});

function newItem(item) {
    return '<div class="row">' +
                        '<div class="col s6 "><a class="waves-effect waves-light btn-large">' + item.item.name + '</a></div>' +
                        '<div class="input-field col s2">' +
                            '<input quantityeggroll="quantityeggroll" id="eggroll" type="text" class="validate">' +
                            '<label class="" for="eggroll">' + item.quantity + '</label></div>' +
                        '<div class="col s2 vertical-align: text-bottom;"><h4>' + formatPrice(item.item.price * item.quantity) + '</h4></div>' +
                    '</div>';
}

function formatPrice(price) {
    return '$' + parseFloat(price).toFixed(2);
}
