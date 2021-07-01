console.log("page loading...")

//when the user clicks on one of the cities create a loading alert
function loadWeatherReport(element) {
    alert("Loading weather report...");
}


var unit = document.querySelector("#unit-choice").value;
var temps = document.getElementsByClassName("temps");

//Go through the array of high and low temperatures 
for (let i = 0; i < temps.length; i++) {
    console.log(temps[i].innerHTML)
}

//check if the select option value has been changed. 
function changeUnit(element) {
    unit = element.value;
    convertToFarenheit()
}

//if the value change is equal to farenheit and do the formula for all temp values
//else convert back to celcius with the formula for celcius
function convertToFarenheit() {
    //formula for celcius to farenheit
    //multiply by 1.8 and add 32
    if (unit == 'F')
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.trunc(Math.round(temps[i].innerHTML * 1.8 + 32));
        } else {
    //formula for farenheit to celcius
        for (let i = 0; i < temps.length; i++) {
            temps[i].innerHTML = Math.trunc(Math.round(temps[i].innerHTML - 32) * .5556);
        }
}
}

//Remove the fixed cookies div 
//when the cookies button is clicked add the selector of hide, and give a declaration of display:none (property:value)

var cookiesNotice = document.querySelector("#cookies-notification");

function cookiesHide(cookiesNotice) {
    cookiesNotice.classList.add("hide");
}