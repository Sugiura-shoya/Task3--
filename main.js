'use strict';

document.getElementById("result").value=0;

let num1=0;

let num2=0;

let str="";

let flag=false;

let i=1;

function edit(num){
  if(flag==true){
    num1 = Math.floor(num1*Math.pow(10,i)+num);
    num1=num1/Math.pow(10,i);
    i++;
  }
  else{
    num1=num1*10+num;
  }
  document.getElementById("result").value=num1;
}

function ed(){
  if(flag==true){
    num1 = Math.floor(num1*Math.pow(10,i));
    num1=num1/Math.pow(10,i);
    i+=2;
    }
  else
  num1=num1*100;
  document.getElementById("result").value=num1;
}

function sum(){
  flag=false;
  i=1;
  num2=num1;
  num1=0;
  str="+";
  document.getElementById("result").value=num2;
}

function dif(){
  flag=false;
  i=1;
  num2=num1;
  num1=0;
  str="-";
  document.getElementById("result").value=num2;
}

function mul(){
  flag=false;
  i=1;
  num2=num1;
  num1=0;
  str="*";
  document.getElementById("result").value=num2;
}

function mod(){
  flag=false;
  i=1;
  num2=num1;
  num1=0;
  str="/";
  document.getElementById("result").value=num2;
}

function dc(){
  flag=true;
}

function equal(){
  if(str==="+"){
    num1=num2+num1;
  }
  else if(str==="-"){
    num1=num2-num1;
  }
  else if(str==="*"){
    num1=num2*num1;
  }
  else if(str==="/"){
    num1=num2/num1;
  }
  document.getElementById("result").value=num1;
}

function AC(){
  document.getElementById("result").value=0;
  num1=0;
  num2=0;
}