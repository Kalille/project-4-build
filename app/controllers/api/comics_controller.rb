class Api::ComicsController < ApplicationController
    skip_before_action :authorize, only: [:index,:create]

    def index
        render json: Comic.all, include: [:comments, :users]
      end
      def create

        comic = Comic.create!(comic_params)
   
        render json: comic, status: :created
      end

      def show 
        comic = Comic.find_by(id: params[:id])
        render json: comic, include: [:comments, :users]
      end

      def destroy
        comic = Comic.find_by(id: params[:id])
        comic.delete
        head :no_content
      end
      private

    def comic_params
        params.require(:comic).permit(:name, :release_year, :publisher, :image, :issue_number, :count_of_issues, :creator_id)
    end
end
