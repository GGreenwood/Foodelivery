var id;
$(document).ready(function() {
    var parameters = document.URL.split('/');
    id = parameters[parameters.length-1];
    $("#cart-button")[0].href = "/cart/" + id;
});
