import { failed, Loading } from "../product/type";

export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

export interface ITEM_TYPE{
    _id:string,
    name:string,
    image:string,
    price:number,
    qty:number,
    countInStock:number
}
export interface ITEM extends ITEM_TYPE{
    loading:boolean,
    failed:boolean
}
export interface addItem {
  type: typeof ADD_TO_CART;
  payload: ITEM;
}

export type CartDispatchType =  addItem|Loading|failed
