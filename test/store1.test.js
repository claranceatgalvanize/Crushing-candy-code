var assert = require('chai').assert
var exercise = require('../store1')

describe('Store1 Exercises', function() {
  describe('#accessesingData1()', function () {
    it('returns \'4.63\'', function () {
      assert.equal(exercise.accessesingData1(), '4.63')
    })
  })

  describe('#accessesingData2()', function () {
    it('returns 3', function () {
      assert.equal(exercise.accessesingData2(), 3)
    })
  })

  describe('#loopingData1()', function () {
    it('returns array of candy names', function () {
      var result = ['Banana Bunches', 'Peppermint Poppers', 'Mint Wafers', 'Dark Chocolate Crunchies', 'Caramel Twists']
      assert.deepEqual(exercise.loopingData1(), result)
    })
  })

  describe('#loopingData2()', function () {
    it('returns 22', function () {
      assert.equal(exercise.loopingData2(), 22)
    })
  })

  describe('#loopingData3()', function () {
    it('returns array of date strings', function () {
      var dates = [
        '2015-01-06',
        '2015-01-07',
        '2015-01-08',
        '2015-01-09',
        '2015-01-10'
      ]
      var result = exercise.loopingData3()
      assert.equal(result.length, dates.length)
      result.forEach(function(date) {
        assert.notEqual(dates.indexOf(date), -1)
      })
    })
  })

  describe('#loopingData4()', function () {
    it('returns total number of items sold', function () {
      assert.equal(exercise.loopingData4(), 68)
    })
  })

  describe('#loopingData5()', function () {
    it('returns a string of your answer', function () {
      assert.notEqual(exercise.loopingData5(), 'Answer')
    })
  })

  xdescribe('#challenge1()', function () {
    it('returns a number of total revenue, rounded to two numbers', function () {
      assert.deepEqual(exercise.challenge1(), 75.90)
    })
  })
})
