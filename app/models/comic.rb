class Comic < ApplicationRecord
    validates :name, presence: true
    validates :image, presence: true
    validates :count_of_issues, presence: true
    validates :issue_number, presence: true
    validates :publisher, presence: true
    validates :release_year, presence: true
    belongs_to :creator, class_name: 'User', foreign_key: :creator_id
    has_many :comments
    has_many :users, through: :comments
 
end
