import React from 'react'
import {Card} from 'react-bootstrap'

//The props of a default player (Destructured)
const Player = ({name = 'Erling Haaland', team = 'Manchester City FC', nationality = 'English', jerseyNumber = 9, age = 24, imgUrl = 'https://cdn.futwiz.com/assets/img/fc25/faces/239085.png?25'}) => {
  return (
    <div>
      <Card style={{ width: '18rem', marginTop:'50px', padding: '10px', backgroundColor: '#eee6cd', fontWeight: 300 }}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
{/* calling the props inside the component*/}
        <Card.Title>{name}</Card.Title>
          <hr />
            <div>{age} </div>
            <div>{nationality}</div>
            <div>{team}</div>
            <div>{jerseyNumber} </div> 
          
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
