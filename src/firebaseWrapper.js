var FirebaseWrapper = (function() {
  var eventRef

  function FirebaseWrapper() {
    eventRef = new Firebase("https://packing-roster.firebaseio.com/events");
  }

  FirebaseWrapper.prototype.createEvent = function(event) {
    eventRef.push(event)
  }

  FirebaseWrapper.prototype.onEventAdded = function(callback) {
    eventRef.on("child_added", callback) 
  }

  return FirebaseWrapper
})()
