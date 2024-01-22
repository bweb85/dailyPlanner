// current date for header
var currentDate = dayjs().format("dddd MMMM D YYYY");
$("#currentDay").text(currentDate);

// loop to colour code the hour to past, present or future
var currenthour = dayjs().hour();

for (var i = 9; i < 18; i++){

    var idValue = "#hour"+i
    if (currenthour===i) {
        console.log("it is present")
           $(idValue) .addClass("present")
    }
    else if (currenthour>i){
        console.log("past")
        $(idValue) .addClass("past")
    }
    else {
        console.log("future")
        $(idValue) .addClass("future")
    }
};

