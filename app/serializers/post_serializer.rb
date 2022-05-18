class PostSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :description, :tag_id, :user_id
  has_one :user, serializer: PostUserSerializer
  has_one :tag
end
