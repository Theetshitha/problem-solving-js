"use strict"


//.....................Problem_1.....................//


// let arr1 = [
//   ["Nice", 8450],
//   ["Abu Dhabi", 538281],
//   ["Naples", 2186853],
//   ["Vatican City", 572]
// ];

// let a = millionRounding(arr1);
// function millionRounding(x) 
// {let count="1";
//   for (let i in x) 
//   {
//     x[i][1]=x[i][1].toString();
//     for(let j=0;j<x[i][1].length-1;j++){

//         count+=0;

//     }
//     console.log(count);
//     var y = x[i][1]< 500000 ? 0 : Math.round(x[i][1] / count) * count;
    
//     x[i][1]=y;
//     count="1";

//   }

//   return x;
// }

// console.log(a);


//.....................Problem_2..................//

// let a = mapping(["a", "b", "c"]);
// function mapping(x) 
// {
//   let obj = {};
//   x.forEach((value) => {
//     obj[value]=value.toUpperCase();
//   });
//   return obj;
// }
// console.log(a);

//....................
// let a =mapping(["a","b","c"]);
// function mapping(arr){
//     console.log(arr);
//     let obj={};
//     arr.forEach((value) => {
//         console.log(value);
//         obj[value]=value.toUpperCase();
//     });
//     return obj;
// }
// console.log(a);
//.................Problem_3..............................//

// let colors = {
//       1: "green",
//       2: "pink",
//       3: "yellow"
//     };
    
//     // let count = 0;
//     // let values = Object.values(colors);
//     // console.log(values);
//     // for (let i in values) 
//     // {
//     //   count++;
//     // }
//     // console.log(count);  

//     //..............................

// //     let key=Object.keys(colors);
// //     console.log(key.length);
// //     let value=0;
// //     for(let i in colors){
// //         console.log(colors[i]);
// // value++;
// //     }
// //     console.log(value);
    
// //..............................Problem_4...................//
// let a = products({ "TV-500": 500, "computer-600": 600, "radio-50": 50, "fridge-2000":2000, "washing machine-1500": 1500 });

// function products(x) {
//   let arr1 = Object.keys(x);
//   console.log(arr1);
//   let arr2 = [];

//   for (let i = 0; i < arr1.length - 1; i++) 
//   {
//     console.log(i);
//   //  console.log(arr1[i]);

//     // console.log("i= "+i);
//     for (let j = i+1; j <arr1.length; j++){
//     // console.log(x[arr1[i]]);
//       if (x[arr1[j]] > x[arr1[i]] && x[arr1[i]]>=500 && x[arr1[j]]>=500) 
//       {
//         // console.log(arr1+"i= "+i);
//         let temp = arr1[i];
//         arr1[i] = arr1[j];
//         arr1[j] = temp;
//         // console.log(arr1+"i_1= "+i);

//       }
// console.log(arr1);

//     }

//   }

//   for (let i = 0; i < arr1.length; i++) 
//   {
//     // console.log("i2= "+ i);;
//     if (x[arr1[i]] >= 500) 
//     {
//       arr2.push(arr1[i]);
//     }
//   }

//   return arr2;
// }

// console.log(a);

//.....................Problem_5................//

// let a = frequencyDistribution(["A", "A", "B", "C", "B","a","A","p"]);

// function frequencyDistribution(x) 
// {
//   let obj = {};

//   for (let i = 0; i < x.length; i++) 
//   {
//     if(obj[x[i]] == undefined) 
//     {
//       obj[x[i]] = 1; 
//     } 
//     else 
//     {
//       obj[x[i]]++;
//     }
//   }
//   return obj;
// }

// console.log(a); 

//.........................Problem_6..........................//
// let n = generation(-3, "m");

// function generation(x, gender) 
// {
//   let male = {
//     "-3": "great grandfather",
//     "-2": "grandfather",
//     "-1": "father",
//     "0": "me!",
//     "1": "son",
//     "2": "grandson",
//     "3": "great grandson"
//   };

//   let female = {
//     "-3": "great grandmother",
//     "-2": "grandmother",
//     "-1": "mother",
//     "0": "me!",
//     "1": "daughter",
//     "2": "granddaughter",
//     "3": "great granddaughter"
//   };

//   let obj = gender === "m" ? male : female;

//   console.log(obj[x]);

// }