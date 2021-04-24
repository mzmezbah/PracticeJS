console.log(`lecture-nine=== class_default-module`);



// In js es6, we have a new class keyword ..by using this we can make a class..but the other work just like es5 constructor pattern..here just we need to keep the constructor pattern in the class keyword..
//
//
// in js es6 , we can use default module..we can declare just one default mod in one file..& we can impot it by any name..
// not use {} bracket...like this module diclare...



export default class Mobile{
  constructor(brand,model,price,isAvilable){
    this.brand = brand
    this.model = model
    this.price = price
    this.isAvilable = isAvilable
  }
  print() {
    console.log(`model: ${model}; price: ${price};`);
  }
}

// export default Mobile
