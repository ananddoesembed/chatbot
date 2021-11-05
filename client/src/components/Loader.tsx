import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loader() {
    return (
        <Spinner animation="border" role="status" style={
            {height:"100px",width:"100px",position:"absolute",top:"50%",left:'50%'}
        }>
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    )
}

export default Loader
