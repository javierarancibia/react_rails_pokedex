class CreatePokemons < ActiveRecord::Migration[6.0]
  def change
    create_table :pokemons do |t|
      t.string "img"
      t.string "weight"
      t.string "name"
      t.string "poke_type"
      t.string "poke_ability"

      t.timestamps
    end
  end
end
