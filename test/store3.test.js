var assert = require('chai').assert
var exercise = require('../store3')

describe('Store3 Exercises', function() {
  describe('#accessesingData1()', function () {
    it('returns object data', function () {
      assert.deepEqual(exercise.accessesingData1(), {
          'cost': 7.89,
          'quantity': 3
      })
    })
  })

  describe('#accessesingData2()', function () {
    it('returns 3', function () {
      assert.equal(exercise.accessesingData2(), 3)
    })
  })

  describe('#accessesingData3()', function () {
    it('returns 5', function () {
      assert.equal(exercise.accessesingData3(), 5)
    })
  })

  describe('#loopingData1()', function () {
    it('returns array of dates', function () {
      var result = [
        '2015-01-06',
        '2015-01-07',
        '2015-01-08',
        '2015-01-09',
        '2015-01-10'
      ]
      assert.deepEqual(exercise.loopingData1(), result)
    })
  })

  describe('#loopingData2()', function () {
    it('returns object of candy names and price', function () {
      var result = {
        'Dark Chocolate Crunchies': 4.29,
        'Mint Wafers': 1.09,
        'Peppermint Poppers': 2.38,
        'Peanut Butter Buttered Peanuts': 1.79,
        'Berry Bites': 7.89,
        'Caramel Twists': 0.5,
        'Banana Bunches': 4.53
      }
      assert.deepEqual(exercise.loopingData2(), result)
    })
  })

  describe('#loopingData3()', function () {
    it('returns integer', function () {
      assert.deepEqual(exercise.loopingData3(), 5)
    })
  })

  xdescribe('#challenge1()', function () {
    it('returns revenue rounded to two numbers', function () {
      assert.deepEqual(exercise.challenge1(), 14.35)
    })
  })
})
