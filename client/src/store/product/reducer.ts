import { ApiDispatchType, API_FAILED, API_LOADING, GET_ALL_PRODUCTS, GET_PRODUCT, ProdType } from "./type"

interface statetype{
    products:ProdType[]
    loading:boolean
    failed:boolean
    product:ProdType
}

const INITIAL_STATE ={
    products:[],
    loading:false,
    failed:false,
    product:{
        _id: "",
        name: "",
        image: "",
        description: "",
        brand: "",
        category: "",
        price: 0,
        countInStock: 0,
        rating: 0,
        numReviews:0
    }
}

const productReducer =(state:statetype=INITIAL_STATE,action:ApiDispatchType)=>{
    switch(action.type){
        case API_LOADING:{
            return{
                ...state,
                loading:action.payload,
                falied:false
            }
        }
        case API_FAILED:{
            return{
                ...state,
                failed:action.payload,
                loading:false
            }
        }
        case GET_ALL_PRODUCTS:{
            console.log(action.payload)
            return{
                ...state,
                products:[...action.payload.data],
                loading:action.payload.loading,
                failed:action.payload.failed
            }
        }
        case GET_PRODUCT:{
            return{
                ...state,
                product:action.payload.data,
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