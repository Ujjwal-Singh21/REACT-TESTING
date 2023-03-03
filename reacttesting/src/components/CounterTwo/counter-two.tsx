import { CounterTwoProps } from './counter-two.types'

export const CounterTwo = (props: CounterTwoProps) => {
  return (
    <div>
      <div> Counter Two </div>
      <h3> {props.count} </h3>

      {
        props.handleIncrement && ( <button onClick={props.handleIncrement}> Increment </button>)
      }

      {
        props.handleDecrement && ( <button onClick={props.handleDecrement}> Decrement </button>)
      }
    </div>
  )
}
