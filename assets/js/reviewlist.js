$(document).ready(function() {
    id = getId();
    if(!parseInt(id))
        id = 9;

    io.socket.get("/restaurant/" + id, function(data) {
        nameDiv = $("#name");
        nameDiv.append(data.name);
        imageDiv = $("#image");
        imageDiv.append('<img src="/images/' + data.image + '">');
    });
    io.socket.get("/review?sort=createdAt+desc&limit=1", function(data) {
        review = data[0];
        starDiv = $("#starrow");
        console.log(review.score);
        for(var i = 0; i < 5; i++) {
            if(review.score <= i) {
                starDiv.append('<i style="color:#cccccc" class="col s2 material-icons">star_rate</i>');
            } else {
                starDiv.append('<i style="color:gold" class="col s2 material-icons">star_rate</i>');
            }
        }
        textDiv = $("#text");
        textDiv.append(review.review);
    });
});
