import React from 'react'
import Player from './Player'
import players from '../players'

const PlayersList = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
        {players.map((player) => (<Player {...player} key = {player.name}/>))}
    </div>
  )
}

export default PlayersList
