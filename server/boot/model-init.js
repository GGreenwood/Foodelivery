var restaurants = [{
    name: "Wok and Grill",
    price: 1,
    image: "images/wng.jpg",
    description: "It's food!"
}, {
    name: "Custer Wok",
    price: 2,
    image: "images/custerwok.jpg",
    description: "It's also food!"
}, {
    name: "Pizza Hut",
    price: 2,
    image: "images/pizzahut.png",
    description: "Pizza this time"
}, {
    name: "Jimmy Johns",
    price: 3,
    image: "images/jimmy_johns.jpg",
    description: "Sandwiches and such over here"
},  {
    name: "Zenna",
    price: 4,
    image: "images/zenna.png",
    description: "Thai/Japanese fusion delivered"
} 

]

module.exports = function(app) {
    app.dataSources.db.automigrate('Restaurant', function(err) {
        if (err) throw err;

        app.models.Restaurant.create(restaurants, function(err, restaurants) {
            if (err) throw err;

            console.log(restaurants);
        });
    });
};
