//listens for packers form submit and pushes packer's name to packers array
function addPackerEventListener(eventID, firebaseKey){
  $("#" + eventID + "PackersForm").submit(function (e) {
    var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");
    e.preventDefault()
    var packer = $("#" + eventID + "PackersForm option:selected").text()
    packersRef.push(packer)
  })
}

//retrieves info from firebase about packers
function updateFromFirebase(eventID, firebaseKey){
  var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");
  packersRef.on("value", function(snapshot){
    var packers = snapshot.val()
    for (var i in packers){
      $('#' + eventID + 'PackersDiv').append("<li>" + packers[i] + "</li>")
    }
  })
}
