import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getplats,addCart,addcomandes,getcomandes,getCart } from '../../action/action'
import { Card,Button  } from 'antd'
 
 
import './PlatListeU.css'
import 'bootstrap/dist/css/bootstrap.min.css';
 
const { Meta } = Card
 

 class PlatListeU extends Component {
   
       
        state ={ 
           search:'',
           searchOrigine:'',
           searchGout:'',
           cmd:[],
           TotalPrice:0 ,  
           cmdE:this.props.cmdElements
        }
    
    componentDidMount(){
        this.props.getplats() ;
       
    }
    

   updateSearched(event){
       this.setState({search:event.target.value.substr(0,20)})
   }

   updateSearchedOrigine(event){
    this.setState({searchOrigine:event.target.value })
   }
   
  updateSearchedGout(event){
    this.setState({searchGout:event.target.value })
   }
   //midfy
  addCmd(event){
      this.setState({ cmd:event.target.value
    
    })
   
  }

    render() {
        return (
            <div className="principal">

            <div className="part-1"></div>
            <div  className="part-2">

    <form  className="formp">
    <div className="searchBar">   
    <input className="search form-control" type="text" placeholder="press name" value={this.state.search} 
   onChange={this.updateSearched.bind(this)}/>
   </div> 
   <br/>
    <div className="selectItem">
  
   <select name="origine" value={this.state.searchOrigine} className="form-control form-control-sm"
    onChange={this.updateSearchedOrigine.bind(this)} placeholder="select origine">

   {
                  
   uniq(this.props.platListe.map(el=>el.origine)) 
  .map(el=>( 
                
                   <option key={el.id}>{el} </option>  
                   )
                  ) 
                 }
           
  </select >
 

 
  <select name="gout" value={this.state.searchGout} className="form-control form-control-sm"
   onChange={this.updateSearchedGout.bind(this)}>
    
  {uniq(this.props.platListe.map(el=>el.nature)) 

  .map(el=>(
                   <option key={el.id}>{el} </option>  
                   )
                  )
                 }
                
   </select>
   </div>
 </form >
            
            <br/>
               <div className="list"> 
                {this.props.platListe
                .filter( 
                    (plat)=>{
                        return plat.name.toLowerCase().indexOf(this.state.search) !==-1
                    }
                )
                .filter(
                    (plat)=>{
                        return plat.origine.indexOf(this.state.searchOrigine) !==-1
                    }
                )
                .filter(
                    (plat)=>{
                        return plat.nature.indexOf(this.state.searchGout) !==-1
                    }
                )
                .map((el,li)=>(
              
             <div className="list-el">  
    
              <Card
                hoverable
                style={{ width: 240 }}
                  cover={<img  alt="example" src={el.image} style={{width:240 , height:180}}/>}
               >
      
                  name :<Meta key={el.id} title={el.name} />
                  price :<Meta key={el.id} title={el.price} />
                  origine : <Meta key={el.id} title={el.origine} />
                  gout :<Meta key={el.id}title={el.nature} />
                   
                  <Button type="primary" onClick={ () =>{ 
                      
                      let l = this.state.cmdE.length
                       if(l===0){
                        var joinedCmd = this.state.cmd.concat(el)
                        this.setState({ cmd: joinedCmd })
                        this.props.addCart(uniq(joinedCmd)) 
                       }

                      let exist = false
                      if (l>0){
                          for (let i=0;i<l;i++){
                              if(this.state.cmdE[i].name === el.name){exist = true}
                          }
                      }
                      
                     
                      if(this.state.cmdE.length>0 && exist===false){ 
                        var joined = this.state.cmd.concat(el)
                        this.setState({ cmd: joined })
                        this.props.addCart(uniq(joined)) 
                      }
                     
                      
                         
                 }
                     } >addTocart</Button>

             </Card>

                 </div>
                  )
                 )
                }

                </div>
                </div>
                <div className="part-3"></div>

            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
return{
  getplats:() => dispatch(getplats()),
  addCart: (comande) => dispatch(addCart(comande)),
  addcomandes:() => dispatch(addcomandes()),
  getcomandes:()=> dispatch(getcomandes() ),
  getCart:()=>dispatch(getCart())
  
}
}


const mapStateToProps =(state) =>{
    return{
      platListe:state.plats  ,
      cmdElements:state.cmdElements,
      comandes:state.comandes
    }
}
 

export function uniq(arr){
   return  arr.filter( (value,index) => arr.indexOf(value) === index)
}
 
export default connect(mapStateToProps, mapDispatchToProps) (PlatListeU)
 






