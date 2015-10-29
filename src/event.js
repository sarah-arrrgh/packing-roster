var Event = (function(){

  function Event(snapshot){
    this.title = snapshot.title
    this.date = snapshot.date
    this.time = snapshot.time
    this.number = snapshot.number
    this.description = snapshot.description
    this.eventID = generateEventID(this.date, this.title)
    this.packers = snapshot.packers
  }

  function generateEventID(date, title) {
    return(date.replace(/[^A-Z0-9]+/ig, "") + title.replace(/[^A-Z0-9]+/ig, ""))
  }


  Event.prototype.numberOfPackers =function() {
    if (this.packers != null) {
      return(Object.keys(this.packers).length)
     
    }
    else {
      return(0)
    }
  }

  Event.prototype.packerNames =function() {
    if (this.packers != null) {
      var names = Object.keys(this.packers)
      for (var i = 0; i < names.length; i++) {
        var val = this.packers[names[i]]

        console.log("val: " + val) 
      }
    }
  }


  return Event
})()

 // module.exports = Event