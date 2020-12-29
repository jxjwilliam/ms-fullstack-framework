const assert = require('assert')
const { expect } = require('chai')
const sinon = require('sinon')

describe('smoke test', function () {
  it('should assert check equality work', function () {
    assert.equal(true, true)
  })
  it('should expect checkk equality work', function () {
    expect(true).to.be.true
    expect({ a: 1 }).to.not.have.property('b')
    expect([1, 2]).to.be.an('array').that.does.not.include(3)
  })
})

describe('sinon: spy, stub, mock', function () {
  let getIndexPage
  before(function () {
    getIndexPage = (req, res) => {
      res.send('Hey')
    }
  })
  it('should getIndexPage return page', function () {
    const [req, res] = [
      {},
      {
        send: sinon.spy(),
      },
    ]

    getIndexPage(req, res)
    expect(res.send.calledOnce).to.be.true
    expect(res.send.firstCall.args[0]).to.equal('Hey')
  })

  context('add User', function () {
    const user = {
      addUser: name => {
        this.name = name
      },
      getUser: () => this.name,
    }

    it('should add a user', function () {
      sinon.spy(user, 'addUser')
      user.addUser('John Doe')
      expect(user.addUser.calledOnce).to.be.true
      expect(user.getUser()).to.equal('John Doe')
    })
  })
})
