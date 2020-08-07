import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getcomandes,editcomande,deletecomande} from '../../action/action'
import 'bootstrap/dist/css/bootstrap.min.css';


 class Comandes extends Component {

    constructor(){
        super( );
        this.state ={ 
      
         }
    }

    componentDidMount(){
        this.props.getcomandes() 
          
    }
     
    render() {
        return (
            <div>

 
   
 
 
                 

<table class="table">
<thead class="thead-dark">
  <tr>
    <th scope="col"> </th>
    <th scope="col">Client Name</th>
    <th scope="col">dishes comanded</th>
    <th scope="col">number of dashes type</th>
    <th scope="col">Tota price</th>
    <th scope="col">validation</th>
  </tr>
</thead>
{this.props.Comande.map(el => 
<tbody>
  <tr>
    <th scope="row"> </th>
    <td>  {el.UserName} </td>
    <td>  {el.NameOfPlats} </td>
    <td>  {el.NumerberOfPrice} </td>
    <td>  {el.TotalPrice} </td>
    <td>
      <div>{el.isVlidated}</div>
      {(el.isVlidated)?(<div>is validate</div>):
      (
     <div  >

        <button onClick={ () =>this.props.editcomande(el._id) }>validate</button>

        <button onClick={ () =>this.props.deletecomande(el._id) }>dont validate</button>
         

     </div>
     )
    }    
    </td>
 
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
      Comande:state.comandes
    }
}
 
 
export default connect(mapStateToProps, {getcomandes,editcomande,deletecomande}) (Comandes)

 

