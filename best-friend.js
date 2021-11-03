function bestFriend(array)
{
    let name = array[0];
    for(const elements of array)

    {
        if(elements.length>name.length)
        {
            name = elements;

        }
        
    }
    return name;
}
var friends = bestFriend(["abc","abcde","abcdef","a"]);
console.log(friends);