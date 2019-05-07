var assert = require('chai').assert
var exercise = require('../store2')

describe('Store2 Exercises', function() {
  describe('#accessesingData1()', function () {
    it('returns array of dates', function () {
      assert.deepEqual(exercise.accessesingData1(), ['2015-01-10', '2015-01-10'])
    })
  })

  describe('#accessesingData2()', function () {
    it('returns 2', function () {
      assert.equal(exercise.accessesingData2(), 2)
    })
  })

  describe('#updatingData1()', function () {
    it('returns boolean', function () {
      assert.deepEqual(exercise.updatingData1(), false)
    })
  })

  describe('#updatingData2()', function () {
    it('returns boolean', function () {
      assert.deepEqual(exercise.updatingData2(), true)
      require('../store2/store2-data')['sale dates']['Caramel Twists'].push('2015-01-10')
    })
  })

  describe('#loopingData1()', function () {
    it('returns object with dates as key and quantity as value', function () {
      var result = {
        '2015-01-06': 2,
        '2015-01-07': 1,
        '2015-01-08': 2,
        '2015-01-09': 2,
        '2015-01-10': 3
      }
      assert.deepEqual(exercise.loopingData1(), result)
    })
  })

  describe('#loopingData2()', function () {
    it('returns date string', function () {
      assert.equal(exercise.loopingData2(), '2015-01-10')
    })
  })

  xdescribe('#challenge1()', function () {
    it('returns an object of candies and total revenue rounded to two numbers', function () {
      var result = {
        'Dark Chocolate Crunchies': '17.16',
        'Mint Wafers': '4.36',
        'Peppermint Poppers': '16.66',
        'Peanut Butter Buttered Peanuts': '3.58',
        'Berry Bites': '47.34',
        'Caramel Twists': '5.00',
        'Banana Bunches': '9.06'
      }
      assert.deepEqual(exercise.challenge1(), result)
    })
  })
})
