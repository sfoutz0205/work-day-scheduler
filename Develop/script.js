// Display current date in header
$('#currentDay').html(moment().format('MMMM DD, YYYY'));

function hourTracker() {
    //get current number of hours.
    var currentHour = moment().hour();

    
    $(".time-block").each(function () {
        var blockHour = parseInt($(this).attr("id").split("hour")[1]);
        
        if (blockHour < currentHour) {
            $(this).addClass("past");
        }
        else if (blockHour === currentHour) {
            $(this).addClass("present");
        }
        else {
            $(this).addClass("future");
        }
    })
}

hourTracker();
