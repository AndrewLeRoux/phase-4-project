class User < ApplicationRecord
    has_many :posts
    has_many :tags, through: :posts
    has_many :favorites
    has_many favorited_posts, through: :favorites, class_name: "Post"
end
