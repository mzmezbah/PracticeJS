console.log(`its 4th lecture===arroFn: `)

// normal function;
//
// function add(a,b) {
//     return a+b;
// }
//
// console.log(add(4,6));

// arroFn===

// 1. need to take fn name in a variable.
// 2. at first pass the argument. for single arg, dont need to
// give parentisi '()'
// 3 give arro notation.
// 4. give carli bracket '{}'..for one condition no need to use
// dont need to write 'return';


const add = (a,b)=> a+b;

// console.log(add(5,6));

const sqr = x => x*x

// console.log(sqr(5));



const student = (id, name,roll,dept, institute) => {
  this.id = id
  this.name = name
  this.roll = roll
  this.dept = dept
  this.institute = institute
  console.log(this);
}


const std1 = student(1,'mezbah', 333,'tct', 'fci')
const std2 = student(2,'faisal', 444, 'tct','fci')
const std3 = student(3,'imam', 222, 'tct', 'fci')


// 5. in arrowFn, 'this' work freely..like this====

// **Here setTimeout is done data output delay mili sec,it took to arg first one is call back fn with conditon  & second one is mili sec.....

const obj1 = {
  name : 'mezvah',
  roll : 344,
  print: function() {
    setTimeout(function()  {
      console.log('name: '+ this.name + ' ' + 'roll: ' + this.roll)
    }.bind(this), 4000)
  }
}

 // obj1.print()


 const obj2 = {
   name : 'mezvah',
   roll : 344,
   print: ()=> {
     setTimeout(()=> {
       console.log('name: '+ this.name + ' ' + 'roll: ' + this.roll)
     }, 4000)
   }
 }

 obj2.print()
