import React from 'react'
import "./customButton.css"

const CustomButton = ({ variant, label, onClickAction }) => {
    return (
        <button
            id='custom-button'
            className={variant}
            onClick={onClickAction}
        >
            {label}
        </button>
    )
}

export default CustomButton