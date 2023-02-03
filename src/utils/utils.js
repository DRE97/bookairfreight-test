
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

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

export const getShippingDays = (channel) => {
    const minDay = channel === defaultShippingValue ? getRandomArbitrary(25, 30) : getRandomArbitrary(3, 7)
    const maxDay = minDay + (channel === defaultShippingValue ? getRandomArbitrary(5, 10) : getRandomArbitrary(2, 4))

    return {
        minDay: Math.floor(minDay),
        maxDay: Math.floor(maxDay)
    }
}

export const getCustomDate = (days) => {
    const currentDate = new Date()
    const newDate = new Date(currentDate.setDate(currentDate.getDate() + days))
    const formatter = new Intl.DateTimeFormat('en-US', { month: 'short', day: '2-digit' })
    return `${formatter.format(newDate)}`
}

export const getCustomPrice = (price) => {
    const numberFormat = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
    return numberFormat.format(price)
}