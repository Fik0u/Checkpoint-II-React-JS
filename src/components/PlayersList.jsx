import React from 'react'
import Player from './Player'
import players from '../players'

const PlayersList = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}> 
    {/* Mapping each object of the array to create a component card with its props  */}
        {players.map((player) => (<Player {...player} key = {player.name}/>))}
    </div>
  )
}

export default PlayersList
