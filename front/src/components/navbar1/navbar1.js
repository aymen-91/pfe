import React, { Component, Fragment } from 'react';
 
 
import Logout from '../auth/logout'
import Login from '../auth/Login'
import PlatList from '../platListe/PlatList'
import PlatListeU from '../platListeU/PlatListeU'
import PlatListeAd from '../PlatListeAd/PlatListeAd'
import Users from '../Users/Users'
import Comandes from '../Comandes/Comandes'
import Cart from '../addComande1/Cart'
import Registeration from '../auth/Registeration'
import Maiby  from '../maiby/maiby'
import './navbar1.css'

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
 
import { BrowserRouter,Route,Link,withRouter  } from 'react-router-dom'


class navbar1 extends Component {
  
  static propTypes = {
    auth: PropTypes.object.isRequired
  };

 
  render() {

   
    return (
 
      <div>
                 

            <BrowserRouter>

            <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
 
 { (!this.props.isAuth)
 ?( <Link to="/" className="navbar-brand"  >Restaurant</Link> )
 
:( this.props.isAuth && this.props.user.isAdmin)
?( <Link to="/PlatListeAd"  className="navbar-brand"  >  Restaurant </Link> )
:( <Link to="/PlatListeU"  className="navbar-brand">  Restaurant</Link>)
}
{/* <Link to="/Maiby"  className="navbar-brand">  Maiby</Link> */}
   <div  className="navbar-nav">
   { ( !this.props.isAuth)
 ?( <div></div> )
 
:( this.props.isAuth && this.props.user.isAdmin)
?(<div className="nav-item"> <Link to="/Users"  className="nav-item nav-link"    >  Users </Link> 
 <Link  to="/Comandes" className="nav-item nav-link"    >  commandes </Link>
 </div> )
:(     <Link to="/Cart"  className="nav-item nav-link"   >  Cart </Link>  )
}
  
   </div>

   <div  className="nav navbar-nav ml-auto nav-item">
{
    ( !this.props.isAuth)
    ?(<div className="nav-item"> <Link to="/Login"  className="nav-item nav-link"   >  Login </Link> 
    <Link to="/registeration"  className="nav-item nav-link"   >  registeration </Link> </div>)
    :(<div className="nav-item" > <div className="navbar-brand" > {this.props.user.name} </div> <Logout/> </div>  )
}
    
    
   </div>

  
</nav>

            <Route path="/" exact  component= {PlatList} />
            <Route exact path="/PlatListeU"    component= { PlatListeU } />
            <Route path="/registeration"    component= {Registeration} />
            <Route path="/PlatListeAd"    component= {PlatListeAd} />
            <Route path="/Users"    component= {Users} />
            <Route path="/Comandes" component={Comandes} />
            <Route path="/Cart"   component= {Cart} />
            <Route path="/logout"    component= {Logout} />
            <Route path="/Login"    component= {Login} />
            <Route path="/Maiby"    component= {Maiby} />
            </BrowserRouter>
  
 
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user,
  isAuth: state.isAuthenticated
});

export default connect(
  mapStateToProps,
  null
)(navbar1);