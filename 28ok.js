/*
Write a program to take a number from the user and print the sum of the digits of the given number.

Test Case1:
Input:
456
Output:
15
Explanation:
4+5+6 = 15
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
let sum=0;
while(n!=0)
{
    a=n%10;
    sum+=a;
    n=Math.floor(n/10);
}
console.log("Sum of the digit is:",sum);
