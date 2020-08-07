import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getusers,deleteuser} from '../../action/action'
import 'bootstrap/dist/css/bootstrap.min.css';
 
 class Users extends Component {
   constructor(){
       super( );
       this.state ={ 
     
        }
   }
    componentDidMount(){
        this.props.getusers() 
          
    }
     
  
    render() {
        return (
   <div>
   

      <table className="table">
<thead className="thead-dark">
  <tr>
    <th scope="col"> </th>
    <th scope="col">User Name</th>
    <th scope="col">Email</th>
    <th scope="col">Phone</th>
    <th scope="col"></th>
  </tr>
</thead>
{this.props.User.map(el => 
<tbody key={el.id}>
  <tr>
    <th scope="row"> </th>
    <td key={el.id}>  { el.name} </td>
    <td key={el.id}>  { el.email} </td>
    <td key={el.id}>  { el.tel} </td>
    <td >   <button onClick={ () =>this.props.deleteuser(el._id) }>delete</button> </td>
  </tr>
</tbody>
   )}
</table>

   </div>
           
        )
    }
}

 

const mapStateToProps =(state) =>{
    return{
      User:state.users
    }
}
 
 
export default connect(mapStateToProps, {getusers,deleteuser}) (Users)






