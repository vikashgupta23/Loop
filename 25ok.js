/*
Write a program to take two integers M, and N and print the sum of numbers in the range M to N.

Test Case1:
Input:
2
7
Output:
27
Explanation:
Output should be 27 as the sum of numbers (2+3+4+5+6+7=27)
*/
const input=require("readline-sync")
let m=input.questionInt("Enter the  value of m:")
let n=input.questionInt("Enter the  value of n:")
let sum=0;
for(i=m;i<=n;i++)
{
    sum+=i;
}
console.log("Sum of the m to n is:",sum);