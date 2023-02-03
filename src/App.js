import { useState } from 'react'
import "./app.css"
import TextInput from './components/TextInput/TextInput'
import SelectInput from './components/SelectInput/SelectInput'
import CustomButton from './components/CustomButton/CustomButton'
import CustomQuote from './components/CustomQuote/CustomQuote'
import ErrorMessage from './components/ErrorMessage/ErrorMessage'
import { shippingOptions, defaultShippingValue, validateRequiredInputs, getShippingDays } from './utils/utils'

function App() {
  const [startingCountry, setStartingCountry] = useState("")
  const [destinationCountry, setDestinationCountry] = useState("")
  const [quotePrice, setQuotePrice] = useState("")
  const [shippingChannel, setShippingChannel] = useState(defaultShippingValue)
  const [isValidQuote, setIsValidQuote] = useState(false)
  const [errorMessage, setErrorMessage] = useState(null)
  const [quoteData, setQuoteData] = useState({})

  const calculateQuote = () => {
    const dataToValidate = {
      startingCountry,
      destinationCountry,
      quotePrice,
      shippingChannel
    }
    const isValid = validateRequiredInputs(dataToValidate)
    setIsValidQuote(isValid)
    setErrorMessage(isValid ? null : "Missing Information!")
    
    const newDays = getShippingDays(shippingChannel)
    setQuoteData({...dataToValidate, shippingDays: newDays})
  }

  return (
    <div className="App">
      <div className="quote-inputs-container">
        <TextInput type="text" label="Starting Country" value={startingCountry} onStateChangeAction={e => setStartingCountry(e.target.value)} />
        <TextInput type="text" label="Destination Country" value={destinationCountry} onStateChangeAction={e => setDestinationCountry(e.target.value)} />
        <TextInput type="number" label="Quote Price" value={quotePrice} onStateChangeAction={e => setQuotePrice(e.target.value)} />
        <SelectInput label="Shipping channel" options={shippingOptions} defaultValue={shippingChannel} onStateChangeAction={e => setShippingChannel(e.target.value)} />
        <CustomButton variant="primary" label="Create Quote" onClickAction={calculateQuote} />
      </div>
      {isValidQuote && (
        <CustomQuote quoteData={quoteData} />
      )}
      {errorMessage && (
        <ErrorMessage message={errorMessage} />
      )}
    </div>
  );
}

export default App;
