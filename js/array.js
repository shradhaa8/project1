// // let students=["ram", "rory", "hari"]

// // let student= [
// //     {
// //         name: "ramesh",
// //         roll: 20
// //     },
// //     {
// //         name:"rory",
// //         roll: 25
// //     },
// //     {
// //         name:"hari",
// //         roll: 26
// //     }
// // ]
// // console.log(students);
// // console.log(student);

// let cart= [
//     {
//         price: 20,
//         qty: 3
//      },
//     {
//         price: 30,
//         qty: 4
//     },
//     {
//         price: 40,
//         qty: 5
//     }
// ]
// const total= cart.reduce((acc, curr)=>
//     acc+curr.price * curr.qty, 0

// )
// console.log("your total is:", total);
// let value = cart.slice(1,2).map(e=>{
//     return e.price
// })
// console.log("this is all prices:", value);

// let courses=[
//     {
//         class:"mern",
//         status: true
//     },
//     {
//         class:"python",
//         status: false
//     },
//     {
//         class:"php",
//         status: true
//     },
//     {
//         class:"c++",
//         status: false
//     }
// ]
// let completed=[]
// let incomplete=[]
// for (let index = 0; index < courses.length; index++) {
//     const element = courses[index];
//     if (element.status) {
//         completed.push(element)
        
//     } 
//     else{
//         incomplete.push(element)
        
    
//     }
// }
// console.log(completed); 
// console.log(incomplete);   
// let fruits = ["apple", "mango", "orange","grapes"]
//  const popedFruit = fruits.pop()
// console.log(popedFruit);
 // console.log(fruits);

// // const fruit1= fruits.forEach(function(fruit, index){
// //     console.log(fruit, index);
    
// // })

// let numbers = [1,2,3,4,5,6,7,8]
// const filterNumber = numbers.filter(function (num) {
//     return num>3
    
// })
// console.log(filterNumber);

// let numbers1=[1,2,3,4,5,6,7,8]
// const foundNumber = numbers1.find(function(num){
//     return num>2
// })
// console.log(foundNumber)

// // let sentence ="there is elephant."
// // const splitSentence = sentence.split(" ")
// // console.log(splitSentence);

// let sentence ="there/is/elephant."
// const splitSentence = sentence.split("/")
// console.log(splitSentence);

// let button = document.getElementById("button")
// button.addEventListener("click",function(){
//     let conf = confirm("are you sure?")
//     console.log(conf);
    
// })

//topic-operators

// let a=5
// let b="5"
// console.log(a==b);//loose comparison

// console.log(a===b);//strict comparison

// let bool = true;
// console.log(a===bool);

//css hover and span use case
//position and z index
//before and after


// let fruits= ["apple", "mango", "pineapple"]
// let breakFast=[...fruits, "bread"] //Spread Operator
// console.log(breakFast);

// let num = [1,2,3,4]
// let newNum= num.push(5)
// console.log(newNum);
// console.log(num);
// let popNum= num.pop()
// console.log(popNum);
// console.log(num);
// let str="1 2 3 4 5"
// let newStr=str.split(' ')
// console.log(str);

// let countries = [
//     {
//         name:"Nepal",
//         code:"np"
//     },
//     {
//         name:"India",
//         code:"in"
//     },
//     {
//         name:"Qatar",
//         code:"qr"
//     }
// ]

// function findCountryCode(countryName) {
//     for (let index = 0; index < countries.length; index++) {
//         let element = countries[index]
//         countryName = countryName.toLowerCase().trim()
//         if (element.name.toLowerCase() == countryName) {
//             console.log(`country code for ${countryName} `, element.code)
//             return
//         }
//     }
    
//  }
// let num=[1,2,3,4]
// for (let index = 0; index < num.length; index++) {
//     const element = num[index];
//     console.log(element);
// }
// const students=[
//     {
//         name:"Ram",
//         paidStatus: true
//     },
//     {
//         name:"Sita",
//         paidStatus: true
//     },
//     {
//         name:"Kriti",
//         paidStatus: false
//     },
//     {
//         name:"Yam",
//         paidStatus: false
//     }
// ]
// students.forEach(student=>{
//     if (student.paidStatus==true) {
//         console.log(`${student.name} can give exam`);
        
        
//     } else {
//         console.log(`${student.name} cannot give exam`);
        
        
//     }
// })
// let canGiveExam=[]
// let cannotGiveExam=[]
// for (let index = 0; index < students.length; index++) {
//     const element = students[index];
//     if (element.paidStatus) {
//         canGiveExam.push(element)
//     } 
//     else{
//         cannotGiveExam.push(element)
        
//     }
// }
// console.log("Those who can give exam:");
// console.log(canGiveExam);
// console.log("Those who cannot give exam:");
// console.log(cannotGiveExam);
// const student1=[
//     {
//         name:"Ram",
//         paidStatus: true,
//         hasScholarship:false
//     },
//     {
//         name:"Sita",
//         paidStatus: true,
//         hasScholarship:true
//     },
//     {
//         name:"Kriti",
//         paidStatus: false,
//         hasScholarship:false
//     },
//     {
//         name:"Yam",
//         paidStatus: false,
//         hasScholarship:false
//     }
// ]
// student1.forEach(std=>{
//     if (std.paidStatus && std.hasScholarship) {
//         console.log(`${std.name} can give exam`);
        
//     } else {

//         console.log(`${std.name} cannot give exam`);
//     }
// })

const data=[
    {
        name:"orange",
        scientificName:"xyz",
        prices:[
            {
                country:"nepal",
                price:100
            },
            {
                country:"us",
                price:2
            },
            {
                country:"canada",
                price:3
            }
        ]
    },
    {
        name:"pineapple",
        scientificName:"xyz",
        prices:[
            {
                country:"australia",
                price:10
            },
            {
                country:"south korea",
                price:2000
            },
            {
                country:"japan",
                price:300
            }
        ]
    }
]
// data[1].prices.forEach((p)=>{
//     console.log(`price of orange is ${p.price} in ${p.country}`);
    
// })
// data[1].prices.map((p)=>{
//     console.log(`price of orange is ${p.price} in ${p.country}`);
    
// })


let willRain=true
let probability = false
let scorchingSun= false
if (willRain  && scorchingSun) {
    console.log("take umbrella");
} else {
    console.log("no need to take umbrella");
}

