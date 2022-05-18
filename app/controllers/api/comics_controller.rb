class Api::ComicsController < ApplicationController
    skip_before_action :authorize, only: :index

    def index
        render json: Comic.all, include: :comments
      end
      def create
        comic = Comic.create(comic_params)
        render json: comic, status: :created
      end

      def show 
        comic = Comic.find_by(name: params[:name])
        render json: comic 
      end
      private

    def comic_params
        params.permit(:name)
    end
end
