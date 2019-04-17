import React from "react"
import renderer from "react-test-renderer"
import { render, fireEvent, cleanup } from "react-testing-library"

import Dashboard from "./Dashboard"

afterEach(cleanup)

describe("<Dashboard />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Dashboard />)

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    render(<Dashboard />)
  })

  it("Switch Display to closed when clicking on close gate button in Controls", () => {
    const { getByText } = render(<Dashboard />)

    const closeGateBtn = getByText(/close gate/i)

    fireEvent.click(closeGateBtn)
    getByText(/closed/i)
  })

  it("Switch Display to locked when clicking on lock gate button in Controls", () => {
    const { getByText } = render(<Dashboard />)

    // get close gate button and click it
    const closeGateBtn = getByText(/close gate/i)
    fireEvent.click(closeGateBtn)

    // once gate is closed, can lock it
    //get lock gate button and click it
    const lockGateBtn = getByText(/lock gate/i)
    fireEvent.click(lockGateBtn)

    //Display should say locked
    getByText(/locked/i)
  })
})
