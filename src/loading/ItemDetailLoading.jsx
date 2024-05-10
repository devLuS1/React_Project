import React from 'react'
import "./loading.css"

const ItemDetailLoading = () => {
  return (
    <div className="item-detail-loading">
      <div className="image-detail-loading">
      </div>
      <div className="text-detail-loading">
        <h1 className="name-detail-loading"></h1>
        <p className="description-detail-loading"></p>
        <p className="price-detail-loading"></p>
        <div>
          <div className="itemCount-loading">
            <div className="itemCount-loading-subtract"></div>
            <p className="itemCount-loading-count"></p>
            <div className="itemCount-loading-add"></div>
          </div>
          <div className="addToCart-loading">
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailLoading