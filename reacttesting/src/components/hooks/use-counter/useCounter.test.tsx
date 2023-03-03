import { act, renderHook } from "@testing-library/react";
import { useCounter } from "./useCounter";

describe('useCounter testing', () => {

  test('should render the initial count', () => {
    const { result } = renderHook(useCounter)
    expect(result.current.count).toBe(0)
  })

  test('should accept and render the same initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: {
        initialCount: 55
      }
    })

    expect(result.current.count).toBe(55);
  })

  test('test increment button', () => {
    const { result } = renderHook(useCounter)
    // result.current.increment();
    act(() => result.current.increment())
    expect(result.current.count).toBe(1)
  })

  test('test decrement button', () => {
    const { result } = renderHook(useCounter)
    act(() => result.current.decrement())
    expect(result.current.count).toBe(-1)
  })
})