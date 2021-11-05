import { ITEM_TYPE } from "./type";

export const  findItem =(item:ITEM_TYPE,cartArray:Array<ITEM_TYPE>)=>{

 const existItem = cartArray.find((cartItem)=>cartItem._id===item._id)
 if(existItem){
  return  cartArray.map(x=>x._id===item._id?item:x)[0]
 }
 return item
}