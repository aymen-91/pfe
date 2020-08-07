//1 import export
import axios from "axios"
import {GET_PLATS,GET_USERS,GET_COMANDES,AD_CART,GET_CART,DELETE_CART,USER_LOADED,
    USER_LOADING,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT_SUCCESS,
    REGISTER_SUCCESS,
    REGISTER_FAIL, GET_ERRORS, CLEAR_ERRORS} from "./actionType"
 
//2 creat methode for getings elemnts from db

//GET PLAT ORIGINAL

// export const getplats = () => dispatch => {
//     // 2-1 axions get the same path of back in app.use
//     axios.get("/plat-list").then(res => {
//         dispatch({
//             //2-2 same name in action type (after this go to make reducers)
//             type:GET_PLATS,
//             payload:res.data
//         })
//     }) 
// }

//GET PLAT ORIGINAL

//GET PLAT NEW

export const getplats = () => dispatch => {
    // 2-1 axions get the same path of back in app.use
    axios.get("/plat-list").then(res => {
        dispatch({
            //2-2 same name in action type (after this go to make reducers)
            type:GET_PLATS,
            payload:res.data
        })
    }) 
}

//GET PLAT NEW

//3 create action to add plat
export const addplats = (newPlat)=>dispatch=>{
    axios.post("/plat-list",newPlat).then(res=> {
        dispatch(getplats())
    })
} 

 
export const deleteplat=(id)=> (dispatch,getState)=>{
    axios.delete(`/plat-list/${id}`,tokenConfig(getState)).then(res =>{
        dispatch(getplats())
   
    })
}

export const editplat=(id,newplat)=>(dispatch,getState)=>{
    axios.put(`/plat-list/${id}`,newplat,tokenConfig(getState)).then(res=>{
        dispatch(getplats())
    })
}

export function addCart (comande) {
    return   {
        type:AD_CART,
         comande
    }
}
 export function getCart(){
     return {
        tyupe: GET_CART
     }
 }
export function deleteCarte(comande){
    return{
        type:DELETE_CART,
        comande
        
    }
}

//USERS
export const getusers = () => dispatch => {
    
    axios.get("/user-list").then(res => {
        dispatch({
           
            type:GET_USERS,
            payload:res.data
        })
    }) 
}

 
export const addusers = (newUser)=>dispatch=>{
    axios.post("/user-list",newUser).then(res=> {
        dispatch(getusers())
    })
} 

 
export const deleteuser=(id)=> (dispatch,getState)=>{
    axios.delete(`/user-list/${id}`,tokenConfig(getState)).then(res =>{
        dispatch(getusers())
   
    })
}
 

//comandes 
 
export const getcomandes = () => dispatch => {
    
    axios.get("/comande-list").then(resu => {
        dispatch({
           
            type:GET_COMANDES,
            payload1:resu.data
        })
    }) 
}

 
export const addcomandes = (newComande)=>dispatch=>{
    axios.post("/comande-list",newComande).then(res=> {
        dispatch(getcomandes())
    })
} 

 
export const deletecomande=(id)=>(dispatch,getState)=>{
    axios.delete(`/comande-list/${id}`,tokenConfig(getState)).then(res =>{
        dispatch(getcomandes())
   
    })
}
export const editcomande=(id)=> dispatch =>{
    axios.put(`/comande-list/${id}` ).then(res=>{
        dispatch(getcomandes())
    })
}
 

 
//action of tokkens
 export const loadUser = () =>(dispatch,getState) =>{
     dispatch({type:USER_LOADING})

 
     axios.get('/user-list',tokenConfig(getState)).then(res => dispatch({
         type:USER_LOADED,
         payload:res.data
     }))
        .catch(err => {
            dispatch({type:AUTH_ERROR})
        })
 }

 export const returnErrors = (msg , status , id = null) => {
    return {
      type: GET_ERRORS,
      payload: { msg, status, id }
    };
  };
  
  // CLEAR ERRORS
  export const clearErrors = () => {
    return {
      type: CLEAR_ERRORS
    };
  };
  export const register = ({name,email,pasword})=> dispatch =>{
   const config = {
       headers : {
           'content-type':'application/json'
       }
   }

   const body =JSON.stringify ({name,email,pasword})
   axios.post('/user-list',body,config).then(res => dispatch({
       type : REGISTER_SUCCESS,
       payload:res.data
   })).catch(err => {
       dispatch({
           type:REGISTER_FAIL
       })
   })
  }
   
  //login
  export const login= ({email,pasword})=> dispatch =>{
    const config = {
        headers : {
            'content-type':'application/json'
        }
    }
 
    const body =JSON.stringify ({ email,pasword})
    axios.post('/Auth',body,config).then(res => dispatch({
        type :LOGIN_SUCCESS,
        payload:res.data
    })).catch(err => {
        dispatch({
            type:LOGIN_FAIL
        })
    })
   }
  //login

  //loginAdmin
  
  //loginAdmin


  export const logout = () => {
    return {
      type: LOGOUT_SUCCESS
    };
  };

  export const tokenConfig = getState =>{
    const token = getState().token ;

    const config = {
        headers : {
            "Content-type":"application/json"
        }
    }
    if(token){
        config.headers['x-auth-token'] = token
    }
    return config
  }

