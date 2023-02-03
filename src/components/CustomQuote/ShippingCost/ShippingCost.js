import React from 'react'
import { getCustomPrice } from '../../../utils/utils'

const ShippingCost = ({ startingCountry, destinationCountry, totalCost }) => {
    return (
        <div className="shipping-cost">
            <div className="route-container">
                <p>{`${startingCountry} -> ${destinationCountry}`}</p>
            </div>
            <div className="price-container">
                <p>US$ {getCustomPrice(totalCost)}</p>
            </div>
        </div>
    )
}

export default ShippingCost