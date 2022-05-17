class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :image_url, :phone_number, :favorited_posts
    
    has_many :posts
  end