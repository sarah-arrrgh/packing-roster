var chai = require('chai')
var expect = chai.expect

var Event = require('../src/event')

describe('Event', function(){

  describe('create new event', function(){
    it('has an eventID', function(){
      var event = new Event({
        title: "Meat",
        date: "2015-10-31", 
        time: "13:00",
        number: "2", 
        description: "Sorting meat order."
      })
      expect(event.eventID).to.equal("20151031Meat")
    })

    it('stores packers', function(){
      
    })
  })

})