class FavoriteSerializer < ActiveModel::Serializer
  attributes :id
  has_one :post
  has_one :user
end
