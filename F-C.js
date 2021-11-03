function centrigadeToFahrenheit(C)
{
   var farenheit = 9*C/5+32;
   return farenheit;


}

var tempConversion = centrigadeToFahrenheit(47);
console.log("Temparature in farenheit is ",tempConversion);


// Fahrenheit to centrigade 
function fahrenheitTocelcius(F)
{
    var celcius = (F-32)/(5*9);
    return celcius;
}

var tempConverse = fahrenheitTocelcius(116);
console.log("Temparature in celcius is ",tempConverse);
