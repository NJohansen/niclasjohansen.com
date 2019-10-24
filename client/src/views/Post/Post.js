import React from 'react'
import Document from '../../components/Document/Document'
import './Post.css'

export default ({ year, month, day, post }) => (
  <div>
    <Document path={`${year}-${month}-${day}-${post}`} />
  </div>  
)