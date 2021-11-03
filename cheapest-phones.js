const phones=
[
    {name:"Samsung",price:10000,camera:15,Storage:32},
    {name:"Xiaomi",price:15000,camera:15,Storage:32},
    {name:"Oppo",price:20000,camera:15,Storage:32},
    {name:"Oneplus",price:30000,camera:15,Storage:32},
    {name:"ZTE",price:50000,camera:15,Storage:32},
]

let cheapest = phones[0];

for(const phone of phones)
{
    if(phone.price<cheapest.price)
    cheapest=phone;
}

console.log(cheapest);