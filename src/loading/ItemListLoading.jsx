import React from 'react'
import "./loading.css"

const ItemListLoading = () => {
    return (
        <div className="item-list-loading">
            {Array.from({ length: 32 }).map((_, i) => (
                <div key={i} className="card-loading">
                    <div className="image-card-container-loading">
                    </div>
                    <div className="card-body-loading">
                        <h2 className="card-title-loading"></h2>
                        <p className="card-price-loading"></p>
                        <div className="card-button-loading"></div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ItemListLoading