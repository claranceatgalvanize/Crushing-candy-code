var assert = require('chai').assert
var exercise = require('../store4')

describe('Store4 Exercises', function() {
  describe('#accessesingData1()', function () {
    it('returns 4.34', function () {
      assert.deepEqual(exercise.accessesingData1(), 4.34)
    })
  })

  describe('#accessesingData2()', function () {
    it('returns 16', function () {
      assert.equal(exercise.accessesingData2(), 16)
    })
  })

  describe('#loopingData1()', function () {
    it('returns array of candy names', function () {
      var candies = [
        'Dark Chocolate Crunchies',
        'Peppermint Poppers',
        'Berry Bites',
        'Banana Bunches'
      ]
      var result = exercise.loopingData1()
      assert.equal(result.length, candies.length)
      result.forEach(function(candy) {
        assert.notEqual(candies.indexOf(candy), -1)
      })
    })
  })

  describe('#loopingData2()', function () {
    it('returns object of candy names and price', function () {
      var result = {
        'Dark Chocolate Crunchies': 4.34,
        'Mint Wafers': 1.14,
        'Peppermint Poppers': 2.43,
        'Peanut Butter Buttered Peanuts': 1.84,
        'Berry Bites': 7.94,
        'Caramel Twists': 0.55,
        'Banana Bunches': 4.58
      }
      assert.deepEqual(exercise.loopingData2(), result)
    })
  })

  xdescribe('#challenge1()', function () {
    it('returns array of two revenue numbers (rounded to two decimals)', function () {
      assert.deepEqual(exercise.challenge1(), [19.44, 3.30])
    })
  })

  xdescribe('#challenge2()', function () {
    it('returns revenue rounded to two numbers', function () {
      assert.deepEqual(exercise.challenge2(), 39.30)
    })
  })

  xdescribe('#challenge3()', function () {
    it('returns revenue rounded to two numbers', function () {
      assert.deepEqual(exercise.challenge3(), 21.70)
    })
  })
})
