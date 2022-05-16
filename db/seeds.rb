# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# tags for seeding
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



Post.create( name: "chair for sale", image_url: "https://www.ikea.com/us/en/images/products/lerhamn-chair-black-brown-vittaryd-beige__0728160_pe736117_s5.jpg?f=s", description: "really nice chair!", user_id: 1, tag_id: 1)
Post.create( name: "couch for sale", image_url: "https://cdn-images.article.com/products/SKU25A/2890x1500/image74669.jpg?fit=max&w=1536&q=60&fm=webp", description: "really nice couch!", user_id: 1, tag_id: 1)

