import React from 'react'
import { mount } from 'enzyme'
import moxios from 'moxios'
import Root from 'Root'
import App from 'components/App'

beforeEach(() => {
  moxios.install()
  moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
    status: 200,
    response: [{ name: 'Fetched #1' }, { name: 'Fetched #2' }]
  })
})

afterEach(() => {
  moxios.uninstall()
})

it('can fetch a list of comments and display them', (done) => {
  // Attempt to render the entire app
  const component = mount(
    <Root>
      <App />
    </Root>
  )
  // find the 'fetchComments' button and click it
  component.find('.fetch-comments').simulate('click')

  // introduce a tiny pause to wait for moxios response
  moxios.wait(() => {
    component.update()
    // Expect to find a list of comments
    expect(component.find('li').length).toEqual(2)
    done()
    component.unmount()
  })
})