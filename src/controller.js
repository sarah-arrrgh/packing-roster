function addPackerEventListener(eventID, firebaseKey){
  $("#" + eventID + "Form").submit(function (e) {
    console.log("Firebase key: " + firebaseKey)
    var pplComingRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseKey + "/pplComing");
    e.preventDefault()
    var packer = $("#" + eventID + "Form option:selected").text()
    pplComingRef.push(packer)
    console.log("Packer: " + packer)
    $('#whosComingDiv').append("<li>" + packer + "</li>")


    console.log("#ppl coming: " + pplComingRef)

    pplComingRef.on("value", function(snapshot){
      var packers = snapshot.val()
      console.log("number: " + Object.keys(packers).length)
      for (var i in packers){
        console.log(packers[i])
      }
    })

  })
}
