import React from 'react'
import { FaPlane } from 'react-icons/fa';
import { IoMdBoat } from 'react-icons/io';
import { defaultShippingValue, getCustomDate } from '../../../utils/utils'

const ShippingInformation = ({ channel, minDay, maxDay }) => {
    return (
        <div className="shipping-information">
            <div className="title-container">
                <div className="icon-container">
                    {
                        channel === defaultShippingValue ?
                        <IoMdBoat color='blue' /> :
                        <FaPlane color='blue' />
                    }
                </div>
                <p>
                    {
                        channel === defaultShippingValue ?
                        'Traditional ocean freight':
                        'Traditional air freight'
                    }
                </p>
            </div>
            <div className="delivery-container">
                <h4>{minDay}-{maxDay} days</h4>
                <p>Estimated delivery</p>
                <p className="delivery-information">{getCustomDate(minDay)} - {getCustomDate(maxDay)}</p>
            </div>
        </div>
    )
}

export default ShippingInformation