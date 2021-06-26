
console.log("Script");
var myName="Jane";
var myAge="29";
var geoLocation="San Diego, CA";
var jobTitle="Electrical Technician";
var myEmail="srvilladoz@gmail.com";
var phoneNumber="7023367540";
var myCountry="USA";
var planet="Earth";
var carModel="Camry";
var carMake="Toyota";
var carSpeed="65 mph"
var dogsName="Genie and Pebbles";
var schoolName="San Diego Global Knowledge University";
var programName="Full Stack Development Immersive";
var courseNumber="FSDI 103";
var numberChildren="0";
var userName="srvilladoz";
var password="javascriptpassword1234"
var welcome="Hello World!"
var date="June 24, 2021"

document.write(`<h2> Here are my variables:</h2>
<br>
<p>${myName}</p>
<br>
<p>${myAge}</p>
<br>
<p>${geoLocation}</p>
<br>
<p>${jobTitle}</p>
<br>
<p>${myEmail}</p>
<br>
<p>${phoneNumber}</p>
<br>
<p>${carMake}</p>
<br>
<p>${carModel}</p>
<br>
<p>${carSpeed}</p>
<br>
<p>${dogsName}</p>
<br>
<p>${schoolName}</p>
<br>
<p>${programName}</p>
<br>
<p>${courseNumber}</p>
<br>
<p>${numberChildren}</p>
<br>
<p>${userName}</p>
<br>
<p>${password}</p>
<br>
<p>${welcome}</p>
<br>
<p>${date}</p>`);


for(var i=0; i<=100; i+=2){

    console.log(i);
}


var userNameDB="srvilladoz@gmail.com";
var passwordDB="villad341"

function login(){

    var un=document.getElementById("userName").value;
    var ps=document.getElementById("password").value;


    if(userNameDB===un && ps===passwordDB){
        document.write(`Welcome to the system ${un}`);

    }else{
        document.write(`Incorrect username or password`);

    }
    
    
    console.log(un,ps);
}

