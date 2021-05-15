import { useState } from 'react'

const useForm = (initialState = {}) => {
  const [values, setvalues] = useState(initialState)

  const reset = () => {
    setvalues(initialState)
  }

  const handleInputChange = (name, value) => {
    setvalues({
      ...values,
      [name]: value
    })
  }

  return [values, handleInputChange, reset]
}

export default useForm
