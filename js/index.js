$(".mainButton").click(function() {
  $(this).css("background-color","#1F79AD");
});


// Sidebar Menu
var mySideMenu = document.getElementById("mySideMenu");
var menu = document.getElementById("menu");

$("#menu").click(function() {
  mySideMenu.style.width="250px";
})

$(".defaultPage").click(function() {
  $(".defaultPage").css('color', '#FD9F9D');
  $(".defaultPage").css('text-decoration', 'underline');
  $(".possiblePage1").css('color', '#5C5C5C');
  $(".possiblePage1").css('text-decoration', 'none');
  $(".possiblePage2").css('color', '#5C5C5C');
  $(".possiblePage2").css('text-decoration', 'none');
});

$(".possiblePage1").click(function() {
  $(".possiblePage1").css('color', '#FD9F9D');
  $(".possiblePage1").css('text-decoration', 'underline');
  $(".defaultPage").css('color', '#5C5C5C');
  $(".defaultPage").css('text-decoration', 'none');
  $(".possiblePage2").css('color', '#5C5C5C');
  $(".possiblePage2").css('text-decoration', 'none');
});

$(".possiblePage2").click(function() {
  $(".possiblePage2").css('color', '#FD9F9D');
  $(".possiblePage2").css('text-decoration', 'underline');
  $(".defaultPage").css('color', '#5C5C5C');
  $(".defaultPage").css('text-decoration', 'none');
  $(".possiblePage1").css('color', '#5C5C5C');
  $(".possiblePage1").css('text-decoration', 'none');
});


window.addEventListener("click", function(event) {
  if (event.target == mySideMenu) {
        mySideMenu.style.width = "0px";
    }
});