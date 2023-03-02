import { render, screen, logRoles } from "@testing-library/react";
import { Skills } from "./Skills";

describe('Skills', () => {

  const skills = ['HTML', 'CSS', 'JavaScript']

  test('Renders correctly', () => {
    render(<Skills skills={skills} />)
    const listElement = screen.getByRole('list')
    expect(listElement).toBeInTheDocument()
  })

  test('Renders a list of skills', () => {
    render(<Skills skills={skills} />)
    const listItemElement = screen.getAllByRole('listitem');
    expect(listItemElement).toHaveLength(skills.length)
  })

  test('renders Login button', () => {
    render(<Skills skills={skills}/>)
    const logInElement = screen.getByRole('button', {
      name: 'Login'
    })
    expect(logInElement).toBeInTheDocument()
  })

  test('Not renders Start Learning button', () => {
    render(<Skills skills={skills}/>)
    const startLearningButton = screen.queryByRole('button', {
      name: 'Start Learning'
    })
    expect(startLearningButton).not.toBeInTheDocument()
  })

  test('Start Learning button is eventually displayed', async () => {
   const view =  render(<Skills skills={skills} />)
    logRoles(view.container)
  //  screen.debug()

    const startLearningButton = await screen.findByRole('button', {
      name: 'Start Learning'
    },
    {
      timeout: 2000
    })

    // screen.debug()
    expect(startLearningButton).toBeInTheDocument()
  })
})