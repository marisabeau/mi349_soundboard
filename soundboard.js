
var audio = new Audio("play")

var rainButton = document.getElementById('btnrain');

rainButton.addEventListener('click', function() {
    console.log("Rain button clicked");
    var audio = new Audio('rainonplants.mp3');
    audio.play();
})

var forestbutton = document.getElementById('btn');

forestbutton.addEventListener('click', function() {
    console.log("forest button clicked");
    var audio = new Audio('forest.mp3');
    audio.play();
})

var cityButton = document.getElementById('btncity');

cityButton.addEventListener('click', function() {
    console.log("city button clicked");
    var audio = new Audio('city.mp3');
    audio.play();
})


