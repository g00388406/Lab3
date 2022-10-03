import React from 'react';
import { Content } from './components/content';
import { Footer } from './components/footer';
import { Header } from './components/header';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";



class App extends React.Component {

  //wrapping the return values
  render(){

    //creating a navigation bar
  return (
    <Router>
    <div>

      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/read">Read</Nav.Link>
            <Nav.Link href="/create">Create</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Content></Content>} exact></Route>
        <Route path='/read' element={<Header></Header>} exact></Route>
        <Route path='/create' element={<Footer></Footer>} exact></Route>
        </Routes>


    </div>
    </Router>
  );

  // ^ calling in the information above to display on the browser
}

}
export default App;
