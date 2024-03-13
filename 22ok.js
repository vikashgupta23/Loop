/*
Take the number N and the name from the user as inputs, and print the name N times.

Test Case1:
Input:
2
Bedanti
Output:
Bedanti 
Bedanti
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
let a=input.question("Enter the name:")
for(i=1;i<=n;i++)
{
    console.log(a);
}