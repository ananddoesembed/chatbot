import React, { useEffect, useState } from "react";
import {
  Card,
  Col,
  Image,
  ListGroup,
  Row,
  Button,
  Form,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import Rating from "../components/Rating";
import { RootState } from "../store";
import { getProduct } from "../store/product/actions";

const ProductScreen = () => {
  const product = useSelector((state: RootState) => state.product.product);
  const history = useHistory();
  const [qty, setQty] = useState(0);
  const params = useParams<{ id: string }>();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(params.id));
  }, [dispatch, params.id]);
  console.log(product);
  const addToCart = () => {
    history.push(`/cart/${params.id}/?qty${qty}`);
  };
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
              {product.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Qty</Col>
                    <Col xs="auto" className="my-1">
                      <Form.Control
                        as="select"
                        value={qty}
                        type="number"
                        onChange={(e) =>
                          setQty(parseInt(e.currentTarget.value))
                        }
                      >
                        {[...Array(product.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </Form.Control>
                    </Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    <strong>
                      ${" "}
                      {product
                        ? product?.countInStock > 0
                          ? "In stock"
                          : "Out of stock"
                        : "out of stock"}
                    </strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className="btn-block"
                  type="button"
                  onClick={addToCart}
                  disabled={product?.countInStock === 0}
                >
                  ADD TO CART
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default ProductScreen;
