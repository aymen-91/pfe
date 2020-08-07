import React, { Component } from 'react'
import { connect } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import {addusers} from '../../action/action'

  class SignUp extends Component {

    state={
        name:'',
        email:'',
        pasword:'',
        tel:''
        
    }
  
      onChange = (event) => {
        this.setState({
            [event.target.name]:event.target.value,
            quantity:0
            
        })
    }
      onSubmit(e) {
        e.preventDefault();
      }


    render() {
        return (
            <div class="container cardb mt-10">
		
            <div class="row no-gutters" >
            
                <div class="col-md-8">
                <div class="card-body">
                    <img src="https://cdn.dribbble.com/users/99022/screenshots/984882/unlimited-users.jpg" class="mx-auto d-block"/>
                    <form onSubmit={this.onSubmit}>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-1">
                                    <i class="fas fa-user pt-3"></i>
                                </div>
                                <div class="col-md-11">
                                    <input type="text" class="form-control border-top-0 border-left-0 border-right-0"  name="name"
                   
                   value={this.state.name}
                   onChange={this.onChange} placeholder="name" required/>
                                </div>
                            </div>
                        </div>
              <div class="form-group">
                            <div class="row">
                                <div class="col-md-1">
                                    <i class="fas fa-user pt-3"></i>
                                </div>
                                <div class="col-md-11">
                                    <input type="text" class="form-control border-top-0 border-left-0 border-right-0"   name="tel"
                    
                    value={this.state.tel}
                    onChange={this.onChange} placeholder="tel" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-1">
                                    <i class="fas fa-envelope pt-3"></i>
                                </div>
                                <div class="col-md-11">
                                    <input type="email" class="form-control border-top-0 border-left-0 border-right-0"        name="email"
              
              value={this.state.email}
              onChange={this.onChange} placeholder="Email" required/>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-1">
                                    <i class="fas fa-key pt-3"></i>
                                </div>
                                <div class="col-md-11">
                                    <input type="password" class="form-control border-top-0 border-left-0 border-right-0"    name="pasword"
    
    value={this.state.pasword}
    onChange={this.onChange} placeholder="Password" required/>
                                </div>
                            </div>
                        </div>
                
                    <div class="text-center">
                        <button type="submit" class="btn btn-danger" 
                        onClick={ () => 
                            this.props.addusers(this.state)
                        }
                        >Sign Up</button>
                    </div>
                    
                    </form>
            </div>
            </div>
        </div>
        </div>
    
    
    
    
    
        )
    }
}
 

const mapStateToProps = (state) => ({
    User:state.users
    
})

 
export default connect(mapStateToProps,{addusers})(SignUp)
