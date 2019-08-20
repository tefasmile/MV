//fecha de caducidad
var deadline = new Date("Aug 25, 2019 13:00:00").getTime();
//start clock
var x = setInterval(function() {
    //fecha ahora
    var now = new Date().getTime();
    var t = deadline - now; 
    //Info de dias-horas-minutos
    var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
    var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
    var seconds = Math.floor((t % (1000 * 60)) / 1000);
    //print
    document.getElementById("day").innerHTML =days; 
    document.getElementById("hour").innerHTML =hours; 
    document.getElementById("minute").innerHTML = minutes;  
    document.getElementById("second").innerHTML =seconds;
    //finish time
    if( t < 0 ){
        clearInterval(x);
        document.getElementById("exp").innerHTML = 'Expirado';
        document.getElementById("day").innerHTML ='0'; 
        document.getElementById("hour").innerHTML ='0'; 
        document.getElementById("minute").innerHTML ='0' ;  
        document.getElementById("second").innerHTML = '0';
    }


}, 1000); 

