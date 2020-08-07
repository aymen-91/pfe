import React, { Fragment,Component } from 'react';
import {   Redirect,withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../../action/action';
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
  state = {
     
    email: '',
    password: '',
    msg: null
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    
    login: PropTypes.func.isRequired,
  
  };
 if (isAuthenticate){this.setState({msg:"login success"})}

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const { email, pasword } = this.state;

    const user = {
      email,
      pasword
    };

    //attempt to login
    this.props.login(user);
  };


  render() {
    
    return (
      <div className="main">
       
         <div className="mainchild" > 
            <form onSubmit={this.onSubmit}>
              <formgroup className="container">
                <label for='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='form-control border-top-0 border-left-0 border-right-0'
                  onChange={this.onChange}
                />

                <label for='pasword'>Pasword</label>
                <input
                  type='password'
                  name='pasword'
                  id='pasword'
                  placeholder='Pasword'
                  className='form-control border-top-0 border-left-0 border-right-0'
                  onChange={this.onChange}
                />
                   <br/>
                <button   class="btn   btn-lg btn-dark"    >
                
                  Login
          
                </button>
                   { (this.props.isAuthenticated)? <Redirect   to='/PlatListeU ' />:<div>fail</div> }
 
              </formgroup>
            </form>
            <br/>
           
          
            </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.isAuthenticated,
 
});

export default withRouter( connect(
  mapStateToProps,
  { login }
)(Login) );