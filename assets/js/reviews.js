function submit() {
    text = $("#text").val();
    io.socket.post("/review", {review: text}, function(response) {
        console.log(response);
        window.location = "reviewlist";
    });
}
