//listens for packers form submit and pushes packer's name to packers array
function addPackerEventListener(eventID, firebaseKey){
  $("#" + eventID + "PackersForm").submit(function (e) {
    e.preventDefault()
    var packer = $("#" + eventID + "PackersForm option:selected").text()

    //TODO move to firebasewrapper
    //firebaseWrapper = new FirebaseWrapper()
    //FirebaseWrapper.addPacker(firebaseKey, packer)
    var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");
    packersRef.push(packer)
  })
}

//retrieves info from firebase about packers
// similar to onEventAdded in index
function updateFromFirebase(eventID, firebaseKey){
  //TODO move to firebasewrapper
  var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");
  packersRef.on("value", function(snapshot){
    var packers = snapshot.val()
    for (var i in packers){
      $('#' + eventID + 'PackersDiv').append("<li>" + packers[i] + "</li>")
    }
  })
}
