import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import {useDispatch,useSelector} from 'react-redux'
import { getProducts } from "../store/product/actions";
import Product from "../components/Product";
import { RootState } from "../store";

function Homescreen() {
  const products = useSelector((state:RootState)=>state.product.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(getProducts)

  },[])
  
  return (
    <div>
      <h1>Products</h1>
      <Row>
        {products.map((product) => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product} key={product._id} />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Homescreen;
