class FavoritePostSerializer < ActiveModel::Serializer
    attributes :id, :name, :image_url, :description
  
    has_one :tag
  end