class PostUserSerializer < ActiveModel::Serializer
    attributes :username, :phone_number
end