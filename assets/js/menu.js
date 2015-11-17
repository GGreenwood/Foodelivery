$(document).ready(function() {
    id = getId();
    io.socket.get("/restaurant/" + id, function(data) {
        appetizerDiv = $("#appetizers");
        entreeDiv = $("#entrees");
        drinkDiv = $("#drinks");
        carouselDiv = $("#carousel");
        for(var i = 0; i < data.items.length; i++) {
            item = data.items[i];
            if(item.type == 1) {
                appetizerDiv.append(newItem(item));
            } else if(item.type == 2) {
                entreeDiv.append(newItem(item));
            } else if(item.type == 3) {
                drinkDiv.append(newItem(item));
            }

            if(item.image) {
                carouselDiv.append(newImage(item));
            }

        }
        $('.foodcarousel').slick({
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000
        });
    });
});

function newItem(item) {
    return '<div class="row">' + 
        '<div class="col s6 center">' + 
        '<a onclick="addItem(' + item.id + ')" class="waves-effect waves-light btn-large" style="width:100%;">' + item.name + '</a>' + 
        '</div>' +
        '<div class="col s3"><h4>' + formatPrice(item.price) + '</h4></div>' + 
        '<div class="col s3 input-field">' + 
        '<input type="number" id="item' + item.id + '" class="materialize-textarea"></input>' +
        '</div>' +
        '</div>';
}

function newImage(item) {
    return '<div class="image">' + 
        '<img src="/images/' + item.image + '">' + 
        '</div>';
}

function formatPrice(price) {
    return '$' + parseInt(price).toFixed(2);
}

function addItem(id) {
    input = $("#item" + id);
    input.val(function(i, oldval) {
        return ++oldval;
    });
}
