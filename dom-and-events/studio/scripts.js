// Write your JavaScript code here.
// Remember to pay attention to page loading!

window.addEventListener("load", function() {
    let takeoff = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let spaceShuttleHeight = this.document.getElementById("spaceShuttleHeight");
    let landing = this.document.getElementById("landing");

    takeoff.addEventListener("click", function () {
        let confirmed = window.confirm("Confirm that the shuttle is ready for takeoff.");

        if (confirmed) {
           console.log("This is better.");
           flightStatus.innerHTML = "Shutte in flight.";
           shuttleBackground.style.backgroundColor = "blue";
           spaceShuttleHeight.innerHTML ++;
        }
    });

    landing.addEventListener("click", function(){
        let confirmed = window.confirm("The shuttle is landing. LAnding gear engaged")
    })
});
