import { render, screen } from "@testing-library/react";
import user from '@testing-library/user-event'
import { Counter } from "./Counter";

describe('Counter', () => {

  // 1
  test('renders correctly', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading');
    expect(countElement).toBeInTheDocument();

    const buttonElement = screen.getByRole('button', {
      name: 'Increment'
    })
    expect(buttonElement).toBeInTheDocument()
  })


  // 2
  test('renders a count of 0', () => {
    render(<Counter />)
    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('0');
  })


  // 3
  test('renders a count of 1 after clicking the Increment button', async () => {
  user.setup()  // creating an instance of user-event 
  render(<Counter />)

  const incrementButtonElement = screen.getByRole('button', {
    name: 'Increment'
  })

  await user.click(incrementButtonElement)
  const countElement = screen.getByRole('heading');
  expect(countElement).toHaveTextContent('1');
  })

  
  // 4
  test('renders a count of 2 after double clicking increment button', async () => {
    user.setup() // creating an instance of user-event 
    render(<Counter />)

    const incrementButtonElement = screen.getByRole('button', {
      name: 'Increment'
    })

    await user.dblClick(incrementButtonElement);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('2');
  })


  // 5
  test('render a count of 10 after clicking the Set button', async () => {
    user.setup()
    render(<Counter />)

    // role of an input of type number is spinbutton and not textbox
    const inputAmountElement = screen.getByRole('spinbutton'); 
    await user.type(inputAmountElement, '10')
    expect(inputAmountElement).toHaveValue(10);

    const setButtonElement = screen.getByRole('button', {
      name: 'Set' 
    })
    await user.click(setButtonElement);

    const countElement = screen.getByRole('heading');
    expect(countElement).toHaveTextContent('10')
  })


  // 6 
  test('Elements are focussed in the right order', async () => {
    user.setup();
    render(<Counter />);

    const incrementButtonElement = screen.getByRole('button', { name: 'Increment'});
    const inputAmountElement = screen.getByRole('spinbutton');
    const setButtonElement = screen.getByRole('button', { name: 'Set'})

    await user.tab()
    expect(incrementButtonElement).toHaveFocus();

    await user.tab()
    expect(inputAmountElement).toHaveFocus();

    await user.tab()
    expect(setButtonElement).toHaveFocus();
  })  
   
})