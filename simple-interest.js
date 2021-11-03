function simpleInterest(p,r,t)
{
   var SI = (p*r*t)/100;
   return SI;  
}

var simpleI = simpleInterest(500,2,6);
console.log("SI = ",simpleI);