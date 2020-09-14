$(document).ready(function(){
// this puts the current Date and time on the top of the page.
// creates a variable for date
var date = new Date();
// creates variable for n
// finds the current date and turns it into a string
var n = date.toDateString();
// creates variable for N
// finds the current time and turns it into a string
var time = date.toTimeString();
// pulls the div from the html to then display the current date and time on the page
$('timeDisplay').HTML = n + '' + time;


});