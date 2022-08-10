// Switching between "Today", "This Week", & "This Month"
var upcoming = document.getElementById("upcoming");
var past = document.getElementById("past");
past.style.display='none';

$("#upBtn").click(function() {
  upcoming.style.display='block';
  past.style.display='none';
})

$("#pastBtn").click(function() {
  past.style.display='grid';
  upcoming.style.display='none';
})

// Opening the Reserve Modal
var modal = document.getElementById("eventPopup");
var realModal = document.getElementById("realModal");

// Get the button that opens the modal
var btn = document.getElementById("yogaEvent");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.classList.add('open');
  modal.style.display = "block";
};