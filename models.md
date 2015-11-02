User
* id
* name
* email
* password
* reviews(Review)
* cartItems(CartItem)

Restaurant
* id
* name
* price
* desc
* location
* image
* items(Item)
* reviews(Review)

Item
* id
* name
* image
* price
* desc
* restaurant(Restaurant.id)

Review
* id
* score
* title
* text
* date
* author(User.id)
* restaurant(Restaurant.id)

CartItem
* id
* quantity
* user(User.id)
* item(Item.id)
