import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import FormControl from 'react-bootstrap/FormControl'
import {Link} from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap';

const NavBar = ({ children, to, exact }) => {
  const [country, setCountry] = React.useState('')
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Nav className="mr-auto">
          <LinkContainer to="/all-countries">
            <Nav.Link>Countries</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/all-landmarks">
            <Nav.Link>Destinations</Nav.Link>
          </LinkContainer>
        </Nav>
        <Form inline>
          <FormControl value={country} onChange={(event) => 
            setCountry(event.target.value)} type="text" 
            placeholder="Search" 
            className="mr-sm-2" />
          <Button variant="outline-info"><Link to={`/search/${country}`}>Search</Link></Button>
        </Form>
      </Navbar>
      <br />
    </div>
  )
};

export default NavBar;