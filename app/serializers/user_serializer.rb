class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :image_url, :bio , :created_comics
end
