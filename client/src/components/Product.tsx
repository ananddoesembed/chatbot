import { Card } from 'react-bootstrap'
import React from 'react'
import Rating from './Rating'
import { Link } from 'react-router-dom'

interface productProp {
    product:any
}
const Product:React.FC<productProp> =({product})=> {
    return (
        <Link to={`product/${product._id}`} className="my-3 p-3 rounded" style={{textDecoration:"none",color:'#000'}}>

          <Card.Img src={product.image}/>
          <Card.Body>
              <Card.Title>
                  <strong>{product.name}</strong>
              </Card.Title>
              <Card.Text as="div">
                  <div className="my-3">
                      {product.rating} from {product.numReviews} reviews
                      <Rating color={"yellow"} value={product.rating} text={product.numReviews}/> 
                  </div>
              </Card.Text>
              <Card.Text as="h3">
                  
                      ${product.price} 
              </Card.Text>
          </Card.Body>
        </Link>
    )
}

export default Product
