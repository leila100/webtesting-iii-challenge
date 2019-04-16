import React from "react"
import renderer from "react-test-renderer"
import { render, cleanup } from "react-testing-library"

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
})
