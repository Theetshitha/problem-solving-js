"use strict"

// All the natural numbers are whole numbers
// All counting numbers are whole numbers
// All positive integers including zero are whole numbers
// All whole numbers are real numbers


// ------------------NOV-17 ----problem1-------------------


// let n= prompt("Enter a number :");
// console.log(n);

// let n1=n.split('.');

//     if(n1[1]==undefined){

//         console.log('0');

//     }

//     else{

//         let n2=n1[1];
//         let c=n2.length;
//         console.log(c)

//     }

// ------------------NOV-17 ----problem2-------------------



// let arr = [1,2,2,4,5,5,6,7,2,2]

// function repeat(c){
//  let count = {}

//  for(let i =0; i < c.length; i++){ 
//      if (count[c[i]]){
//         console.log(count[c[i]])
//      count[c[i]] += 1
//      } else {
//      count[c[i]] = 1
//      }
//     }  
//     for (let i in count){
//         if (count[i] >= 2){
//             console.log("Number = "+i +" count = "+ count[i] )
//         }
//     }

//   console.log(counts)

// }

// repeat(arr);


// ------------------NOV-17 ----problem3-------------------

// let arr=[-2,-6,-7, 6, 7, 4, -1];
// let pos_even_count=0;
// let neg_odd_count=0;
// let count=0;

// for(let i=0;i<arr.length;i++){
//     if(arr[i]>0 && arr[i]%2==0){
//         pos_even_count++;
//     }
//     else{
//         if(arr[i]<0 && arr[i]%2!=0){
//             neg_odd_count++;
//         }
//     }
// }
// count=pos_even_count+neg_odd_count;
// console.log(count);

// ------------------NOV-17 ----problem4-------------------

// let sumOfLeg=noOfLeg(5,7,8);
// console.log(sumOfLeg);

// function noOfLeg(c,b,a)
// {
//     console.log(" There are "+c*2+" hen legs, "+b*4+" cow legs , "+a*4+" rabbit legs");
//     return (c*2)+(b*4)+(a*4);
// }


// ------------------NOV-17 ----problem5-------------------


// let str='Hi welcome to DCKAP';
// let str2=' ';

//     for(let i=str.length-1;i>=0;i--){
//         str2+=str[i];

//     }

//         str2=str2.split(" ");
//         let str3=[]; 

//             for(let j=str2.length-1;j>=0;j--){
//                 str3+=" "+str2[j];
//             }

//                 console.log(str3);


// ------------------NOV-17 ----problem 6-------------------

// let arr=[1, 'test', true, 10, 7, 'array'];

// let sum=0;

// for(let i in arr){
//     if(typeof arr[i]=='number'){
//        sum+=arr[i]*2; 
//     }
// }
// console.log(sum);

// -----------------NOV-17 ----problem 7-------------------


// let a=['test','organization','Abc'];
// let b='AbC';
// let a1=a.join(',')
// console.log(a1);

// a1=a1.toLowerCase();
// let a2=a1.split(',')
// b=b.toLowerCase();

// function checkString(a1,b){
//     let c=a1.includes(b);
//     if(c){
        
//         let d=a2.indexOf(b);
//         console.log(d);
//     }

//     else{

//         console.log(-1);
    
//     }
   

// }

// let result=checkString(a1,b);



// ------------------NOV-18 ---- problem-1-------------------

// let arr=[1, 2, 3, 4, 5];
// let ncount=2;

// console.log("Given array",arr ,"Ncount : ",ncount);

// function value_increse_decrease(a,b){
   
//     for(let i in a){
//         if(i%2==0){

//             arr[i]=a[i]+2*b
//         }

//         else{
        
//             arr[i]=a[i]-2*b
//         }
//     }
// console.log("Result :",arr);
// }

// let result=value_increse_decrease(arr,ncount);


// ------------------NOV-18 ---- problem-2-------------------

// let arr1=[1,2,3,4,5];
// console.log(arr);
// arr1.push(arr1[0],arr1[1]);
// console.log(arr);
// let i=2
// arr.shift();
// arr1.shift();
// arr1.shift();

// console.log(arr1);



// let arr=[1,2,3,4,5];
// let dir='right';
// let count=5;
// console.log(arr);

// for(let i=0;i<count;i++){
//     if(dir.startsWith('r')){
//         let a=arr.pop();
//         arr.unshift(a);

//     }
//     else{
        
//         let b=arr.shift();
//         arr.push(b);
//     }

// }
// console.log(arr);


// ------------------NOV-22 ---- problem-1-------------------


// let str="XOXoox";
// str=str.toLowerCase();

// let xcount=0;
// let ocount=0;

// for(let i in str){
//     if(str[i]=='x'){
//         xcount++;
//     }
//     else if(str[i]=='o'){
//          ocount++;
//     }
    
// }


// if(xcount==ocount){
//     console.log(true);
// }
// else{
//     console.log(false);
// }


// ------------------NOV-22 ---- problem-2-------------------

// let st='abcdrvvhk';

// let str=st.split("");
// let str1=[];

// for( let i in st)
// {
//     str1.push(str[i].toUpperCase()+str[i].repeat(i));
    
// }
// str1=str1.join("-")
// console.log(str1)







// let str1='abcd';

// function iterate(str) {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//       let acc = '';
//       for (let j = 0; j < i + 1; j++) {
//         console.log(j);
       
//         acc += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
//         console.log(i)
//       }
//       arr.push(acc);
//     }
//     return arr.join('-');
//   }
//   console.log(iterate(str1)); 

// 24/1/1969



// let a = abc('abcdefgh');
// function abc(x)
// {
//     var y ='';
//     for(let i = 0; i < x.length; i++)
//     {
//         for(let j=0; j <= i; j++)
//         {
//             if(j == 0)
//             {
//               y += x[i].toUpperCase();
//             }
//             else
//             {
//                 y += x[i]
//             } 
//         }
//         if(i < x.length-1)
//             {
//                 y +="-"
//             }
        
//     }
//     return y;
// }
// console.log(a);

//--------------------- valid parenthesis --------------------

// let a = valid("(]");

// function valid(x)
// {
//     let arr = [];
//     let brackets = {
//         '(':')',
//         '[':']',
//         '{':'}',
//     };

//     for(var i = 0; i < x.length; i++)
//     {
//         var idx = x[i];

//         if(brackets[idx])
//         {
//             arr.push(idx);
//         }
//         else if(brackets[arr.pop()] !== idx)
//         {
//             return false;
//         }
//     }
//     return arr.length == 0;
// }
// console.log(a);




















// ------------------NOV-29 ---- problem-1-------------------


// function million(x) 
// {
//   let arr = [];

//   for (let [city, population] of x) 
//   {
//     var y = population < 500000 ? 0 : Math.round(population / 1000000) * 1000000;
//     console.log(Math.round(population < 500000 ? 0 : (population / 1000000) * 1000000))
//     arr.push([city, y]);
//   }

//   return arr;
// }

// let arr1 = [
//   ["Nice", 45600],
//   ["Abu Dhabi", 1482816],
//   ["Naples", 2186853],
//   ["Vatican City", 572]
// ];

// let a = million(arr1);

// console.log(a);

// ------------------NOV-29 ---- problem-4-------------------

// let a=['p','s'];
// let b=obj(a);

// let a1='hh'
// a1=a1.toUpperCase
// function obj(x){
//     let obj1={};
// for(let i=0; i<x.length;i++){
//     if(x[i]==x[i]){
//         obj1[x[i]]=x[i].toUpperCase();
//     }

// }
//  console.log(obj1);
// }


// ------------------NOV-29 ---- problem-5-------------------

// let obj={
//   "tv":700,
//   "mobile":500,
//   "computer":900,
//   "radio":300
// }

// let ans=[];

// for(let i in obj){
  
  
//   arr.sort(function(a, b){return b-a});
//   if(obj[i]>500){
    
//     ans.push(i);
//   }
 
// }



// const points = [40, 100, 1, 5, 25, 10];
// points.sort(function(a, b){return b-a});


// let obj = {
//   "tv": 700,
//   "mobile": 500,
//   "computer": 900,
//   "radio": 300
// };

// let ans = [];

// // Extract values from obj and sort them in descending order
// let values = Object.values(obj).sort(function(a, b) {
//   return b - a;
// });

// // Iterate through the sorted values
// for (let i = 0; i < values.length; i++) {
//   // Iterate through the keys in obj
//   for (let key in obj) {
//     // Check if the value of the current key matches the sorted value
//     if (obj[key] === values[i] && obj[key] > 500) {
//       ans.push(key);
//       break; // Break the loop once a match is found
//     }
//   }
// }

// console.log(ans)


// --------------------------------------------------


// function generation(gen_, gender) {
//     let generations = {
//       "-3":{
//         m:"great grandfather",
//         f:"great grandmother"
//       },
//       "-2":{
//         m:"grandfather",
//         f:"grandmother"
//       },
//       "-1":{
//         m:"father",
//         f:"mother"
//       },
//         0: {
//         m: "me!",
//         f: "me!"
//       },
//       1: {
//         m: "son",
//         f: "daughter"
//       },
//       2: {
//         m: "grandson",
//         f: "granddaughter"
//       },
//       3: {
//         m: "great grandson",
//         f: "great granddaughter"
//       },
//     };
//     return generations[gen][gen_der];
//   }
//   let val = generation(1, "f");
//   console.log(val); 

