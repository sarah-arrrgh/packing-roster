var Event = (function(){

  function Event(snapshot){
    this.title = snapshot.title
    this.date = snapshot.date
    this.time = snapshot.time
    this.number = snapshot.number
    this.description = snapshot.description
    this.eventID = generateEventID(this.date, this.title)
  }

  function generateEventID(date, title) {
    return(date.replace(/[^A-Z0-9]+/ig, "") + title.replace(/[^A-Z0-9]+/ig, ""))
  }

  return Event
})()

// module.exports = Event