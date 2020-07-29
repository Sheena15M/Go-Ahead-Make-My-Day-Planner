//Times for Planner from moment.js
var appointText = "";
var appointTime = "";
var currentDate;
var currentTime;
var currentContainer;
var tempArray = [];
var storedAppointments;
var returnedAppointments;


$(window).on("load", function () {
 currentDate = moment().format("dddd MMM Do YYYY, h:mm a");
$("#currentDay").append(currentDate);
currentTime = moment().format("H");
//Make and store appointments
function renderAppointments() {
    storedAppointments = JSON.parse(localStorage.getItem("appointments"));
    if (storedAppointments !== null) {
        for (i = 0; i < storedAppointments.length; i++) {
                returnedAppointments = storedAppointments[i];
                details = returnedAppointments.details;
                timeIndex = returnedAppointments.time;
                timeIndex = timeIndex.replace(":00", '');
                if (details !== null) {
                    $("#" + timeIndex).children('div').children('div').children('textarea').val(details);
                }
            }
        }
    }

renderAppointments();
//Color change for past appointments, current hour and g
for (i = 0; i <= 23; i++) {
    CurrentContainer = i;
        if (currentTime == i) {
            $('#' + CurrentContainer).addClass("present");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("present");
        }
        else if (currentTime > i) {
            $('#' + CurrentContainer).addClass("past");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("past");
        }
        else {
            $('#' + CurrentContainer).addClass("future");
            $('#' + CurrentContainer).children('div').children('div').children("textarea").addClass("future");
        }
    }
})



$(".saveBtn").click(function () {
    appointText = $(this).parent('div').children('div').children('textarea').val();
    appointTime = $(this).parent('div').parent().attr("id");
    appointment = {
        time: appointTime,
        details: appointText
    }
    tempArray = JSON.parse(localStorage.getItem("appointments"));
    if (tempArray === null) {
        localStorage.setItem('appointments', JSON.stringify([{ time: appointTime, details: appointText }]));
    }
    else {
        tempArray.push(appointment);
        localStorage.setItem("appointments", JSON.stringify(tempArray));

    }
    $(this).parent('div').children('div').children('textarea').replaceWith($('<textarea>' + appointText.addClass("textarea") + '</textarea>'));
})

var nineAM = JSON.parse(localStorage.getItem('nineAM'));
$("#nineamtextarea").val(nineAM);
var tenAM = JSON.parse(localStorage.getItem('tenAM'));
$("#tenamtextarea").val(tenAM);
var elevenAM = JSON.parse(localStorage.getItem('elevenAM'));
$("#elevenamtextarea").val(elevenAM);
var twelvePM = JSON.parse(localStorage.getItem('twelvePM'));
$("#twelvepmtextarea").val(twelvePM);
var onePM = JSON.parse(localStorage.getItem('onePM'));
$("#onepmtextarea").val(onePM);
var twoPM = JSON.parse(localStorage.getItem('twoPM'));
$("#twopmtextarea").val(twoPM);
var threePM = JSON.parse(localStorage.getItem('threePM'));
$("#threepmtextarea").val(threePM);
var fourPM = JSON.parse(localStorage.getItem('fourPM'));
$("#fourpmtextarea").val(fourPM);
var fivePM = JSON.parse(localStorage.getItem('fivePM'));
$("#fivepmtextarea").val(fivePM);