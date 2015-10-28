//creates a new event - pushes form values to firebase
var eventRef = new Firebase("https://packing-roster.firebaseio.com/events");

$(function() {
  $("#newEventForm").submit(function (e) {
    createEvent()
  })

  firebaseEventListener()
})

function createEvent() {
  eventRef.push({
    title: $("#titleInput").val(),
    date: $("#dateInput").val(),
    time: $("#timeInput").val(),
    number: $("#numberInput").val(),
    description: $("#descriptionInput").val()
  })
  clearNewEventForm()
}

function clearNewEventForm() {
  $("#titleInput").val("")
  $("#dateInput").val("")
  $("#timeInput").val("")
  $("#numberInput").val("")
  $("#descriptionInput").val("")
}

function firebaseEventListener() {
  //listens on firebase for new events, and updates display
  eventRef.on("child_added", function(snapshot) {
    var event = snapshot.val()
    displayEvent(event.title, event.date, event.time, event.number, event.description, snapshot.key())
  })
}
