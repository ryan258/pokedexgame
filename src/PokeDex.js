import React from 'react'
import PokeCard from './PokeCard'
// import pokedata from './pokedata'

const PokeDex = ({ title, cards, totalXP, isWinner }) => {
  console.log(title, cards, totalXP, isWinner)
  return (
    <div className={`pokedex ${isWinner && 'winner'}`}>
      <h2 className="pokedex-title">
        {title}
        {isWinner && ' WINS!'}
      </h2>
      <p className="pokedex-totalxp">
        Total XP: <b>{totalXP}</b>
      </p>
      <div className="cards">
        {cards.map((pokemon) => (
          <PokeCard pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </div>
  )
}

export default PokeDex
