$(document).ready(function() {
    id = getId();
    io.socket.get("/restaurant/" + id, function(data) {
        console.log(data);
        newItem(data.items[0]);
    });

    $('.foodcarousel').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });
});

function newItem(item) {
    mainDiv = document.createElement('div');
    $(mainDiv).addClass("row center");
    console.log(mainDiv);
}
