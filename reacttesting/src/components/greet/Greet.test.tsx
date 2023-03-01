import {render, screen} from '@testing-library/react'
import { Greet } from './Greet'

// test('Greet renders correctly', () => {
//   // created virtual DOM for Greet component
//   render(<Greet />)
//   // querying virtual DOM using global screen object that has a reference to document object 
//   const textElement = screen.getByText(/hello/i)
//   expect(textElement).toBeInTheDocument()
// })


/* Greet should render the text Hello, and if a name is passed to the component it should render Hello followed by name which is passed */
// Test Driven Development (TDD):
// ------------------------------

// test('Greet renders Hello' , () => {
//   render(<Greet/>)
//   const textElement = screen.getByText('Hello')
//   expect(textElement).toBeInTheDocument()
// })

// test('Green renders Hello followed by passsed name', () => {
//   render(<Greet name='Vishwas' />)
//   const textElement = screen.getByText('Hello Vishwas')
//   expect(textElement).toBeInTheDocument()
// })


// Grouping Tests 
//---------------

describe('Greet', () => {

  test('renders Hello' , () => {
    render(<Greet/>)
    const textElement = screen.getByText(/Hello/)
    expect(textElement).toBeInTheDocument()
  })
  
  // describe('Nested', () => {
  //   test('renders Hello followed by passsed name', () => {
  //     render(<Greet name='Vishwas' />)
  //     const textElement = screen.getByText('Hello Vishwas')
  //     expect(textElement).toBeInTheDocument()
  //   })
  // })

})

describe('Another Greet', () => {
    test('renders Hello followed by passsed name', () => {
      render(<Greet name='Vishwas' />)
      const textElement = screen.getByText('Hello Vishwas')
      expect(textElement).toBeInTheDocument()
    })
  })