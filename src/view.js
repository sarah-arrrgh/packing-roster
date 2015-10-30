var View = (function() {
 function View() {
 }

 // public method
  View.prototype.displayEvent = function(snapshot) {

    var event = new Event(snapshot.val())

    event.packerNames()
    displayEventDetails(event)
    displayPackersForm(event.eventID,event)
    scrollToTop()
    addPackerEventListener(event.eventID, snapshot.key())
    updateFromFirebase(event.eventID, snapshot.key(),event)
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

  function displayPackersForm(eventID, event) {
    if (event.numberOfPackers() < event.number) {
     $('#displayEventsDiv #' + eventID + 'PackersForm')
    .append("<select id='memberList'><option>--Please Select--</option></select>")
    .append("<button class='joinUs' id='" + eventID + "PackersButton'>Sign me up!</button></p>")

    var firebaseMemberWrapper = new FirebaseMemberWrapper()
    firebaseMemberWrapper.onMemberAdded(function(snapshot){
      if (event.packerNames().indexOf(snapshot.val().name) == -1){
      $('#displayEventsDiv #' + eventID + 'PackersForm #memberList').append("<option>" + snapshot.val().name + "</option>")
      }
    })

  }
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
  function updateFromFirebase(eventID, firebaseKey, event){
    //TODO move to firebasewrapper
    var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers")
    packersRef.on("value", function(snapshot){
      var packers = snapshot.val()
      event.packers = packers
      if (event.numberOfPackers() == event.number){
        $("#" + eventID + "PackersForm").hide()
      }
      //hide option

      $('#' + eventID + 'PackersDiv').empty()
      $('#displayEventsDiv #' + eventID + 'PackersForm #memberList option:first').attr('selected', 'selected')
 
      for (var i in packers){
        var name = packers[i]
        $('#displayEventsDiv #' + eventID + 'PackersForm #memberList option:contains("'+name+'")').hide()

        $('#' + eventID + 'PackersDiv').append("<li>" + name + "</li>")
      }
   
    })
  }

  return View

})()

// module.exports = View
