
function calc(event){
    var current=document.getElementById("Current Reading")
var previous=document.getElementById("Previous Reading")
var total= current.value - previous.value
var result=document.getElementById("button")
var display=document.getElementById("result")
var amt;
if (total<=100) {
    amt=0;
}
else if(total<=400){
    amt=(total-100)*4.5;

}
else if(total<=500){
    amt=1350+(total-400)*6;
}
else if(total<=600){
    amt=1950+(total-500)*8;
}
else if(total<=800){
    amt=2750+(total-600)*9;
}
else if(total<=1000){
    amt=4550+(total-800)*10
}
else{
    amt=6550+(total-1000)*11
    
}
     display.append("Rs."+ amt)
     event.target.remove()
     

}
