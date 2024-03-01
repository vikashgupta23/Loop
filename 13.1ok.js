/*
Write a program to take a number N from the user and print the following pattern with the input given by the user:

N=5

*
* *
* *
* *
* * * * *

*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
let i=1;

while(i<=n)
{
    if(i==1||i==n)
    {
        console.log("* ".repeat(i));
    }
    else
    {
        console.log("* ".repeat(n-3));
    }
    i+=1;
}