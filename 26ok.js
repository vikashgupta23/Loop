/*
Write a program to calculate the sum of the following series where N is input from the user. 1 + 1/2 + 1/3 + 1/4 + 1/5 +…………1/N

Test Case1:
Input:
4
Output:
2.08
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
let sum=0;
for(i=1;i<=n;i++)
{
    sum+=1/i;
}
console.log("Sum of the series:",sum);