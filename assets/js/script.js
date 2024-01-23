// current date for header
var currentDate = dayjs().format("dddd MMMM D YYYY");
$("#currentDay").text(currentDate);

// loop to colour code the hour to past, present or future
var currenthour = dayjs().hour();

for (var i = 9; i < 18; i++){

    var idValue = "#hour"+i
    if (currenthour===i) {
           $(idValue).addClass("present")
    }
    else if (currenthour>i){
        $(idValue).addClass("past")
    }
    else {
        $(idValue).addClass("future")
    }
};

// save data to local storage and retrieve from local storage
// save to local storage
function saveTask(hourID) {
    var taskDescription = document.getElementById(hourID).value;
    if (taskDescription.trim() !== '') {
      localStorage.setItem(hourID, taskDescription);
     
      alert('Task saved successfully!');
    } else {
      alert('Task description cannot be empty!');
    }
  };

    //Function to load saved data from local storage
function loadSavedData() {
  for (var i = 9; i <= 18; i++) {
    var hourID = 'hour'+i;
    var savedData = localStorage.getItem(hourID);
    if (savedData !== null) {
      document.getElementById(hourID).value = savedData;
    }
  }
}

document.addEventListener('DOMContentLoaded', function () {
    loadSavedData(); 
    var saveButtons = document.querySelectorAll('.saveBtn');
    saveButtons.forEach(function (button) {
      button.addEventListener('click', function () {
        var hourID = this.closest('.time-block').querySelector('.description').id;
        saveTask(hourID);
      });
    });
  });





