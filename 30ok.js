/* 	
Factors question
*/
const input=require("readline-sync")
let n=input.questionInt("Enter the value of n:")
for(i=1;i<=n;i++)
{
    if(n%i==0)
    {
        console.log("Factor of n:",i);
    }
}