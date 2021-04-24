console.log(`lecture-twelve=== promise: `);

// IN js promise is most  important.. when we work with api its return a promise..then we need to work with the promise ....
//
// Here we made a simple promise..we can create a promise by using 'new promise' keyword..it take a callback function & two argument 'resolve' 'reject'..when we work with it, it work with us by resolve ...but when any error happen work reject..
//
// after all, we can work mainly our promise with two method..'.then()' & '.catch()' ..actually we work with then but any err happen then catch method return the error...
//
// we work this method like chain... when first then return aanother promise we can use another then as a chain...

// const newPromise = new Promise((resolve,reject)=> {
//   let name = 'mezbah'
//   resolve(name)
// })
//
//
// newPromise.then((name) => console.log(`my name is ${name}`) )
//           .catch((err)=> {
//
//           })
//

fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => response.json())
  .then((body) =>{
      let list = body.map((data) => {
        let li = document.createElement('li')
        let text = `name: ${data.name}; Website: ${data.website};`
        let textNode = document.createTextNode(text);

        li.appendChild(textNode);

        return li;
      })

        list.forEach((li) => document.getElementById('mylist').appendChild(li))

  })
  .catch((err) =>  console.log(err))




export default fetch;
