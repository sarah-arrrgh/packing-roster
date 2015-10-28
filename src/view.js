//how to add members to database
//when a member chooses their name and clicks "Join Us", their name is added to an array called pplAssigned
//when pplAssigned.length = numberOfPeople then that event is full
//
//listens for

function displayEvent(title, date, time, number, description, firebaseKey) {
  var eventID = date.replace(/[^A-Z0-9]+/ig, "") + title.replace(/[^A-Z0-9]+/ig, "")
  $('#displayEventsDiv').append("<h3>" + title + "</h3>")
  $('#displayEventsDiv').append("<p><b>Date:</b> " + date + "</p>")
  $('#displayEventsDiv').append("<p><b>Time:</b> " + time + "</p>")
  $('#displayEventsDiv').append("<p><b>Number of people needed:</b> " + number + "</p>")
  $('#displayEventsDiv').append("<p><b>Description:</b> " + description + "</p>")
  $('#displayEventsDiv').append("<div id='whosComingDiv'><p><b>Who's coming?</b></p></div>")
  $('#displayEventsDiv').append("<form id='" + eventID + "Form'></form>")

  //for each member in database (how to add members?) populate drop down list with unused names for this event
  $('#displayEventsDiv #' + eventID + 'Form').append("<select id='memberList'><option value='ange'>Ange</option><option value='sarah'>Sarah</option><option value='leila'>Leila</option><option value='frank'>Frank</option>")
  // for(var i = 0; i < memberList.size; i++) {
  //   $("#memberList").append(memberList.name[i])
  // }

  $('#displayEventsDiv #' + eventID + 'Form').append("<button class='joinUs' id='" + eventID + "Button'>Join Us</button></p>")
  $('#displayEventsDiv').append('<hr width="40%" align="left">')
  $("#displayEventsDiv")[0].scrollTop = $("#displayEventsDiv")[0].scrollHeight;
  addPackerEventListener(eventID, firebaseKey)
};
