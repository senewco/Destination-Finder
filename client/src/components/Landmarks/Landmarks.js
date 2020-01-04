import React from 'react'
import {useAllLandmarkNamesQuery} from '../../generated/apollo-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Landmarks = () => {
    const { data, loading, error } = useAllLandmarkNamesQuery()
    if(loading) return 'Loading...'
    if(error) return 'Error'

    return (
        <div>
            <Jumbotron style={{maxHeight: '250px'}}>
                <h1>Travel Destinations</h1>
                <p>
                    This is a list of popular travel destinations.  These include landmarks all over the world,
                    stretching from the western United States to Japan.
                </p>    
                <p>
                    <a target="_blank" rel='noopener noreferrer'
                       href="https://en.wikipedia.org/wiki/List_of_most_visited_palaces_and_monuments">
                        <Button variant="outline-primary">More Information</Button>
                    </a>
                </p>
            </Jumbotron>
            {data.landmarks.map(ldmk => (
                <Card style={{width: '270px', border: 'dark', display: 'inline-block', margin: '30px'}}>
                <Card.Img variant="top" src={`https://source.unsplash.com/600x400/?${ldmk.name}`} />
                    <Card.Body>
                        <Card.Title>{ldmk.name}</Card.Title>
                    </Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Landmarks