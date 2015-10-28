//pushes info to database from form values
var createEventRef = new Firebase("https://packing-roster.firebaseio.com/events");
$(function() {
  $("#newEventForm").submit(function (e) {
    var title = $("#titleInput").val()
    var date = $("#dateInput").val()
    var time = $("#timeInput").val()
    var number = $("#numberInput").val()
    var description = $("#descriptionInput").val()
    createEventRef.push({title: title, date: date, time: time, number: number, description: description})
    $("#titleInput").val("")
    $("#dateInput").val("")
    $("#timeInput").val("")
    $("#numberInput").val("")
    $("#descriptionInput").val("")
  })

  //this listens for new children, and updates display
  createEventRef.on("child_added", function(snapshot) {
    var event = snapshot.val()
    console.log(snapshot.key())
    displayEvent(event.title, event.date, event.time, event.number, event.description, snapshot.key())
    console.log(event)
  })
})
