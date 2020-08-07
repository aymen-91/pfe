import React, { Component } from 'react'
import { connect } from 'react-redux'
import {getplats,deleteplat } from '../../action/action'
import { Card,Button  } from 'antd'
 
import AddPlat from '../addPlat/AddPlat'
 
import './PlatLIsteAd.css'
import 'bootstrap/dist/css/bootstrap.min.css';


const { Meta } = Card
 
 
 

 class PlatListeAd extends Component {
   constructor(){
       super();
       this.state ={ 
           search:'',
           searchOrigine:'',
           searchGout:'',
        
        }
   }
    componentDidMount(){
        this.props.getplats()
  
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
 
  
 
    render() {
        return (
          
            <div className="principal">
              <div className="part-1"></div>

              <div  className="part-2">

    <form className="formp">
    <div className="searchBar">   
 <input className="search form-control" type="text" placeholder="press name" value={this.state.search} 
 onChange={this.updateSearched.bind(this)}/>
  </div>
  <br/>
  <div className="selectItem">
<select name="origine" value={this.state.searchOrigine} className="form-control form-control-sm"
 onChange={this.updateSearchedOrigine.bind(this)} >
     
<option disabled selected >select origine</option>

{
                  
uniq(this.props.platListe.map(el=>el.origine)) 

.map(el=>( 
                    
                   <option key={el.id} >{el} </option>  
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
</form>
            
             
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
                  cover={<img alt="example" src={el.image} style={{width:240 , height:180}} />}
               >
      
                  name :<Meta key={el.id} title={el.name} />
                  price :<Meta key={el.id}  title={el.price} />
                  origine : <Meta key={el.id} title={el.origine} />
                  gout :<Meta key={el.id} title={el.nature} />
                 
                   
                  <Button type="primary" onClick={()=>this.props.deleteplat(el._id)}>delete</Button>
                  <AddPlat plat={el}/>
             </Card>
             
                 </div>
                  )
                 )
                
                }
                <div style={{width:240,height:150} }><AddPlat/></div>
                
                </div>
                </div>
                <div className="part-3"></div>
            </div>
             
        )
         
    }
    
}


 
const mapStateToProps =(state) =>{
    return{
        platListe:state.plats ,
        cmdElements:state.cmdElements
        
    }
}

export function uniq(arr){
   return  arr.filter( (value,index) => arr.indexOf(value) === index)
}
 
export default connect(mapStateToProps,{getplats,deleteplat}) (PlatListeAd )






