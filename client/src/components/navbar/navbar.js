import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import './navbar.css'
import SearchBar from './searchbar.js'

export default class extends React.Component {   

      render() {

        return (
          <Navbar className="navbar" expand="lg" fixed="top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {/* <Nav className="mr-auto">
                <Nav.Link className="nav-links" href="/">
                  Home
                </Nav.Link>
                <Nav.Link className="nav-links" href="/#categories">
                  Categories
                </Nav.Link>
                <Nav.Link className="nav-links" href="/about">
                  About
                </Nav.Link>
              </Nav> */}

              {/*Search Bar* implmentation that can be used with elastic search/}
              {/* <SearchBar /> */}
            </Navbar.Collapse>
          </Navbar>
        );
        }
}
  