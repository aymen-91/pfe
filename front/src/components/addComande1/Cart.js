import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addcomandes,deleteCarte } from "../../action/action"
import './addComande1.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import PropTypes from 'prop-types';
 


class Cart extends Component {

  static propTypes = {
    auth: PropTypes.object.isRequired
  };

  
    state = {  
        cmd :uniq(this.props.cmdElements ),
        UserName :this.props.user.name,
        TotalPrice: somme(uniq(this.props.cmdElements ).filter(el => el.quantity!==0).map(el => Number(el.price)*Number(el.quantity))) ,
        NameOfPlats:"".concat(uniq(this.props.cmdElements ).filter(el => el.quantity!==0).map(el => el.name)),
        NumerberOfPrice:somme(uniq(this.props.cmdElements ).filter(el => el.quantity!==0).map(el => Number(el.quantity))),
        msg:"",
        
        
            };
            



    render() {
        return (
            <div>
                
    {  
   
   uniq( this.state.cmd).map(el =>        
  <div className="container">

 

<div className="row">
 
  <div className="col-sm col-img">
   <img alt="cart of plat" src={el.image} />
  </div>
  <div className="col-sm">
  {el.name} 
  </div>
  <div className="col-sm">
  <button  onClick={ () => {
    let n = this.state.cmd.indexOf(el)
   
    if (this.state.cmd[n].quantity>0){ this.state.cmd[n].quantity= this.state.cmd[n].quantity-1
        this.setState({TotalPrice:this.state.TotalPrice-Number(el.price)}) 
       } 
       if (this.state.cmd[n].quantity === 0 && this.state.NumerberOfPrice>0){
        this.setState({NumerberOfPrice:this.state.NumerberOfPrice-1})  
      }
      this.setState({NameOfPlats:this.state.cmd.filter(el => el.quantity!==0).map(ele => ele.name).toString()})
          
  }}>
    -</button >

  <span   >{el.quantity }   </span> 

  <button  onClick={ () => {
    let n = this.state.cmd.indexOf(el)
   this.state.cmd[n].quantity= this.state.cmd[n].quantity+1 
   if(this.state.cmd[n].quantity === 1){
     this.setState({NameOfPlats:this.state.NameOfPlats.concat(" "+this.state.cmd[n].name)})
     this.setState({NumerberOfPrice:this.state.NumerberOfPrice+1}) 
   }
    this.setState({TotalPrice:this.state.TotalPrice+Number(el.price)}) 
    

  }} >
    +</button>

  </div>
  <div className="col-sm">
  <span className="price">{el.quantity *el.price} DINAR</span>  
  </div>

  <div className="col-sm">
  <span className="price"><button  onClick={() =>{

  this.setState({cmd:this.state.cmd.filter(ele => ele !== el)})

  this.setState({ TotalPrice: somme(this.state.cmd.filter(elem => elem.quantity!==0)
   .filter(elem => elem !== el).map(elem => Number(elem.price)*Number(elem.quantity)))})

  this.setState({NameOfPlats:"".concat(this.state.cmd.filter(elem => elem.quantity!==0)
   .filter(elem => elem !== el).map(elem => elem.name))})

  if(this.state.NumerberOfPrice>0){this.setState({NumerberOfPrice:this.state.NumerberOfPrice-1})  } 
  this.props.deleteCarte(el)


  }} >delete</button></span>  
  </div>



 </div>


 


 
</div>
 ) 
 } 
  <div className="cmdAdding">
   <b>nom des plats commendés : </b> 
   {this.state.NameOfPlats} 
   <b>le nombre des plats commendés:</b> {this.state.NumerberOfPrice} <b> le prix total</b> : {this.state.TotalPrice}
    
 <button onClick={ () => 
 { 
    this.setState({UserName:this.props.user.name})
   if(this.state.NumerberOfPrice===0){ this.setState({msg:"*you must at least order one"}) } 
   else{ this.props.addcomandes(this.state) 
    console.log("commanded added to cart")
    this.setState({msg:"comand ordred"})
    
  }
    
 
        } }><b>COMANDER</b></button>
 </div>
  <br/>
  <div className="cmdRefused">{this.state.msg}</div>
            </div>
        )
    }
}

const mapStateToProps =(state) =>{
    return{
      cmdElements:state.cmdElements,
      comandes:state.comandes,
      user: state.user,
      
    }
}

export function uniq(arr){
   return  arr.filter( (value,index) => arr.indexOf(value) === index)
}
export function somme(arr){
    let s =0 
    let l = arr.length
    for (let i=0 ; i<l;i++){
        s = s + arr[i]
    }
    return s
}
export function removeEl(s,n){
let arr =s.split(",")
arr.splice(n,1)
let s1=arr.toString()
return s1
}
export default connect(mapStateToProps,{addcomandes,deleteCarte })(Cart)