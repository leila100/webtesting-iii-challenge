import React from "react"
import renderer from "react-test-renderer"
import { render, cleanup } from "react-testing-library"

import Display from "./Display"
import "../index.css"

afterEach(cleanup)

describe("<Display />", () => {
  it("matches snapshot", () => {
    const tree = renderer.create(<Display />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("matches snapshot with props: closed - locked", () => {
    const tree = renderer.create(<Display closed locked />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("matches snapshot with props: closed - unlocked", () => {
    const tree = renderer.create(<Display closed locked={false} />)
    expect(tree.toJSON()).toMatchSnapshot()
  })

  it("renders without crashing", () => {
    render(<Display />)
  })

  it("shows open and unlocked when passed no props", () => {
    const { getByText } = render(<Display />)
    getByText(/open/i)
    getByText(/unlocked/i)
  })

  it("displays Closed if the closed prop is true", () => {
    const { getByText } = render(<Display closed />)
    getByText(/closed/i)
  })

  it("displays open if the closed prop is false", () => {
    const { getByText } = render(<Display closed={false} />)
    getByText(/open/i)
  })

  it("displays Locked if the locked prop is true", () => {
    const { getByText } = render(<Display locked />)
    getByText(/locked/i)
  })

  it("displays unlocked if the locked prop is false", () => {
    const { getByText } = render(<Display locked={false} />)
    getByText(/unlocked/i)
  })
})
