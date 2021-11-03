function largestNumber(num)
{
    let largest = num[0];
    for(let i=0;i<num.length;i++)
    {
        const elements = num[i];
        if(elements>largest)
        {
            largest=elements;
        }
        
        
        
    }
    return largest;
}

const ages = [12,34,75,65]
const oldest = largestNumber(ages);
console.log("oldest",oldest);