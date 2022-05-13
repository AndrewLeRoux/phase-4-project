class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :phone_number, :pasword_digest
end
