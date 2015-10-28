//listens for packers form submit and pushes packer's name to packers array
function addPackerEventListener(eventID, firebaseKey){
  $("#" + eventID + "PackersForm").submit(function (e) {
    console.log("Firebase key in controller.js: " + firebaseKey)
    var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/packers");
    e.preventDefault()
    var packer = $("#" + eventID + "PackersForm option:selected").text()
    packersRef.push(packer)
    console.log("Packer: " + packer)
    console.log("Packers: " + packersRef)

  })
}

//retrieves info from firebase about packers
function updateFromFirebase(eventID, packersRef){
    packersRef.on("value", function(snapshot){
    var packers = snapshot.val()
    console.log("Number of Packers: " + Object.keys(packers).length)
    for (var i in packers){
      console.log("Packers: " + packers[i])
      $('#' + eventID + 'PackersDiv').append("<li>" + packers[i] + "</li>")
    }

  })
}