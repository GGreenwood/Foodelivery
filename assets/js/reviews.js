function submit() {
    text = $("#text").val();
    data = {
        review: text,
        score: rating
    };

    io.socket.post("/review", data, function(response) {
        console.log(response);
        window.location = "reviewlist";
    });
}

rating = 0;

function displayUpTo(rating) {
    divs = $(".star").splice(0, rating);
    $.each(divs, function(index, element) {
        element.innerHTML = "star_rate";
    });
    divs = $(".star").splice(rating, 5);
    $.each(divs, function(index, element) {
        element.innerHTML = "stars";
    });
}

function showStar(div) {
    star = parseInt(div.getAttribute("star"));
    displayUpTo(star);
}

function setStar(div) {
    rating = parseInt(div.getAttribute("star"));
}

function resetStar(div) {
    displayUpTo(rating);
}
