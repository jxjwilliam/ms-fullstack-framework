const sinon = require('sinon')
const { assert } = require('chai')

function once(fn) {
  let [called, returnValue] = [false]
  return function () {
    if (!called) {
      called = true
      // eslint-disable-next-line prefer-rest-params
      returnValue = fn.apply(this, arguments)
    }
    return returnValue
  }
}

describe('Sinon', () => {
  it('calls the original function', () => {
    const callback = sinon.fake()
    const proxy = once(callback)

    proxy()

    assert(callback.called)
  })

  it('calls the original function only once', () => {
    const callback = sinon.fake()
    const proxy = once(callback)

    proxy()
    proxy()

    assert(callback.calledOnce)
    // ...or:
    // assert.equals(callback.callCount, 1);
  })

  it('calls original function with right this and args', () => {
    const callback = sinon.fake()
    const proxy = once(callback)
    const obj = {}

    proxy.call(obj, 1, 2, 3)

    assert(callback.calledOn(obj))
    assert(callback.calledWith(1, 2, 3))
  })

  it('returns the return value from the original function', () => {
    const callback = sinon.fake.returns(42)
    const proxy = once(callback)

    assert.equals(proxy(), 42)
  })
})
