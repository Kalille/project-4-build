class Api::CommentsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
      
        render json: Comment.all
      end

      def create
   
        comment = @current_user.comments.create!(description: params[:description], comic_id: params[:comic][:id])
   
      
        render json: comment, status: :created
     
      end

      def show
        comment = @current_user.comments.find_by(id: params[:id])
        render json: comment

      end

      def update
        comment = @current_user.comments.find_by(id: params[:id])
        comment.update!(comment_params)
        render json: comment

      end


      def destroy
        comment = @current_user.comments.find_by(id: params[:id])
        comment.delete
        head :no_content
      end

      private
      def comment_params
        params.permit(:description, :user_id, :comic_id)
      end
end
