console.log(`lecture five=== deStructureing: `);

//
// In es6, destructure feature is like 69 in normal feature.. HEre in arry we took multiple varriable in one line,,,bt one condition is variable index and data inddex need to be same....like.....
//

const arr = ['mezvah', 'faisal', 'hasan', 'noman', 'zamshed', 'kazi']


const [name1, , , name4] = arr;


// console.log(`name1: ${name1} name4: ${name4};`);



// In object, deStructureing is we just keep the variable name in {}
// karli bracket...


const object = {
  name: 'mezbah zishan',
  email: 'mdmezbahuddinfeni@gmail.com'
}

const {name,email} = object;

// console.log(name);



// In function,  we also can use deStructureing but here we can use a '{}' bracket in when pass the value then we dont need to pass data in sequencely..but for this we need to keep our funtion data in {} carli bracket..

const studentInfo = ({name,email}) => console.log(`name: ${name}; Email: ${email};`);


const st1 = studentInfo({email,name})


console.log(st1);
