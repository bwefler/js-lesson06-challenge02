// Lesson 6 Challenge 2

var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

// Get total budget & accommodation costs
var tripInfo = function() {
    var totalBudget = Number(prompt("What is your total budget?"));
    var accommodation = Number(prompt("What are your accommodation costs?"));
    var numDays = Number(prompt("How many days does your trip last?"))
    
    console.log(`Budget: ${totalBudget} Accommodation costs: ${accommodation} ` + 
        `Number of days: ${numDays}`);

    // Call the calculateDailyBudget function
    calculateDailyBudget(totalBudget, accommodation, numDays);  
}

// Calculate daily budget
var calculateDailyBudget = function(totalBudget, accommodation, numDays) {
    // The value of daily will be the result of the totalBudget minus the accommodation costs,
    //  divided by the number of trip days. 
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);

    // Below the daily variable, set the innerText of the dailyBudget element to a
    //  template string to output the result on the web page: 
    //  You can spend $${daily} a day on food and fun.
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun`
}

// Add a click event to tripInfoButton
tripInfoButton.addEventListener("click", function(){
    tripInfo();
});
