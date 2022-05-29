class Api::ComicApisController < ApplicationController
skip_before_action :authorize
    def index 
        render json: ComicApi.all, except: [:created_at, :updated_at]
    end


    def show
        comic = ComicApi.find_by(id: params[:id])
        render json: comic
    end
    def search_comics
        url= "https://comicvine.gamespot.com/api/volumes/?api_key=4b22c0361638acf814a29e4ebfbf3825d63abf6a&format=json&sort=name"
        response = RestClient.get(url)
        # if response
        #     response['results'].each do |image,volume,index|

        render json: response

    end

    def search_characters
        
        url = "https://comicvine.gamespot.com/api/characters/?api_key=4b22c0361638acf814a29e4ebfbf3825d63abf6a&format=json&sort=name:asc&filter=name:wolverine"
        byebug
        response = RestClient.get(url)

        render json: response
    end



end
