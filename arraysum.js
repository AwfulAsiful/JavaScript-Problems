function arraySum (num)
{
    let sum=0;
    for(let i=0;i<num.length;i++)
    {
        const elements = num[i];
        sum = sum + elements
    }
    return sum;

}

const total = arraySum([35,45,65]);
console.log("Summation is",total);