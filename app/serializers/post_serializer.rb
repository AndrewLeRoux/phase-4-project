class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description
  has_one :user
  has_one :tag
end
