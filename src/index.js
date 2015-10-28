//creates a new event - pushes form values to firebase

$(function() {
  var firebaseWrapper = new FirebaseWrapper()

  $("#newEventForm").submit(function (e) {
    createEvent(firebaseWrapper)
  })

  onEventAdded(firebaseWrapper)
})

function createEvent(firebaseWrapper) {
  firebaseWrapper.createEvent({
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

function onEventAdded(firebaseWrapper) {
  firebaseWrapper.onEventAdded(function(snapshot) {
    var event = snapshot.val()
    displayEvent(event.title, event.date, event.time, event.number, event.description, snapshot.key())
  })
}
