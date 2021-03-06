import axios from "axios";
import { Dispatch } from "react";
import { ApiDispatchType, API_FAILED, API_LOADING, GET_ALL_PRODUCTS, GET_PRODUCT } from "./type";

export const getProducts =()=>async(dispatch:Dispatch<ApiDispatchType>)=>{
    try {
        dispatch({
            type:API_LOADING,
            payload:true
        })
        const {data} = await axios.get('products')
        dispatch({
            type:GET_ALL_PRODUCTS,
            payload:{
                data:data,
                loading:false,
                failed:false
            }
        })
    } catch (error) {
        dispatch({
            type:API_FAILED,
            payload:true
         } )
    }
}

export const getProduct =(pk:string)=>async(dispatch:Dispatch<ApiDispatchType>)=>{
    try {
        dispatch({
            type:API_LOADING,
            payload:true
        })
        const {data} = await axios.get(`/product/${pk}`)
        dispatch({
            type:GET_PRODUCT,
            payload:{
                data:data,
                loading:false,
                failed:false
            }
        })
    } catch (error) {
        dispatch({
            type:API_FAILED,
            payload:true
        })
    }
}