import { render, screen } from "@testing-library/react";
import { Users } from "./Users";
import { mockedUserNamesArr } from "../mocks/usernamesarray";
import { rest } from "msw";
import { server } from "../mocks/server";


describe('Users', () => { 

  test('renders correctly', () => {
    render(<Users />)
    const textElement = screen.getByText('Users')
    expect(textElement).toBeInTheDocument()
  })

  test('renders a list of users', async () => {
    render(<Users />)
    const users = await screen.findAllByRole('listitem')
    expect(users).toHaveLength(mockedUserNamesArr.length)
  })

  test('renders error message', async () => {
    server.use(
      rest.get('https://jsonplaceholder.typicode.com/users', (req, res, ctx) => {
        return res(
          ctx.status(500)
        )
      })
    )

    render(<Users />)
    const errorMessageElement = await screen.findByText('Error', { exact: false})
    expect(errorMessageElement).toBeInTheDocument()
  })
 })