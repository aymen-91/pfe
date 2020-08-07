import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';
 
import Logout from '../auth/logout'
import Login from '../auth/Login'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadUser } from '../../action/action';
import { BrowserRouter,Route,Link } from 'react-router-dom'
import PlatList from '../platListe/PlatList'

class navbar extends Component {
  state = {
    isOpen: false
  };

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
 
    const { isLoading,isAuthenticated, user } = this.props.auth;

       
    
    const authLinks = (
     

      <Fragment>
        <NavItem>
          <span className='navbar-text mr-3'>
            <strong>{user ? `Welcome ${user.name}  ` : ''}</strong>
          </span>
        </NavItem>
        <NavItem>
          <Logout />
        </NavItem>
        <NavItem>
          
        </NavItem>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
       
        <NavItem>
        <NavbarBrand  href="/registeration">Registeration </NavbarBrand>
        <NavbarBrand  href="/Login">Login </NavbarBrand>
        </NavItem>
      </Fragment>
    );
   
    return (
 
      <div>
  

        <Navbar color='dark' dark expand='sm' className='mb-5'>
          <Container>
            <NavbarBrand href="/" >Plat list</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
             
              <Nav className='ml-auto' navbar>
                {(isAuthenticated ) ? authLinks : guestLinks}
              </Nav>
          
          </Container>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state 
});

export default connect(
  mapStateToProps,
  null
)(navbar);