# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Comic.destroy_all
User.create(username:'Bill', password: 'Password')
Comic.create(name: "action jackson", release_year:"2022",publisher:"Kalille", image:"https://comicvine.gamespot.com/a/uploads/original/11118/111185606/8390931-all-starbatman-webv2012%282012%29pagecover.jpg",issue_number: "1", count_of_issues:"3", creator: User.first)
Comment.create(description: "good comic, story line is crazy", comic: Comic.first , user: User.first)
Comment.create(description: "Perfect Ending", comic: Comic.first , user: User.first)
Comment.create(description: "great artwork", comic: Comic.last , user: User.last)
def get_comic_data

    comic_data = RestClient.get('https://comicvine.gamespot.com/api/volumes/?api_key=4b22c0361638acf814a29e4ebfbf3825d63abf6a&format=json&sort=name')
    
    if comic_data.code == 200
        # byebug
        parsed_comic_data = JSON.parse(comic_data)['results']
      
        # byebug
        parsed_comic_data.each { |comic|
        # byebug
              Comic.create(
               name: comic['name'],
               release_year: comic['start_year'],
               publisher: comic['publisher'] ? comic['publisher']['name'] : "N/A",
               image: comic['image']['original_url'],
               issue_number: comic['first_issue'] ? comic['first_issue']['issue_number'] : 'N/A',
               count_of_issues: comic['count_of_issues'],
               creator_id: 1
         

            )
            # pp c.errors
            # byebug
        }
    end

end

get_comic_data()
# byebug

