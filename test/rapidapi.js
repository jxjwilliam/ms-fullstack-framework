const { expect } = require('chai')
const unirest = require('unirest')

describe('rapidapi', () => {
  it('should rapidapi work', done => {
    unirest
      .post('http://mockbin.com/request')
      .headers({ Accept: 'application/json', 'Content-Type': 'application/json' })
      .send({ parameter: 23, foo: 'bar' })
      .then(response => {
        expect(response.body).to.includes({
          clientIPAddress: '184.65.162.183',
          url: 'http://mockbin.com/request',
          httpVersion: 'HTTP/1.1',
          cookies: {},
          headers: {
            host: 'mockbin.com',
          },
          postData: {
            mimeType: 'application/octet-stream',
            text: '',
            params: [],
          },
          headersSize: 839,
          bodySize: 0,
        })
      })
    done()
  })
})
