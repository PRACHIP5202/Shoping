import React from 'react'
import { useParams } from 'react-router-dom'

function Productdetails() {
    const {id}=useParams();
  return (
    <div>
        {id} this is the id of the product
        
      Product details
    </div>
  )
}

export default Productdetails
