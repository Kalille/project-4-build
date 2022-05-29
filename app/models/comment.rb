class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :comic
    validates :description, presence: true, length: {maximum: 500}

end
