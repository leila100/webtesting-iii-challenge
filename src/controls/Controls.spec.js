import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent, cleanup } from "react-testing-library"

import Controls from "./Controls"

afterEach(cleanup)

describe("<Controls />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Controls />)

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    render(<Controls />)
  })

  it("shows lock gate and close gate when passed no props", () => {
    const { getByText } = render(<Controls />)
    getByText(/lock gate/i)
    getByText(/close gate/i)
  })

  it("displays unlock gate if the locked prop is true", () => {
    const { getByText } = render(<Controls locked />)
    getByText(/unlock gate/i)
  })

  it("displays lock gate if the locked prop is false", () => {
    const { getByText } = render(<Controls locked={false} />)
    getByText(/lock gate/i)
  })

  it("displays open gate if the closed prop is true", () => {
    const { getByText } = render(<Controls closed />)
    getByText(/open gate/i)
  })

  it("displays close gate if the closed prop is false", () => {
    const { getByText } = render(<Controls closed={false} />)
    getByText(/close gate/i)
  })

  it("calls toggleClosed functions when close gate button clicked ", () => {
    const toggleMock = jest.fn()
    const { getByText } = render(
      <Controls closed={false} toggleClosed={toggleMock} />
    )
    const closeGateBtn = getByText(/close gate/i)
    fireEvent.click(closeGateBtn)
    expect(toggleMock).toHaveBeenCalledTimes(1)
  })

  it("calls toggleClosed functions when open gate button clicked ", () => {
    const toggleMock = jest.fn()
    const { getByText } = render(<Controls closed toggleClosed={toggleMock} />)
    const openGateBtn = getByText(/open gate/i)
    fireEvent.click(openGateBtn)
    expect(toggleMock).toHaveBeenCalledTimes(1)
  })

  it("calls toggleLocked functions when lock gate button clicked and gate closed ", () => {
    const toggleMock = jest.fn()
    const { getByText } = render(
      <Controls locked={false} closed toggleLocked={toggleMock} />
    )
    const lockGateBtn = getByText(/lock gate/i)
    fireEvent.click(lockGateBtn)
    expect(toggleMock).toHaveBeenCalledTimes(1)
  })
})
