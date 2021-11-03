import { ApiDispatchType, GET_ALL_PRODUCTS, ProdType } from "./type"

interface statetype{
    products:ProdType[]
    loading:boolean
    failed:boolean
}

const INITIAL_STATE ={
    products:[],
    loading:false,
    failed:false
}

const productReducer =(state:statetype=INITIAL_STATE,action:ApiDispatchType)=>{


    switch(action.type){
        case GET_ALL_PRODUCTS:{
            console.log(action.payload)
            return{
                ...state,
                products:[...action.payload.data],
                loading:action.payload.loading,
                failed:action.payload.failed
            }
        }
        default :{
            return state
        }
}

}
export default productReducer