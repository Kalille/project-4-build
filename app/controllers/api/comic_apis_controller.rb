class Api::ComicApisController < ApplicationController


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
