// Switching between "About", "Detail", "Review" Tabs
var about = document.getElementById("about");
var detail = document.getElementById("detail");
var review = document.getElementById("review");
detail.style.display='none';
review.style.display='none';

$("#aboutBtn").click(function() {
  about.style.display='block';
  detail.style.display='none';
  review.style.display='none';
})

$("#detailBtn").click(function() {
  detail.style.display='grid';
  about.style.display='none';
  review.style.display='none';
})

$("#reviewBtn").click(function() {
  review.style.display='block';
  detail.style.display='none';
  about.style.display='none';
})

// Opening the Reserve Modal
var modal = document.getElementById("reserve");
var realModal = document.getElementById("realModal");

// Get the button that opens the modal
var btn = document.getElementById("reserveBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.classList.add('open');
  modal.style.display = "block";
};

// Opening the Reserve Modal
var modal2 = document.getElementById("resSuccess");
var realModal = document.getElementById("realModal");

// Get the button that opens the modal
var btn2 = document.getElementById("purchaseButton");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn2.onclick = function() {
  modal2.classList.add('open');
  modal2.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
window.addEventListener("click", function(event) {
  console.log(event.target);
  if (event.target == realModal) {
    modal.classList.remove('open');
    modal.classList.add('close');
    modal.style.display = "none";
  }
});

// Switching between "About", "Detail", "Review" Tabs
var paypal = document.getElementById("paypal");
var applepay = document.getElementById("applepay");
var cc = document.getElementById("cc");

$("#paypal").click(function() {
  $("#paypal").css('border', 'solid');
  $("#paypal").css('border-color', '#71b0b0');
  $("#applepay").css('border', 'none');
  $("#cc").css('border', 'none');
})

$("#applepay").click(function() {
  $("#applepay").css('border', 'solid');
  $("#applepay").css('border-color', '#71b0b0');
  $("#paypal").css('border', 'none');
  $("#cc").css('border', 'none');
})

$("#cc").click(function() {
  $("#cc").css('border', 'solid');
  $("#cc").css('border-color', '#71b0b0');
  $("#applepay").css('border', 'none');
  $("#paypal").css('border', 'none');
})