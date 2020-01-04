import React from 'react'
import {useAllCountryNamesQuery} from '../../generated/apollo-components'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

const Countries = () => {
    const { data, loading, error } = useAllCountryNamesQuery()
    if(loading) return 'Loading...'
    if(error) return 'Error'

    return (
        <div>
            <Jumbotron style={{maxHeight: '250px'}}>
                <h1>Countries</h1>
                <p> This is a list of all countries with popular travel destinations. </p>
                <p>
                <a target="_blank" rel='noopener noreferrer'
                       href="https://en.wikipedia.org/wiki/Lists_of_countries_and_territories">
                        <Button variant="outline-primary">More Information</Button>
                    </a>

                </p>
            </Jumbotron>
            {data.countries.map(cntry => (
                <Card style={{width: '270px', border: 'dark', display: 'inline-block', margin: '30px'}}>
                    <Card.Img variant="bottom" src={`https://source.unsplash.com/600x400/?${cntry.name}`} />
                    <Card.Body><Card.Title>{cntry.name}</Card.Title></Card.Body>
                </Card>
            ))}
        </div>
    )
}

export default Countries