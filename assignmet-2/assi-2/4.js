const products=[
    {name:"laptop",price:120000},
    {name:"mobile",price:70000},
    {name:"Laptop bag",price:20000},
    {name:"watch",price:20000},
    {name:"mobile charger",price:1500},
]
const a= Object.values(products);
console.log(a)
function checkmax(product){
const max=product.reduce(products=>{
return products.name==product;       
});
const hr=checkmax("ram")
console.log(hr);

