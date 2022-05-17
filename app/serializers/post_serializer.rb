class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :tag_id
  has_one :user
  has_one :tag
end
