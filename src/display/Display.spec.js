import React from "react"
import renderer from "react-test-renderer"
import { render, cleanup } from "react-testing-library"

import Display from "./Display"

afterEach(cleanup)

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />)

    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    render(<Display />)
  })
})
