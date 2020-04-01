import React from 'react'
import { mount } from 'enzyme'
import CommentBox from 'components/CommentBox'

let component

beforeEach(() => {
  component = mount(<CommentBox />)
})

afterEach(() => {
  component.unmount()
})

it('has a text area and a button', () => {
  expect(component.find("textarea").length).toEqual(1)
  expect(component.find("button").length).toEqual(1)
})

describe('the text area', () => {
  beforeEach(() => {
    component.find("textarea").simulate('change', { target: { value: 'ffer' } })
    component.update()
  })

  it('has a textarea where users can type in', () => {
    expect(component.find("textarea").prop('value')).toEqual('ffer')
  })

  it('has an empty textarea after submit', () => {
    component.find('form').simulate('submit')
    component.update()
    expect(component.find("textarea").prop('value')).toEqual('')
  })
})