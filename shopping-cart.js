const products=
[
    {name:"Laptop",price:87000,quantity:1},
    {name:"Mobile",price:70000,quantity:3},
    {name:"Bike",price:60000,quantity:1},
    {name:"Car",price:500000,quantity:2},
    {name:"groceries",price:7000,quantity:7}
]


let totalPrice=0;
for(const product of products)
{
    const productTotal = product.price*product.quantity;
    totalPrice= totalPrice + productTotal;
}

console.log("Tar mare baap!!!! Eto taka kmne aslo",totalPrice);

