class UserSerializer < ActiveModel::Serializer
    attributes :id, :username, :image_url, :phone_number

    has_many :posts
  end