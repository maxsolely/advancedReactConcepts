import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'

it('shows a comment box', () => {
  // create a fake div in the terminal
  const div = document.createElement('div')

  // gather all the HTML of the react project and attach 
  // it to the fake div that we made in the terminal
  ReactDOM.render(<App />, div)
  expect(div.innerHTML).toContain('Comment Box')
  // destroy any leftover objects so we do not overcrowd our memory
  ReactDOM.unmountComponentAtNode(div)
})