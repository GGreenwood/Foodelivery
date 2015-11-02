function Restaurants(rest_list) {
    this.restaurants = [];
    this.rest_list = rest_list;
    this.add = function(data) {
        this.restaurants[data.id] = new Restaurant(data);
        this.restaurants[data.id].append(rest_list);
    }
    this.get = function(id) {
        return this.restaurants[id];
    }
    this.show = function(id) {
        this.restaurants[id].show();
    }
    this.hide = function(id) {
        this.restaurants[id].hide();
    }
    this.show_all = function() {
        this.restaurants.forEach(function(restaurant, i) {
            restaurant.show();
        });
    }
    this.hide_all = function() {
        this.restaurants.forEach(function(restaurant, i) {
            restaurant.hide();
        });
    }
    this.search = function(text) {
        if(text.length > 0) {
            this.restaurants.forEach(function(restaurant, i) {
                if(restaurant.match(text)) {
                    restaurant.show();
                } else {
                    restaurant.hide();
                }
            });
        } else {
            this.show_all();
        }
    }
}

function Restaurant(data) {
    this.name = data.name;
    this.description = data.description;
    this.image = data.image;
    this.id = data.id;

    this.div_cache = undefined;
    this.get_div = function() {
        if(this.div_cache == undefined) {
            this.div_cache = $("div[rest_id='" + this.id + "']");
        }
        return this.div_cache;
    }
    this.append = function(restaurant_list) {
        restaurant_list.append('<div class="col s4" rest_id=' + this.id + '>' + 
                '<div class="card small hoverable">' + 
                '<div class="card-image">' +
                '<img src="' + this.image + '">' +
                '<span class="card-title">' + this.name + '</span>' +
                '</div>' + 
                '<div class="card-content">' + 
                '<p>' + this.description + '</p>' +
                '</div>' +
                '<div class="card-action">' + 
                '<a href="custerwok.html">Menu</a>' +
                '</div>' +
                '</div>' + 
                '</div>'
                );
        return this;
    }
    this.hide = function() {
        this.get_div().hide();
    }
    this.show = function() {
        this.get_div().show();
    }
    this.match = function(query) {
        return this.name.toLowerCase().search(query.toLowerCase()) >= 0;
    }
}

var restaurants;

$(document).ready(function() {
    var rest_list = $("#rest_list");
    restaurants = new Restaurants(rest_list);
    $.getJSON("/api/Restaurants", function(data) {
        data.forEach(function(restaurant, i) {
            restaurants.add(restaurant);
        });
    });

    var search_div = $("#search")[0];
    search_div.addEventListener("input", function() {
        var text = search_div.value;
        restaurants.search(text);
    });

    var login_div = $("#navbar-login")[0];
    var login_container = $("#login_container");
    var is_logging_in = false;
    login_div.addEventListener("click", function() {
        if(is_logging_in) {
            restaurants.show_all();
            login_container.hide();
            is_logging_in = false;
        } else {
            restaurants.hide_all();
            login_container.show();
            is_logging_in = true;
        }
    });

    var login_button = $("#login_button")[0];
    login_button.addEventListener("click", function() {
        restaurants.show_all();
        login_container.hide();
        is_logging_in = false;
    });
});
