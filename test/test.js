const { expect } = require('chai')

describe('Mocha Chai works', () => {
  it('should expect basic testing', () => {
    expect(() => {}).to.not.throw()
    expect({ a: 1 }).to.not.have.property('b')
    expect([1, 2]).to.be.an('array').that.does.not.include(3)
  })
})
