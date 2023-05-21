const request = require('supertest')
const app = require('./../app')

describe('Tesing app', function () {
  it('response from GET / should be 200 "Hello"', function (done) {
    request(app).get('/').expect(200).expect('Hello').end(done)
  })
  it('response from GET / should be 200 "Hello"', function (done) {
    request(app).get('/').expect(200).expect('Hello').end(done)
  })
})
