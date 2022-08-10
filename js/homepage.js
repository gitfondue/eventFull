// Switching between "Today", "This Week", & "This Month"
var today = document.getElementById("today");
var thisWeek = document.getElementById("thisWeek");
var thisMonth = document.getElementById("thisMonth");
thisWeek.style.display='none';
thisMonth.style.display='none';

$("#todayBtn").click(function() {
  today.style.display='block';
  thisWeek.style.display='none';
  thisMonth.style.display='none';
})

$("#thisWeekBtn").click(function() {
  thisWeek.style.display='grid';
  today.style.display='none';
  thisMonth.style.display='none';
})

$("#thisMonthBtn").click(function() {
  thisMonth.style.display='block';
  today.style.display='none';
  thisWeek.style.display='none';
})