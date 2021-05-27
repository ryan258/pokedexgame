import React from 'react'
import PokeDex from './PokeDex'
import pokedata from './pokedata'

const PokeGame = () => {
  const player1 = []
  const player2 = []

  const pokemonArr = pokedata
  while (pokemonArr.length) {
    if (pokemonArr.length % 2 === 0) {
      const randomItem = Math.floor(Math.random() * pokemonArr.length)
      player1.push(...pokemonArr.splice(randomItem, 1))
    } else {
      const randomItem = Math.floor(Math.random() * pokemonArr.length)
      player2.push(...pokemonArr.splice(randomItem, 1))
    }
  }

  const player1TotalXP = player1.reduce((acc, pokemon) => acc + pokemon.base_experience, 0)
  const player2TotalXP = player2.reduce((acc, pokemon) => acc + pokemon.base_experience, 0)

  console.log('player 1', player1, player1TotalXP)
  console.log('player 2', player2, player2TotalXP)

  return (
    <div>
      <h1>Pokedex!</h1>
      <PokeDex title="Player 1's Hand" cards={player1} totalXP={player1TotalXP} isWinner={player1TotalXP > player2TotalXP} />
      <PokeDex title="Player 2's Hand" cards={player2} totalXP={player2TotalXP} isWinner={player2TotalXP > player1TotalXP} />
    </div>
  )
}

export default PokeGame
