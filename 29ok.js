/*
Write a program that takes a number from the user and prints the number 
that is formed by reversing the digits of the number.

Test Case1:
Input:
123
Output:
321
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
let a=0;
while(n!=0)
{
    a=a*10;
    a+=n%10;
    n=Math.floor(n/10);
}
console.log("Revers is:",a);
