import React, { Component } from 'react'
 import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {register} from '../../action/action'
import './Login.css'
import 'bootstrap/dist/css/bootstrap.min.css';

  class Registeration extends Component {
   
    state={
        name:'',
        email:'',
        pasword:'',
        tel:'',
        msg:null
        
    }
    static propTypes  = {
        isAuthenticated:PropTypes.bool,
        register:PropTypes.func.isRequired
    }
    onChange = e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    onSubmit = e =>{
        e.preventDefault()

    const { name, email, pasword ,tel} = this.state;
    // Create user object
    const newUser = {
        name,
        email,
        pasword,
        tel
      };
  
      // Attempt to register
      this.props.register(newUser);
         
    }

  

    render() {
        return (
            <div   className="main">
             <div className="mainchild">
                 
                <form onSubmit={this.onSubmit}>
                <formgroup className="container">
                <label for='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  placeholder='Name'
                  className='form-control border-top-0 border-left-0 border-right-0'
                  onChange={this.onChange}
                  required
                />

                <label for='email'>Email</label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  placeholder='Email'
                  className='form-control border-top-0 border-left-0 border-right-0'
                  onChange={this.onChange}
                  required
                />

                <label for='pasword'>Password</label>
                <input
                  type='password'
                  name='pasword'
                  id='pasword'
                  placeholder='Pasword'
                  className='form-control border-top-0 border-left-0 border-right-0'
                  onChange={this.onChange}
                  required
                />
                <label for='tel'>tel</label>
                <input
                  type='number'
                  name='tel'
                  id='tel'
                  placeholder='tel'
                  className='form-control border-top-0 border-left-0 border-right-0'
                  onChange={this.onChange}
                  required
                />
                <br/>
                <button  class="btn   btn-lg btn-dark" >
                  Register
                </button>
                </formgroup>
                </form>
            </div>
            </div> 
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.isAuthenticated,
  });

export default connect( mapStateToProps,{register})(Registeration)