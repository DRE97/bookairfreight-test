import React from 'react'
import "./textInput.css"

const TextInput = ({ type, label, placeholder, value, onStateChangeAction }) => {
    return (
        <div className='text-input-container'>
            {label && (
                <label htmlFor="custom-input">{label}</label>
            )}
            <input
                name="custom-input"
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onStateChangeAction}
            />
        </div>
    )
}

export default TextInput