import { useState } from 'react'

export const Counter = () => {

  const [count, setCount] = useState(0)
  const [amount, setAmount] = useState(0)

  return (
    <div>
      <h2> {count} </h2>
      <button onClick={() => setCount(prevCount => prevCount + 1)}> Increment </button>

      <input type='number' name='amount' value={amount} onChange={(e) => setAmount(Number(e.target.value))}/>
      <button onClick={() => setCount(amount)}> Set </button>

      
    </div>
  )
}
