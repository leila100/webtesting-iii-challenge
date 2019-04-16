import React from "react"
import renderer from "react-test-renderer"
import { render, cleanup } from "react-testing-library"

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
})
