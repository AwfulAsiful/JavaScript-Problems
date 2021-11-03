

function findTheLargest(first,second,third)
{
    if(first > second && first > third)
    {
        return first;
    }
    else if(second > third)
    {
        return second;
    }
    else
    {
        return third;
    }
}

const maximumNumber = findTheLargest(5,7,4);
console.log("Maximum Number is ",maximumNumber);