console.log(`lecture-six=== rest-spred-operator: `);


// rest ooperator:
// rest operator returen a new arry. when we use this rest operator , we need to use this '(...arry)' last paramerter of a function. otherwise it doesnot work..

// const arr = [1,3 ,5,56,64,73]
//
//
// const [num,n,b,...newArr] = arr;
//
// console.log(num , newArr);  //its create a new arry..
// console.log(arr.toString());//return data to string


const student = (...num)=>
{return num.reduce((a,b)=> {
  return a+b
})}


// console.log(student(3,5,4,4,63,64,64,7));



//spred operator:
//
// spred operator looks same like rest operator..but it works opposite..we can use spred operator in arry & object..
// we can copy one arry or object to another arry or object...its concat an arry or an obj;


const arry1 = ['mezbah', 'zishan', 'faisal', 'riad', 'saidul', 'jibon']

const arry2 = [2,4,5,3,66,45,34,55]

const arry3 = [...arry1,'md','mz',...arry2]

// console.log(arry3);


const obj1 = {name: 'mezbah', roll: 34444, dept: 'tct'}

const obj2 = {institute: 'fci', reg: 344322, board: 'technical education board'}

const obj3 = {...obj1,...obj2}

// console.log(obj3);
