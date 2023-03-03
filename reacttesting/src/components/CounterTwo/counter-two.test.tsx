import { render, screen } from "@testing-library/react";
import { CounterTwo } from "./counter-two";
import user from '@testing-library/user-event'

describe('CounterTwo', () => { 

  // normal rendering testing
  test('CounterTwo renders correctly', () => {
    render(<CounterTwo count={0}/>)
    const textElement = screen.getByText('Counter Two')
    expect(textElement).toBeInTheDocument()
  })


  // handlers working testing
  test('Increment and Decrement handlers are called', async () => {
    user.setup()
    
    // Creates a mock function. Optionally takes a mock implementation.
    const incrementHandler = jest.fn();
    const deccrementHandler = jest.fn();

    render(<CounterTwo count={0} handleIncrement={incrementHandler} handleDecrement={deccrementHandler}/>)

    const incrementButton = screen.getByRole('button', {
      name: 'Increment'
    })

    const decrementButton = screen.getByRole('button', {
      name: 'Decrement' 
    })

    await user.click(incrementButton)
    await user.click(decrementButton)

    expect(incrementHandler).toHaveBeenCalledTimes(1)
    expect(deccrementHandler).toHaveBeenCalledTimes(1)
  })
 })