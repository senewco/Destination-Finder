import React from 'react';
import Form from 'react-bootstrap/Form'
import {Link} from "react-router-dom";
import Card from 'react-bootstrap/Card'
// import Image from 'components/App/Backgroud'

// var sectionStyle = {
//   bg: `url(${Image})`
// }

const Home = () => {
    const [country, setCountry] = React.useState('')
    
    return (
      <div class='container'>
        <center><br /><br /><br />
        {/* <Figure>{sectionStyle}</Figure> */}
        <h1>Destination Finder</h1>
        <br /><br /><br />
          <Card style={{width: '800px', display: 'inline-block'}}>
            <Card.Body>
              <Form.Group controlId="formBasicCountry" style={{maxWidth: '500px'}}>
              <Form.Label>Enter country to search for destinations.</Form.Label>
              <Form.Control 
                type="none" 
                placeholder="Country name here" 
                value={country} 
                onChange={(event) => setCountry(event.target.value)}/>
              </Form.Group>
              <button type="button" className="btn btn-outline-primary">
                <Link to={`/search/${country}`}>Search</Link>
              </button>
              <br /><br /><br /><br />
            </Card.Body>
          </Card>
        </center>
      </div>
    )
  };
  
  export default Home;