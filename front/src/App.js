import React, { Component } from 'react'
import './App.css'
import PlatList from "./components/platListe/PlatList"
import PlatListeU from './components/platListeU/PlatListeU'
import PlatListeAd from './components/PlatListeAd/PlatListeAd'
import Users from './components/Users/Users'
import Comandes from './components/Comandes/Comandes'
import Cart from './components/addComande1/Cart'
import SignUp from './components/SignUp/SignUp'
import LogIn from './components/LogIn/LogIn'
import Footer from './components/Footer/Footer'
import store from './store';
import {loadUser} from './action/action'
import registeration from './components/auth/Registeration' 
import Platuserfinal from './components/Platuserfinal/Platuserfinal'
import logout from './components/auth/logout'
import Login from './components/auth/Login'
import { Container } from 'reactstrap';
import Navbar from './components/navbar/navbar'
import { BrowserRouter,Route,Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import Navbar1 from './components/navbar1/navbar1'
 


export default class App extends Component {
  // componentDidMount(){
  //   store.dispatch(loadUser())  }
  render() {
    
    return (
        
      <div className="main">
        <Navbar1/>
             {/* <Provider store={store}>
        <div className="App">
          <Navbar />
          <Container>
        
          </Container>
        </div>
      </Provider>
        */}
        
         {/* <BrowserRouter> */}
 {/* <nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
 
  <Link to="/" className="navbar-brand"  >Restaurant</Link>
 
    <div  className="navbar-nav">
         <Link to="/PlatListeAd"  className="nav-link nav-item "  >  Admin page </Link> 
        <Link to="/Users"  className="nav-item nav-link"    >  Users </Link> 
          <Link  to="/Comandes" className="nav-item nav-link"    >  commandes </Link> 
         <Link to="/PlatListeU"  className="nav-item nav-link"    >  User page</Link> 
      <Link to="/Cart"  className="nav-item nav-link"   >  Cart </Link> 
      <Link to="/registeration"  className="nav-item nav-link"   >  registeration </Link> 
      <Link to="/logout"  className="nav-item nav-link"   >  logout </Link> 
      <Link to="/Login"  className="nav-item nav-link"   >  Login </Link> 
      <Link to="/Platuserfinal"  className="nav-item nav-link"   >  Platuserfinal </Link> 
      
    </div>

    <div  className="nav navbar-nav ml-auto nav-item">
      <Link to="/SignUp"  className="nav-item nav-link"   >  SignUp </Link> 
      <Link to="/LogIn"  className="nav-item nav-link"   >  LogIn </Link> 
    </div>

   
</nav> */}
   
            {/* <Route path="/" exact  component= {PlatList} />
     
     
            <Route path="/PlatListeU"    component= {PlatListeU} />
            <Route path="/registeration"    component= {registeration} />
            <Route path="/logout"    component= {logout} />
            <Route path="/Login"    component= {Login} />
            <Route path="/Platuserfinal"    component= {Platuserfinal} />
       
            <Route path="/PlatListeAd"    component= {PlatListeAd} />
            <Route path="/Users"    component= {Users} />

    
            <Route path="/Comandes" component={Comandes} />
    
            <Route path="/Cart"   component= {Cart} />

            <Route path="/SignUp" component={SignUp} /> 
             
             <Route path="/LogIn" component={LogIn} />
            

        </BrowserRouter> */}
         
    

      </div>
    )
  }
}
