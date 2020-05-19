function dise() {
    var roll = Math.floor((Math.random() * 6) + 1);
    document.getElementById("history").innerHTML += " " + roll + "/6";
    if (roll === 6) {
      document.getElementById("rollResult").innerHTML = "dise roll: Wow 6!!";
    } else if (roll === 1) {
      document.getElementById("rollResult").innerHTML = "dise roll: good!!";
    } else {
        console.log()
      document.getElementById("rollResult").innerHTML = "dise roll: " + roll;}
  }
