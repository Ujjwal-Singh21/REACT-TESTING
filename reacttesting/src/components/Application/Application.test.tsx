import { render, screen } from "@testing-library/react";
import { Application } from "./Application";

// input - textbox, selectDropdown - combobox, anchorTag - link, h1 to h6 - heading, & for button,radio,checkbox same name.

describe('Application', () => {
  
  test('Renders successfully', () => {

    render(<Application />)

    const jobHeadingElement = screen.getByRole('heading', {
      // name: 'Job application form'
      level: 1
    });
    expect(jobHeadingElement).toBeInTheDocument()

    const sectionHeadingElement = screen.getByRole('heading', {
      // name: 'Section 1'
      level: 2
    });
    expect(sectionHeadingElement).toBeInTheDocument()

    const paragraphElement = screen.getByText('All fields are mandatory') // also takes selector prop like getByLabelText
    expect(paragraphElement).toBeInTheDocument()


    // Input name element:
    // -------------------
    const nameElement = screen.getByRole('textbox', {
      name: 'Name'
    });
    expect(nameElement).toBeInTheDocument()

    const nameElement2 = screen.getByLabelText('Name', {
      selector: 'input'
    });
    expect(nameElement2).toBeInTheDocument()

    const nameElement3 = screen.getByPlaceholderText('Fullname');
    expect(nameElement3).toBeInTheDocument()

    const nameElement4 = screen.getByDisplayValue('Vishwas');
    expect(nameElement4).toBeInTheDocument()

    const bioElement = screen.getByRole('textbox', {
      name: 'Bio' // name spelling is case sensitive
    });
    expect(bioElement).toBeInTheDocument()

    const jobLocationElement = screen.getByRole('combobox');
    expect(jobLocationElement).toBeInTheDocument()

    const termElement = screen.getByRole('checkbox');
    expect(termElement).toBeInTheDocument()

    const termElement2 = screen.getByLabelText('I agree to the terms and conditions')
    expect(termElement2).toBeInTheDocument()

    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument()
  })
})