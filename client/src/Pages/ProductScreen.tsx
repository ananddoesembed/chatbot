import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col, Image, ListGroup, Row,Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import products from "../products";
import { getProducts } from "../store/product/actions";
import { ProdType } from "../store/product/type";

const ProductScreen = () => {
    const [product,setProduct] = useState<ProdType>()
    const params = useParams<{ id: string }>();
    const dispatch = useDispatch()
    useEffect(()=>{
       dispatch(getProducts)
    },[])
  console.log(params.id);
  return (
    <div>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          {product ? <Image src={product.image} alt="pdt" fluid /> : null}
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product ? product.name : null}</h3>
            </ListGroup.Item>

            <ListGroup.Item>
              <Rating
                value={product ? product.rating : 1}
                text={`${product ? product.numReviews : null} reviews`}
                color={"#f8e825"}
              />
            </ListGroup.Item>

            <ListGroup.Item>
              Price: ${product ? product.price : null}
            </ListGroup.Item>

            <ListGroup.Item>
              Description: {product ? product.description : null}
            </ListGroup.Item>
            <ListGroup.Item>
              status: {product ? product.description : null}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
        <Card>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <Row>
                        <Col>Price:</Col>
                        <Col>
                        <strong>${product?.price}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                    <Row>
                        <Col>Status:</Col>
                        <Col>
                        <strong>$ {product?(product?.countInStock>0?'In stock':'Out of stock'):'out of stock'}</strong>
                        </Col>
                    </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                        <Button className="btn-block" type="button" disabled={product?.countInStock ===0}>ADD TO CART</Button>
                </ListGroup.Item>
            </ListGroup>
        </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
