// Switching between "About", "Detail", "Review" Tabs
var clicked = false;

$("#fw").click(function() {
    if (clicked == true) {
        $("#fw").css('background-image', '');
        clicked = false;
    }
    else {
        $("#fw").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5))');
        clicked = true;
    }
})

$("#ca").click(function() {
    if (clicked == true) {
        $("#ca").css('background-image', '');
        clicked = false;
    }
    else {
        $("#ca").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-culture_art.jpg")');
        clicked = true;
    }
})

$("#concert").click(function() {
    if (clicked == true) {
        $("#concert").css('background-image', '');
        clicked = false;
    }
    else {
        $("#concert").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-concert_music.jpg")');
        clicked = true;
    }
})

$("#sa").click(function() {
    if (clicked == true) {
        $("#sa").css('background-image', '');
        clicked = false;
    }
    else {
        $("#sa").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-sports.jpg")');
        clicked = true;
    }
})

$("#cinema").click(function() {
    if (clicked == true) {
        $("#cinema").css('background-image', '');
        clicked = false;
    }
    else {
        $("#cinema").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-cinema.jpg")');
        clicked = true;
    }
})

$("#tt").click(function() {
    if (clicked == true) {
        $("#tt").css('background-image', '');
        clicked = false;
    }
    else {
        $("#tt").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-tours.jpg")');
        clicked = true;
    }
})

$("#cw").click(function() {
    if (clicked == true) {
        $("#cw").css('background-image', '');
        clicked = false;
    }
    else {
        $("#cw").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-courses.jpg")');
        clicked = true;
    }
})

$("#fe").click(function() {
    if (clicked == true) {
        $("#fe").css('background-image', '');
        clicked = false;
    }
    else {
        $("#fe").css('background-image', 'linear-gradient(rgba(112,176,176, .5), rgba(112,176,176, .5)), url("../images/interest_selection-food.png")');
        clicked = true;
    }
})