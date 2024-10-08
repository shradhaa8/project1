// let willRain=false
// let probability = true
// let scorchingSun= false
// if (willRain) {
//     console.log("take umbrella");
// } 
// else if(probability){
//     console.log("you might take umbrella");
    
// }
// else {
//     console.log("no need to take umbrella");
// }

//ternary operator
// const age = 25
// const canVote = (age>=18)?"you can vote":"you cannot vote this time"
// console.log(canVote);

// let numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let oddNumbers=[]
// let evenNumbers=[]

// numbers.map((number)=>{
//     if (number % 2 == 0) {
//         evenNumbers.push(number)
//     }
//     else{
//         oddNumbers.push(number)
//     }
// })
// console.log(oddNumbers)
// console.log(evenNumbers);

let cartItems = [
    {
        name:"ramesh",
        products:[
            {
                title:"watch",
                price: 1000
            },
            {
                title:"airpod",
                price: 500
            },
        ]
    },
    {
        name:"dinesh",
        products:[
            {
                title:"watch",
                price: 1000
            },
            {
                title:"airpod",
                price: 1000
            },
            {
                title:"keyboard",
                price: 1500
            }
        ]
    },
    {
        name:"ramesh",
        products:[
            {
                title:"ear-ring",
                price:1000
            }
        ]
    }
]
const total = cartItems.map(item => {
    const value = item.products.reduce((acc, product) => acc + product.price, 0);
    console.log(`${item.name} has order 0f rs ${value}`);
    
});


// ramesh has order of rs 1500
// ramesh has order of rs 3500
// ramesh has order of rs 1000