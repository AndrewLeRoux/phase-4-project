class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :image_url, :phone_number, :favorited_posts, :favorites
    
    has_many :posts
    has_many :favorites
  end