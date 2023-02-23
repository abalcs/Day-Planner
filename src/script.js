let weekDay = moment();
$("#currentDay").text(weekDay.format('dddd, MMMM Do YYYY HH:mm:ss A'));

let hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const now = moment().hour();

const timeDiv = document.querySelector('#currentDay');

setInterval(() => {
timeDiv.innerHTML = new Date( );
}, 1000);

//Cycling through the array of hours
for (const hour of hours) {
  // row variable represents the html element which has an ID matching the value 'hour' (converted to a string)

  let row = document.getElementById(hour.toString());
  //Retrieving the value of given hour from local storage
  const value = localStorage.getItem(hour);
  //Finding the value of the text area within ID's that correspond with the iterated hour
  $('#' + hour).find('textarea').val(value);


  if (hour < now) {
    row.classList.add('past');
  } else if(now === hour) {
    row.classList.add('present');
  } else {
    row.classList.add('future');
  }
}

//Getting each save button and telling them to perform this function on each click
$(".saveBtn").on('click', function(){
  // Assigning an ID attribute of the parent div of the save button to a new variable called ID
  const id = $(this).parent().attr('id');
  //Getting the value of the text area by targeting the parent div and finding the element of text area and assigning its' value to a variable called value.
  const value = $(this).parent().find('textarea').val()
  //Setting the key and value to local storage
  localStorage.setItem(id, value);
})
