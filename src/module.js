console.log(`lecture-seven=== module: `);

// By using module system in es6, we can write our code indivisual indivisual file and then we can export all our code in one file..for this====


// we need to use export key word in this file what we need to access other file  & then  we import the file where we need to access...

// if we need to change any fn or variable name thn we can do it in import file ..using {student as std, dfjd} like this,

// when we import all file as an object then when we access the value   we need to write like objName.varibleName like (obj.stdArr)

// import * as (objName) from 'location'  //for all file as an object

 // import {what exacly we need} from 'location' //by destructuring system

export const stdArr = []
export const student = (id, name,roll,dept, institute) => {
  stdArr.push({id, name,roll,dept, institute})
 }



const defaultModule = function(){
  console.log('defaultModule');
}

export default defaultModule


export const add = (a,b)=> a+b;
