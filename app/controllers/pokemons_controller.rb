        class PokemonsController < ApplicationController

            def index 
                pokemons = []
                response = HTTParty.get("https://pokeapi.co/api/v2/pokemon?limit=6&offset=1")
                response = JSON.parse(response.body)
                response.each do |k, value|
                    if k == "results"
                        value.each do |key, val|
                        response = HTTParty.get(key["url"])
                        response = JSON.parse(response.body)
                        pokemons.push(response)
                        end
                    end
                end

                # if !pokemons.nil?
                    @poke_json = pokemons.map do |poke|
                        Pokemon.new(img:poke['sprites']['other']['dream_world']["front_default"], name: poke['forms'][0]['name'], weight: poke['weight'], poke_type: poke['types'][0]['type']['name'], poke_ability: poke['abilities'][0], poke_id: poke['id'])
                                                                
                    end
                

                # render json: @poke_json
            end


            def show 
                pokemon = []
                response = HTTParty.get("https://pokeapi.co/api/v2/pokemon/#{params[:name]}")
                response = JSON.parse(response.body)
                pokemon = @pokemon.push(response)
                pokemon = ['asdfasd']
                # render json: pokemon 
            end

        end

        

       

