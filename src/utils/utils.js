
export const shippingOptions = [
    {
        value: "ocean",
        label: "Ocean"
    },
    {
        value: "air",
        label: "Air"
    },
]

export const defaultShippingValue = "ocean"

export const validateRequiredInputs = (requiredInputs) => {
    if(!requiredInputs || typeof requiredInputs !== 'object') return false
    const arrayValues = Object.values(requiredInputs)
    return arrayValues.filter(value => value === "" ).length === 0
}