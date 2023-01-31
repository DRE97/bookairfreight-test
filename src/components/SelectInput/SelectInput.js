import React from 'react'
import "./selectInput.css"

const SelectInput = ({ label, options, defaultValue, onStateChangeAction }) => {

    return (
        <div className="select-input-container">
            {label && (
                <label htmlFor="custom-select-input">{label}</label>
            )}
            <select name="custom-select-input" defaultValue={defaultValue} onChange={onStateChangeAction}>
                {options.map((option, index) => (
                    <option key={index} value={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput