import React from 'react'
import {useLookupLInCountryQuery} from '../../generated/apollo-components'
import {useParams} from 'react-router-dom'
import Card from 'react-bootstrap/Card'

const Search = () => {
    const {term} = useParams()
    const { data, loading, error } = useLookupLInCountryQuery({
        variables: {
            name: term
        }
    })
    if(loading) return 'Loading...'
    if(error) return 'Error'

    return ( 
        <div>
            {data.countries.map(cntry => (
                <React.Fragment key={cntry.name}>
                    <h1 style={{maxHeight: '100px', maxWidth: '500px',
                                fontSizeAdjust: '.35', margin: '30px', border: 'dark'}}>
                        {cntry.name}
                    </h1>
                    {cntry.landmarks.map(ldmrk => (
                        <Card key={ldmrk.name} 
                              style={{width: '270px', border: 'dark', display: 'inline-block', margin: '30px'}}>
                            <Card.Img variant="bottom" src={`https://source.unsplash.com/600x400/?${ldmrk.name}`} />
                            <Card.Body>
                                <Card.Title>{ldmrk.name}</Card.Title>
                                <Card.Text>City: {ldmrk.city_name}</Card.Text>
                            </Card.Body>
                        </Card>
                    ))}
                </React.Fragment>
            ))}
        </div>
    )
}

export default Search