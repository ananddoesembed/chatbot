import axios from "axios"
import { Dispatch } from "react"
import { API_FAILED, API_LOADING } from "../product/type"
import { ADD_TO_CART, CartDispatchType } from "./type"

export const addItem = (id:string,qty:number) =>async(dispatch:Dispatch<CartDispatchType>)=>{
    try {
        dispatch({
            type:API_LOADING,
            payload:true
        })
        const {data} = await axios.get(`/product/${id}`)
        dispatch({
            type:ADD_TO_CART,
            payload:{
                _id:data._id,
                image:data.image,
                name:data.name,
                price:data.price,
                countInStock:data.countInStock,
                loading:false,
                failed:false,
                qty:qty
            }
        })
    } catch (error) {
        dispatch({
            type:API_FAILED,
            payload:true
         } )
    }
}

