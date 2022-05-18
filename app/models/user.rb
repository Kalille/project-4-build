class User < ApplicationRecord
  # has_many :recipes
  has_many :created_comics, class_name: 'Comic', foreign_key: :creator_id
  has_many :comments
  has_many :commmented_comic, through: :comments, source: :comic 
  

  # has_many :likes, through: comics
  has_secure_password

  validates :username, presence: true, uniqueness: true
end
