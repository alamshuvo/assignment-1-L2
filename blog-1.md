<!-- The significance of union and intersection types in Typescript. -->
# Significance of Union and Intersection type 
Union Type : We know that When we run into library that expects a parameter to be either a number or a string ,Its called Union types . A union type describes a value that can be one of several types .We use vartical bar (|) to seperate each type ,so number | string | boolean  is the type of value that can be a number , a string, or a boolean.
# Code 
let userId: string | number ;
userId="adfa";
userId=1111;

Intersection Type : Intersection types are closely related to union types but they are used very differently .An intersection type combines multiple types into one denoted by the "&",This allows you add together existing types to get a single type that has all the features you need.
# Code
interface User {
    name:string;
}
interface Admin {
    role : string;
}
let userAdmin: User & Admin ={
    name : "John Doe",
    role:"admin"
}
in this case ,userAdmin has both the properties of User and Admin .This is useful when you want to create an object that needs to conform to  multiple interfaces.