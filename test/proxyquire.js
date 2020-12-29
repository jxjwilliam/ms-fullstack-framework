import { expect } from 'chai'
import { spy } from 'sinon'
// import proxyquire from 'proxyquire'

function callMyFunction(callback) {
  callback()
}

describe('callMyFunction function', () => {
  it('calls the passed function', () => {
    const callback = spy()

    callMyFunction(callback)

    expect(callback.called).to.eql(true)
  })
})
