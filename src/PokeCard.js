import React from 'react'
const imgBaseUrl = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const PokeCard = ({ pokemon: { id, name, type, base_experience } }) => {
  // console.log(props)
  const paddedId = String(id).padStart(3, '0')

  return (
    <div className="pokemon">
      <h5 className="pokemon-name">{name}</h5>
      <p className="pokemon-xp">
        EXP: <b>{base_experience}</b>
      </p>
      <img className="pokemon-img" src={`${imgBaseUrl}${paddedId}.png`} alt={name} />
      <p className="pokemon-type">Type: {type}</p>
    </div>
  )
}

export default PokeCard
