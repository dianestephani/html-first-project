// var greeting = 'Welcome, ';
// var name = 'Washington State!';
// var welcome = greeting + name;
//  var date = new Date();
// var day = date.getDay()
// var daylist = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// console.log("Today is " + daylist[day] + "!");

// function javaDay() {
//     // document.write (welcome + '</br>');
//     // document.write ("Today is " + daylist[day] + "!");
// }
// while (false) {
//     console.log ("I'm here again!")
// }
// prompt("Do you live in Washington state? Yes or no.")
// console.log("I'm here!")

var response
while(response !== 'yes' && response !== 'no') {
    response = prompt("Do you live in Washington state? Yes or no.").toLowerCase();
    
    if( response === 'yes' || response === 'no' ) { 
    alert('Thank you for your response!');
    }
}

 
var answer = 8
var guess = prompt("Choose a number between 1 and 10. You have 3 guesses.")


for(i=0; i<=1; i+=1) {
    if(guess != answer) {
       guess = prompt('Please try again!') 
    }
    if(guess == answer) {
        alert("Congratulations! You win!");
    break}     

}

console.log
