import { saveComment } from 'actions'
import { SAVE_COMMENT } from 'actions/types'

describe('saveComment', () => {
  it('has the correct type', () => {
    const action = saveComment()
    expect(action.type).toEqual(SAVE_COMMENT)
  })

  it('has the right payload', () => {
    const action = saveComment('my comment')
    expect(action.payload).toEqual('my comment')
  })
})