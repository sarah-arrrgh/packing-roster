//displays a new event using info passed into function. called in index.js

function displayEvent(title, date, time, number, description, firebaseKey) {
  var eventID = date.replace(/[^A-Z0-9]+/ig, "") + title.replace(/[^A-Z0-9]+/ig, "")
  var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");

  $('#displayEventsDiv').append("<h3>" + title + "</h3>")
  $('#displayEventsDiv').append("<p><b>Date:</b> " + date + "</p>")
  $('#displayEventsDiv').append("<p><b>Time:</b> " + time + "</p>")
  $('#displayEventsDiv').append("<p><b>Number of people needed:</b> " + number + "</p>")
  $('#displayEventsDiv').append("<p><b>Description:</b> " + description + "</p>")
  $('#displayEventsDiv').append("<div id='" + eventID + "PackersDiv'><p><b>Packers:</b></p></div>")
  $('#displayEventsDiv').append("<form id='" + eventID + "PackersForm'></form>")

  //for each member in database (how to add members?) populate drop down list with unused names for this event
  $('#displayEventsDiv #' + eventID + 'PackersForm').append("<select id='memberList'><option value='ange'>Ange</option><option value='sarah'>Sarah</option><option value='leila'>Leila</option><option value='frank'>Frank</option>")
  // for(var i = 0; i < memberList.size; i++) {
  //   $("#memberList").append(memberList.name[i])
  // }

  $('#displayEventsDiv #' + eventID + 'PackersForm').append("<button class='joinUs' id='" + eventID + "PackersButton'>Sign me up!</button></p>")
  $('#displayEventsDiv').append('<hr width="40%" align="left">')
  $("#displayEventsDiv")[0].scrollTop = $("#displayEventsDiv")[0].scrollHeight;
  addPackerEventListener(eventID, firebaseKey)
  updateFromFirebase(eventID, packersRef)
};
