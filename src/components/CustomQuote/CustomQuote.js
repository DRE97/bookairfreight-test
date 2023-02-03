import React from 'react'
import ShippingInformation from './ShippingInformation/ShippingInformation'
import ShippingCost from './ShippingCost/ShippingCost'
import "./customQuote.css"

const CustomQuote = ({ quoteData }) => {
    const {
        startingCountry,
        destinationCountry,
        quotePrice,
        shippingChannel,
        shippingDays
    } = quoteData

    return (
        <div className="custom-quote-container">
            <ShippingInformation
                channel={shippingChannel}
                minDay={shippingDays.minDay}
                maxDay={shippingDays.maxDay}
            />
            <ShippingCost
                startingCountry={startingCountry}
                destinationCountry={destinationCountry}
                totalCost={quotePrice}
            />
        </div>
    )
}

export default CustomQuote