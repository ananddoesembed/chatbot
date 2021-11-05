import React, { useEffect } from "react";
import { Col, Row, } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/product/actions";
import Product from "../components/Product";
import { RootState } from "../store";
import Loader from "../components/Loader";
import Failed from "../components/Failed";

function Homescreen() {
  const { products, loading, failed } = useSelector(
    (state: RootState) => state.product
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
console.log(loading,failed)
  return (
    <div style={{position:"relative"}}>
      {loading ? (
       <Loader/>
      ) : failed ? (
        <Failed/>
      ) : (
        <div className="">
          <h1>Products</h1>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} key={product._id} />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </div>
  );
}

export default Homescreen;
