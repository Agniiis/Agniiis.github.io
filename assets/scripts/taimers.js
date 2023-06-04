//Atskaite līdz 18 junijam, atjaunina katru sekundi
var countDown = new Date("June 18, 2023 21:00:00").getTime();
var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDown - now;

    //Aprekina dienas, stundas, minutes, sekundes līdz 5 martam
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 //Parbauda vai min ir 0, ja ir tad minutes neparada
    if (minutes === 0) {
        minutes = '';
    } else {
        minutes = minutes + 'm ';
    }

    document.getElementById("countdown").innerHTML = "Race starts in: " + days + "d " + hours + "h " + minutes + "" + seconds + "s ";

});
