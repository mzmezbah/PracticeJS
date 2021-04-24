import M from './class_default-mod'

console.log(`lecture-eleven=== inheritence: `);



// In ES6, the extends word use for inherit class...like under ...
// we also use super class for inherit parents class constructor....
// here within constructor we need to give first super functionk..then we write child class condition...
// when we use super class fn then it import full parents class constructor....


class newMobData extends M {
  constructor(brand, model, price, isAvilable, replaceAble) {
      super(brand,model,price,isAvilable)
      this.replaceAble = replaceAble
  }
}


export default newMobData;
