'use strict'

// const obj = {
//     name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// }
// for (let item in obj){
//    if (typeof obj[item] ==='object'){
//        for (let hobby in obj[item]){
//            console.log(`${hobby} ,${obj[item][hobby]}`)
//        }else{
//            console.log(`${item},${obj[item]}`)
//        }
//    }
// }


// Переберите вложенный массив
// Выведите на экран значения массива.
// let arrNumbers = [['banana', 2, 3, false, 5], [6, 7, 8], ['56', 10]];
//
//
// const task = () => {
//     for(let i = 0; i < arrNumbers.length; i++){
//         for (let t = 0; t < arrNumbers[i].length; t++){
//             console.log( arrNumbers[i][t])
//           //  console.log( arrNumbers[i][t])
//         }
//     }
// }
// task()


// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function (elem){
//     return elem + 20
// });
//
// console.log(result)



// function Laptop (model, size, Ozu, ssd, hdd, videoCard, color, year, price,percent){
//     this.laptopModel = model;
//     this.laptopSize = size;
//     this.laptopOzu = Ozu;
//     this.laptopSsd = ssd;
//     this.laptopHdd = hdd;
//     this.laptopVideoCard = videoCard;
//     this.laptopColor = color;
//     this.laptopYear = year;
//     let laptopPrice = price;
//     let laptopPercent = percent;
//     this.getPrice = function () {
//         return laptopPrice
//     }
//     this.setPrice = function (){
//         return laptopPrice + laptopPercent
//     }
// }
//
// const Asus = new Laptop ('fx304',200,4,'ssd','hdd','snapdragon','black',2019,1000,30);
// console.log(Asus)
//
// console.log(Asus.getPrice());



// const obj = {  name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// }
// let {name,age,city,hobby} = obj;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(hobby);