class User < ApplicationRecord
    has_secure_password
    
    has_many :posts
    has_many :tags, through: :posts
    has_many :favorites
    has_many :favorited_posts, through: :favorites, source: :post


    validates :username, presence: true, uniqueness: true

end
