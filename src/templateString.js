console.log(`second lecture result=== template-string:  `);
//
// template string is new feature in es6. here we can use back tik & within the whole back tik is work as a string & variable is diclared ${} under this sign;

//
// const data = []
// function student(id,name,roll,reg) {
//   this.id = id
//   this.name = name
//   this.roll = roll
//   this.reg = reg
//   data.push(this)
// }
//
// student.prototype.dept = 'tct'
//
//
// const st1 = new student(1,'mezbah',382362,218870)
// const st2 = new student(2,'faisal',382334,218833)
// const st3 = new student(3,'nazrul',382324,218822)
// const st4 = new student(4,'ridoy',382362,218870)
//
// console.log(data);


const name = 'mezbah'
const roll = 4444
const dept = 'tct'


const details = `name: ${name}; roll: ${roll};
dept: ${dept};`

console.log(details);
