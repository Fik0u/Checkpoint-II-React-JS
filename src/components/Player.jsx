import React from 'react'
import {Card} from 'react-bootstrap'

const Player = ({name = 'Youcef Belaili', team = 'MCA', nationality = 'Algerian', jerseyNumber = 11, age = 32, imgUrl = ''}) => {
  return (
    <div>
      <Card style={{ width: '18rem', marginTop:'50px', padding: '20px'}}>
      <Card.Img variant="top" src={imgUrl} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
          {age} 
          <hr />
          {nationality}
          <hr />
          {team}
          <hr />
          {jerseyNumber}  
      </Card.Body>
    </Card>
    </div>
  )
}

export default Player
