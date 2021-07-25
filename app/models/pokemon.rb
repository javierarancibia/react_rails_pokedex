class Pokemon < ApplicationRecord

    def api_request 
            pokemons = []
            response = getPokemon()
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
        end

        private

        def getPokemon
            return HTTParty.get("https://pokeapi.co/api/v2/pokemon?limit=10&offset=1")
        end
    end
end
