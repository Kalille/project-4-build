class Comment < ApplicationRecord
    belongs_to :user
    belongs_to :comic
    validates :description, presence: true, length: {maximum: 500}
    before_save :format_title

    def format_title
        if self.description[0] != self.description[0].upcase
           self.description = self.description.capitalize
        end
    end

end
