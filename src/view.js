var View = (function() {
 function View() {
 }

 // public method
  View.prototype.displayEvent = function(snapshot) {

    var event = new Event(snapshot.val())
    event.numberOfPackers()

    displayEventDetails(event)
    displayPackersForm(event.eventID)
    scrollToTop()
    addPackerEventListener(event.eventID, snapshot.key())
    updateFromFirebase(event.eventID, snapshot.key())
  }

  function displayEventDetails(event) {
    $('#displayEventsDiv')
    .append("<h3>" + event.title + "</h3>")
    .append("<p><b>Date:</b> " + event.date + "</p>")
    .append("<p><b>Time:</b> " + event.time + "</p>")
    .append("<p><b>Number of people needed:</b> " + event.number + "</p>")
    .append("<p><b>Description:</b> " + event.description + "</p>")
    .append("<p><b>Packers:</b></p>")
    .append("<div id='" + event.eventID + "PackersDiv'></div>")
    .append("<form id='" + event.eventID + "PackersForm'></form>")
    .append('<hr width="40%" align="left">')
  }

  function displayPackersForm(eventID) {
    $('#displayEventsDiv #' + eventID + 'PackersForm')
    .append("<select id='memberList'><option value='ange'>Ange</option><option value='sarah'>Sarah</option><option value='leila'>Leila</option><option value='frank'>Frank</option>")
    .append("<button class='joinUs' id='" + eventID + "PackersButton'>Sign me up!</button></p>")
  }

  function addPackerEventListener(eventID, firebaseKey){
    $("#" + eventID + "PackersForm").submit (function(e){
      e.preventDefault()
      var packer = $("#" + eventID + "PackersForm option:selected").text()
      var firebaseWrapper = new FirebaseWrapper()

      firebaseWrapper.addPacker(packer, firebaseKey)
    })
  }

  function scrollToTop() {
    $("#displayEventsDiv")[0].scrollTop = $("#displayEventsDiv")[0].scrollHeight;
  }

  //retrieves info from firebase about packers
  // similar to onEventAdded in index
  function updateFromFirebase(eventID, firebaseKey){
    //TODO move to firebasewrapper
    var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");
    packersRef.on("value", function(snapshot){
      var packers = snapshot.val()
      $('#' + eventID + 'PackersDiv').empty()
      for (var i in packers){
        $('#' + eventID + 'PackersDiv').append("<li>" + packers[i] + "</li>")
      }
    })
  }

  return View

})()

// module.exports = View
