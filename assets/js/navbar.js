var id;
$(document).ready(function() {
    $("#cart-button")[0].href = "/cart/" + getId();
});

function getId() {
    if(id) {
        return id;
    } else {
        var parameters = document.URL.split('/');
        id = parameters[parameters.length-1];
        return id;
    }
}
