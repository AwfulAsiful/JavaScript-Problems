const numbers= [1,1,2,4,5,6,7,8,9,3,4,5,6,6,6,4,3,7];

function removeDuplicate(numbers)
{
    const unique=[];
    for(const elements of numbers)
    {
       
        if(unique.indexOf(elements)==-1)
        {
            unique.push(elements);
        }
      
       
    }
    return unique;
}

const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);