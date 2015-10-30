// retrieve member names from Firebase and use them to populate the packer form options
// only display packer name in form if not already chosen
// this 

var Member = (function(){

  function Member(snapshot){
    this.name = snapshot.name
  }

  Member.prototype.memberNames =function() {
    // 


    // if (this.packers != null) {
    //   var names = Object.keys(this.packers)
    //   for (var i = 0; i < names.length; i++) {
    //     var val = this.packers[names[i]]

    //     console.log("val: " + val) 
      }
    }
  }

  return Member
})()

 // module.exports = Member