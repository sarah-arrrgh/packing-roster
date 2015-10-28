//displays a new event using info passed into function. called in index.js

//TODO turn this into a View object IIFE - only expose the displayEvent method publically
//
//var View = (function() {
//  function View() {
//  }
//
//  public method
//  View.prototype.displayEvent = function(...) {
//   var eventID = generateEventID(date, title)
//  }
//
//  private method
//  function generateEventID(date, title) {} etc.
//
//  return View
//})()

function displayEvent(title, date, time, number, description, firebaseKey) {
  var eventID = generateEventID(date, title)

  displayEventDetails(title, date, time, number, description, eventID)
  displayPackersForm(eventID)
  scrollToTop()
  addPackerEventListener(eventID, firebaseKey)
  updateFromFirebase(eventID, firebaseKey)
};

function generateEventID(date, title) {
  return(date.replace(/[^A-Z0-9]+/ig, "") + title.replace(/[^A-Z0-9]+/ig, ""))
}

function displayEventDetails(title, date, time, number, description, eventID) {
  $('#displayEventsDiv')
    .append("<h3>" + title + "</h3>")
    .append("<p><b>Date:</b> " + date + "</p>")
    .append("<p><b>Time:</b> " + time + "</p>")
    .append("<p><b>Number of people needed:</b> " + number + "</p>")
    .append("<p><b>Description:</b> " + description + "</p>")
    .append("<div id='" + eventID + "PackersDiv'><p><b>Packers:</b></p></div>")
    .append("<form id='" + eventID + "PackersForm'></form>")
    .append('<hr width="40%" align="left">')
}

function displayPackersForm(eventID) {
  $('#displayEventsDiv #' + eventID + 'PackersForm')
    .append("<select id='memberList'><option value='ange'>Ange</option><option value='sarah'>Sarah</option><option value='leila'>Leila</option><option value='frank'>Frank</option>")
    .append("<button class='joinUs' id='" + eventID + "PackersButton'>Sign me up!</button></p>")
}

function scrollToTop() {
  $("#displayEventsDiv")[0].scrollTop = $("#displayEventsDiv")[0].scrollHeight;
}
