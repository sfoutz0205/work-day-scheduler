// Display current date in header
$("#currentDay").html(moment().format('MMMM DD, YYYY'));

var hourOne = '9:00 AM';
$("#hour-1").html(hourOne);
var hourTwo = '10:00 AM';
$("#hour-2").html(hourTwo);
var hourThree = '11:00 AM';
$("#hour-3").html(hourThree);
var hourFour = '12:00 AM';
$("#hour-4").html(hourFour);
var hourFive = '1:00 PM';
$("#hour-5").html(hourFive);
var hourSix = '2:00 PM';
$("#hour-6").html(hourSix);
var hourSeven = '3:00 PM';
$("#hour-7").html(hourSeven);
var hourEight = '4:00 PM';
$("#hour-8").html(hourEight);
var hourNine = '5:00 PM';
$("#hour-9").html(hourNine);

var randomDate = '3:00 PM';

var randomFormat = 'hh A';
var convertedDate = moment(randomDate, randomFormat);

var hourArr = [hourOne, hourTwo, hourThree, hourFour, hourFive, hourSix, hourSeven, hourEight, hourNine];
var hourArrLength = hourArr.length;


for (var i = 0; i < hourArrLength; i++) {
    
    if(moment(hourArr[i], "hh A").isBefore(moment(convertedDate))) {
        $(this).addClass('past');
        console.log("past");
    }
    else if(moment(hourArr[i], "hh A").isAfter(moment(convertedDate))) {
        $(this).parent().addClass('future');
        console.log("future");
    }
    else if(moment(hourArr[i], "hh A").isSame(moment(convertedDate))) {
        $(this).parent().addClass('present');
        console.log("present")
        }
    };






