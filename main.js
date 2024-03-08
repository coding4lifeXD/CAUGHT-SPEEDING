// Functionize Caught Speeding Start Code

// Determine Tickets Button Click Event
document.getElementById('btn').addEventListener('click', btnClicked);
document.documentElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    btnClicked()
  }
})
function btnClicked() {
  for (let i = 0; i < 3; i++) {  
    outputStatement = 'No Ticket'
    currentIndex = i
    driverSpeed = Number(document.getElementsByClassName("driver_speed")[i].value)
    speedLimit = Number(document.getElementsByClassName("speed_limit")[i].value)
      if (driverSpeed > speedLimit + 40) {
        checkSpeeds("Really Big Ticket");
      } else if (driverSpeed > speedLimit + 20) {
        checkSpeeds("Big Ticket");
      } else if (driverSpeed > speedLimit) {
        checkSpeeds("Small Ticket");
      } else {
        checkSpeeds("No Ticket");
      }
    }
}
  
function checkSpeeds(outputToHtml) {
    document.getElementsByClassName("output_ticket")[currentIndex].innerHTML = outputToHtml
}