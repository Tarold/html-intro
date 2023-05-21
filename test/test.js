const assert = require('assert')
const { sum } = require('./../utils/math')

describe('Testing math.sum', function () {
  it('hould return 4 when 2:number + 2:number', function () {
    assert.equal(sum(2, 2), 4)
  })
  it('should return 4 when "2": string + "2": string', function () {
    assert.equal(sum('2', '2'), 4)
  })
})
