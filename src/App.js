import { useState } from 'react'
import "./app.css"
import TextInput from './components/TextInput/TextInput'
import SelectInput from './components/SelectInput/SelectInput'
import CustomButton from './components/CustomButton/CustomButton'
import { shippingOptions, defaultShippingValue } from './utils/utils'

function App() {
  const [startingCountry, setStartingCountry] = useState("")
  const [destinationCountry, setDestinationCountry] = useState("")
  const [quotePrice, setQuotePrice] = useState("")
  const [shippingChannel, setShippingChannel] = useState(defaultShippingValue)

  const calculateQuote = () => {
    console.log("Hello!")
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
    </div>
  );
}

export default App;
