class Comic < ApplicationRecord
    belongs_to :creator, class_name: 'User', foreign_key: :creator_id
    has_many :comments
    has_many :users, through: :comments
end
