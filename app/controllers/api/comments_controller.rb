class Api::CommentsController < ApplicationController
    def index
        render json: Comment.all
      end

    #   def show
    #     comment = Comment.find
    #   end
end
