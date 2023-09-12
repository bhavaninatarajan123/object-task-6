const numbers=[1,2,3,4,5];
var c=numbers.reduce(function(a,b){
return a*b;
})
var d=c/3;
document.write(d);