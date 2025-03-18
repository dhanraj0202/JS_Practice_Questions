let a = Math.floor(Math.random() * 900) + 100;
let b = Math.floor(Math.random() * 900) + 100;
let c = Math.floor(Math.random() * 900) + 100;
let d = Math.floor(Math.random() * 900) + 100;
let e = Math.floor(Math.random() * 900) + 100;
console.log("Generated Numbers:", a, b, c, d, e);
let max = 0;
if(a>b){
    max = a;
}
else{
    max = b;
}
if(c>max){
    max = c;
}
if(d>max){
    max = d;
}
if(e>max){
    max = e;
}
console.log("Maximum number is",max);

let min = 0;
if(a<b){
    min = a;
}
else{
    min = b;
}
if(c<min){
    min = c;
}
if(d<min){
    min = d;
}
if(e<min){
    min = e;
}
console.log("Minimum number is",min);