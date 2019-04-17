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

  it("When gate is open, clicking on lock gate doesn't lock the gate", () => {
    const { getByText } = render(<Dashboard />)
    // by default, the gate is open and unlocked
    // and the buttons are close gate and lock gate

    // get lock gate button and click it
    const lockGateBtn = getByText(/lock gate/i)
    fireEvent.click(lockGateBtn)

    //Display should still say unlocked
    getByText(/unlocked/i)
  })

  it("Clicking on open button if locked does nothing", () => {
    const { getByText } = render(<Dashboard />)

    // get close gate button and click it
    const closeGateBtn = getByText(/close gate/i)
    fireEvent.click(closeGateBtn)

    //get lock gate button and click it
    const lockGateBtn = getByText(/lock gate/i)
    fireEvent.click(lockGateBtn)

    // get open button and click it
    const openBtn = getByText(/open gate/i)
    fireEvent.click(openBtn)

    //Display should still say closed
    getByText(/closed/i)
  })

  it("Clicking on open button if unlocked does open gate", () => {
    const { getByText } = render(<Dashboard />)

    // get close gate button and click it
    const closeGateBtn = getByText(/close gate/i)
    fireEvent.click(closeGateBtn)

    // get open button and click it
    const openBtn = getByText(/open gate/i)
    fireEvent.click(openBtn)

    //Display should still say closed
    getByText(/open/i)
  })
})
