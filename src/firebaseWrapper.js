var FirebaseWrapper = (function() {
  var eventRef // *Private

  function FirebaseWrapper() {
    eventRef = new Firebase("https://packing-roster.firebaseio.com/events")
  }

//Push form input to firebase *Public
  FirebaseWrapper.prototype.createEvent = function(event) {
    eventRef.push(event)
  }
//Listens for child added to the event branch on firebase and executes callback function *Public
  FirebaseWrapper.prototype.onEventAdded = function(callback) {
    eventRef.on("child_added", callback) 
  }

  //Push packer name to firebase *Public
  FirebaseWrapper.prototype.addPacker = function(packer, firebaseEventKey) {
    var packersRef = new Firebase("https://packing-roster.firebaseio.com/events/" + firebaseEventKey + "/packers");
    packersRef.push(packer)
    console.log(packer)
  }
//Listens for child added to the packers branch on firebase and executes callback function *Public
  // FirebaseWrapper.prototype.onPackerAdded = function(callback) {
  //   packersRef.on("child_added", callback) 
  // }

  return FirebaseWrapper
})()
