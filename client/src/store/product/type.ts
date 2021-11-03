export const API_LOADING = 'API_LOADING'
export const API_FAILED = 'API_FAILED'
export const GET_ALL_PRODUCTS ='GET_ALL_PRODUCTS'

export interface Loading{
    type:typeof API_LOADING
    payload:boolean
}
export interface getAllProducts{
    type:typeof GET_ALL_PRODUCTS
    payload:any
}
export interface failed{
    type:typeof API_FAILED
    payload:boolean
}
export interface ProdType {
    _id: string;
    name: string;
    image: string;
    description: string;
    brand: string;
    category: string;
    price: Number;
    countInStock: number;
    rating: number;
    numReviews: number;
  }
export type ApiDispatchType = Loading|failed|getAllProducts
