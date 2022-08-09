$(".mainButton").click(function() {
  $(this).css("background-color","#1F79AD");
});


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

// Get the modal
var modal = document.getElementById("reserve");

// Get the button that opens the modal
var btn = document.getElementById("reserveBtn");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.classList.add('open');
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
//span.onclick = function() {
//  modal.style.display = "none";
//}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove('open');
    modal.style.display = "none";
  }
}