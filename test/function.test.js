const assert = require('assert')
const { sum } = require('../utils/math')
const { expect } = require('chai')

describe('Testing math.sum', function () {
  it('hould return 4 when 2:number + 2:number', function () {
    assert.equal(sum(2, 2), 4)
  })
  it('should return 4 when "2": string + "2": string', function () {
    assert.equal(sum('2', '2'), 4)
  })
  it('should return Infinity when Number.MAX_VALUE + Number.MAX_VALUE', function () {
    const result = sum(Number.MAX_VALUE, Number.MAX_VALUE)
    const expected = Infinity
    expect(result).to.equal(expected)
  })
})
