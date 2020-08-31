// Display current date in header
$('#currentDay').html(moment().format('MMMM DD, YYYY'));

// add Hour tracker to identify past, present & future
function hourTracker() {
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


  //  save tasks to local storage
  $(".saveBtn").on("click", function() {
    var value = $(this).siblings(".task-input").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(time, value);
  });

// retrieve tasks from local storage
  $("#hour9 .task-input").val(localStorage.getItem("hour9"));
  $("#hour10 .task-input").val(localStorage.getItem("hour10"));
  $("#hour11 .task-input").val(localStorage.getItem("hour11"));
  $("#hour12 .task-input").val(localStorage.getItem("hour12"));
  $("#hour13 .task-input").val(localStorage.getItem("hour13"));
  $("#hour14 .task-input").val(localStorage.getItem("hour14"));
  $("#hour15 .task-input").val(localStorage.getItem("hour15"));
  $("#hour16 .task-input").val(localStorage.getItem("hour16"));
  $("#hour17 .task-input").val(localStorage.getItem("hour17"));


hourTracker();


