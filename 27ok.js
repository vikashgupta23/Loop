/*
Write a program to take a number from the user and print the number of digits in the given number. 
(can you do it without  loop O(1) )

Test Case1:
Input:
456
Output:
3
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
let sum=0;
while(n!=0)
{
    n=Math.floor(n/10);
    sum+=1;
}
console.log("Number of the digit is:",sum);