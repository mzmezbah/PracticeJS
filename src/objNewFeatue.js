console.log(`lecture four=== NewFeatureOfObj`);

// In js es6, we dont need to declare value name when key name &  value name are same...like under...also in method declaretion we just need to method name and then give method argumert '()' then just give condition....

const name = 'mezbah uddin'
const roll = 345
const email = 'mzmezbah@gmail.com'

const obj = {
  name,
  roll,
  email,

  print(){
    console.log(`name: ${name}; roll: ${roll}; email: ${email}`);
  }

}

obj.print()
