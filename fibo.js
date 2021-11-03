// function fiboSeries(num)
// {
//     if(typeof num!="number")
//     return "Erroorr!!!";
//     else if(num<2)
//     return "Errorr!!!";

//     const fibo=[0,1];
//     for(let i=2;i<num;i++)
//     {
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }

// const series = fiboSeries(10)
// console.log(series);
function fibonacciSeries(n)
{
    if(n==0)
    return [0];
    
    else if(n==1)
    return [0,1];

    const fibo = fibonacciSeries(n-1);
    fibo[n]=fibo[n-1]+fibo[n-2];
    return fibo;

        
}
const series=fibonacciSeries(15);
console.log(series);


