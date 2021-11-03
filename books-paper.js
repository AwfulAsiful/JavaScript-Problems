function paperReqiurements(book1,book2,book3)
{
 const pagesNeededForBook1 = book1*100;
 const pagesNeededForBook2 = book2*200;
 const pagesNeededForBook3 = book3*300;
 return pagesNeededForBook1,pagesNeededForBook2,pagesNeededForBook3;
}

var pagesNeeded = paperReqiurements(3);
console.log(pagesNeeded);