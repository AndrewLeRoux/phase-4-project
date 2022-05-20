# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# tags for seeding

User.create( username: "aleroux", password: "password", image_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png", phone_number: "941-786-8416")
User.create( username: "andrew", password: "password", image_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png", phone_number: "555-555-5555")
User.create( username: "john", password: "password", image_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png", phone_number: "111-111-1111")
User.create( username: "chris", password: "password", image_url: "https://upload.wikimedia.org/wikipedia/en/4/4d/Shrek_%28character%29.png", phone_number: "123-456-7890")

Tag.create( name: "activities")
Tag.create( name: "events")
Tag.create( name: "pets")
Tag.create( name: "automotive")
Tag.create( name: "cellphone")
Tag.create( name: "computer")
Tag.create( name: "financial")
Tag.create( name: "labor")
Tag.create( name: "house rentals")
Tag.create( name: "appliances")
Tag.create( name: "beauty and health")
Tag.create( name: "boats")
Tag.create( name: "books")
Tag.create( name: "clothing")
Tag.create( name: "electronics")
Tag.create( name: "furniture")
Tag.create( name: "jewelry")
Tag.create( name: "musical instruments")
Tag.create( name: "sports")
Tag.create( name: "games")
Tag.create( name: "video games")
Tag.create( name: "jobs")



Post.create( name: "chair for sale", image_url: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s", description: "really nice chair!", user_id: 1, tag_id: 16)
Post.create( name: "couch for sale", image_url: "https://cdn-images.article.com/products/SKU25A/2890x1500/image74669.jpg?fit=max&w=1536&q=60&fm=webp", description: "really nice couch!", user_id: 1, tag_id: 16)
Post.create( name: "earings for sale", image_url: "https://image.brilliantearth.com/media/product_images/WA/BE3LBT60_white_top.jpg", description: "beautiful earings!", user_id: 1, tag_id: 17)
Post.create( name: "guitar for sale", image_url: "https://m.media-amazon.com/images/I/6104PlqCAdL._AC_SX679_.jpg", description: "plays great!", user_id: 2, tag_id: 18)
Post.create( name: "football for sale", image_url: "https://images-na.ssl-images-amazon.com/images/I/81Q7Gt6RInL.__AC_SY300_SX300_QL70_FMwebp_.jpg", description: "barely any use. contact for more details", user_id: 2, tag_id: 19)
Post.create( name: "play station 4 for sale", image_url: "https://media.gamestop.com/i/gamestop/10114375/Sony-PlayStation-4-500GB-Console-Black?$pdp2x$$&fmt=webp", description: "working and in great condition!", user_id: 2, tag_id: 20)
