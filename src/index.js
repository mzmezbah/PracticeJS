import './form'

// import DefaultModule, {student as std,stdArr,add} from './module.js';

//
// import fun from './new'
// import promise from './promise'
//
// fun()




// import newMob from './inheritance';
//
//
// const phn1 = new newMob('Huawei', 'p30', '$559', 'yes', 'yes')
// console.log(phn1);



// import * as module from './module.js';

// const std1 = std(1,'mezbah', 333,'tct','fci')
// const std2 = std(2,'faisal', 444,'tct','fci')
// const std3 = std(3,'zamshed', 555,'bba','fgc')
//
// console.log(stdArr);
//
// DefaultModule()





// import mob from './class_default-mod.js';
//
// const mb1 = new mob('samsung', 'note 20 ultra', '$550', 'yes')
//
// console.log(mb1);




// console.log(add(45,64));
// const std1 = module.student(1,'mezbah', 333,'tct', 'fci')
// const std2 = module.student(2,'faisal', 444, 'tct','fci')
// const std3 = module.student(3,'imam', 222, 'tct', 'fci')
//
//
//  console.log(module.stdArr);


// var  a = 3;
// function my() {
//   var  a = 55;
// }
//
//   console.log(a);
//
// console.log(a);

// const arr = ['faisal','mezbah','jishan','riad']
//
// const [faisal,,...arg] = arr
//
// console.log(faisal,riad);


// const obj = {name: 'mezbah', shift: 'day', roll: '62',phone: '019833883844',}
//
// const { name, roll, phone, ...rest } = obj
// // console.log(rest);
//
// const obj2 = {name, roll, phone}


// const arr = [1,2,3,4]
// const entries = arr.entries() //show indexNum with data
//
// console.log(entries.next().value);
// console.log(entries.next().value);
// console.log(entries.next().value);


//
// arr.push('5') // add data in the last
// arr.pop() // delete last data
// arr.unshift(0) // add data in front of array
// arr.shift() // delete first element
// console.log(arr);


//
// arr.every() // all element must be true
// arr.some() // minimum one ele should be true

// const mulArr = [0,1,[2,3],[4,5,6]]
// console.log(mulArr.entries(1));

// Array JOIN
//
// var arr = ['My','name','faisal']
// console.log(arr.join('/ ')); //join arry data


// Array inclues method
// console.log(arr.includes('nme')); // search element in the array

// const red1 = arr.reduce((state,item) => {
//   console.log(item);
// },'')


// Reduce right => access value from end
// const red2 = arr.reduceRight((state,item) => {
//   console.log(item);
// },'')

// const arr1 = [0, 1, 2, [3, 4]];
//
// console.log(arr1.flat());
// // expected output: [0, 1, 2, 3, 4]
//
// const arr2 = [0, 1, 2, [[[3, 4]]]];
//
// console.log(arr2.flat(2));
// // expected output: [0, 1, 2, [3, 4]]


// arr.splice(1,2,'faisal') //add remove data,replace data,add new data by indexNum...(indexNUmWhereToStart,amountHowMuchRemoveOrIfAddTHenIndex0,giveDataWhichReplaceOrAdd)


// var newArr = arr.slice(1,2); //return a new arry by indexNum (whereToStart, whereToEnd)
// console.log(newArr);


// console.log(arr);


// var num = [1,4,6,7,8,9,4,57,34]
// console.log(num.toString()); //convert this arry data to  string

//
//
//
// class Profile {
//   constructor(name,phone,email) {
//     this.name = name
//     this.phone = phone
//     this.email = email
//   }
//
//   get address(){
//     return `My name is ${this.name}, my phone number is ${this.phone} `
//   }
//
//   set address({ name, phone, email }){
//     this.name = name
//     this.phone = phone
//     this.email = email
//   }
//
// }
//
// const faisal = new Profile('Faisal','098','faisla@gmai.com')
// faisal.address = { name: 'Farhad', email: 'farhad@email.com', phone: 'xxxx'}
// console.log(faisal.address);


// const fizbuzz = (n) => {
//   if(n%3 == 0 && n%5 == 0){
//     console.log('fizzbuzz');
//   }else if(){
//
//   }
//   else{
//     console.log(n);
//   }
// }
//
// fizbuzz(15)

// let a = [17,28,30]
// let b = [99,16,8]
//
// function compareTriplets(a, b) {
//             let A = 0;
//             let B = 0;
//             a.forEach((value,i) => {
//               if(value > b[i]){
//                 A++
//               }else if(value < b[i]){
//                 B++
//               }
//             })
//
//             console.log(A + ' ' + B)
//
// }
//
//
// compareTriplets(a,b)

// let ar = [1000000001 ,1000000002, 1000000003 ,1000000004 ,1000000005]
//
// function aVeryBigSum(arr) {
//        return arr.reduce((a,b)=> a+b,0)
// }
//
// console.log(aVeryBigSum(ar));
//
// var x= ar.reduce((a,b) => a+b)
// console.log(x);


// const num= [1 ,2, 3, -1, -2, -3, 0, 0]
//
//
// const ratios = (num) => {
//
//       let positive = 0;
//       let negative = 0;
//       let zero = 0;
//     for (var i = 0; i < num.length; i++) {
//       if(num[i]>0){
//         positive++
//       }else if (num[i]<0) {
//           negative++
//       }else if (num[i] == 0){
//         zero++
//       }
//     }
//
//     let x = Math.abs(positive/num.length)
//     let y = Math.abs(negative/num.length) ;
//     let z = Math.abs( zero/num.length );
//     return (x + ' ' + y + ' ' + z);
// }
//
//
// console.log(ratios(num));



// const  n = 6;
//
//  const staircase = (n) => {
//    let a = ''
//     for(let  i = 0; i<=n; i++){
//       a += ' '.repeat(n - i)+ '#'.repeat(i)+'\n'
//     }
//     console.log(a);
//  }
//
//  staircase(6)


//
// let arr = [3, 2, 1, 3]
// //
//
// let birth = (arr) => { // arry highest num count fn;;;
//
//   let x = 0;
//   arr.sort((a,b) =>
//     a -b
//   )
// for(let i=0; i<arr.length; i++){
//   if( arr[arr.length-1] == arr[i]){
//     x++
//   }
// }
//   return x;
// }
// console.log(birth(arr));


// console.log(Math.sin(90*Math.PI/180));


// timing format ===12hour timing foramt convert to 24hour format...
// function timer(time) {
//       let [hours,minute,second] = time.split(':')
//
//       if(second.includes('PM') && hours !== '12'){
//         hours = parseInt(hours) + 12;
//       }else if(second.includes('AM') && hours === '12'){
//         hours = '00'
//
//         console.log(hours)
//       }
//
//       let sec = second.slice(0,2);
//
//       return `${hours}:${minute}:${sec}`
// }
//
//
//
// console.log(timer('12:45:54PM'));



// const grading = (n) => {
//       const gradeNum = [40,45,50,55,60,65,70,75,80,85,90,95,100]
//       for (var i = 0; i < n.length; i++) {
//             for (var j = 0; j < gradeNum.length; j++) {
//               if((gradeNum[j] - n[i]) === 2 || (gradeNum[j]-n[i]) === 1 || (gradeNum[j]-n[i]) === 0  ){
//
//                 if(!gradeNum[j]){
//                   console.log(`grade: ${n[i]} '/n'`);
//                 }else{
//                   console.log(`grade: ${gradeNum[j]}`);
//                 }
//
//               }
//             }
//         }
//
//       return gradeNum[j];
// }
//
//
// console.log(grading([56,78,45]));








// function Grading(arr) {
//   return arr.map(i => {
//     if(i <= 35) return i
//     const m = i % 5
//     if(m < 3) return i
//     else return i + (5 - m)
//     return i
//   })
// }
// console.log(Grading([73 ,67, 38, 33]));





//
// let h2 = $('#my-heading')
// let btn = $('#click')
// let show = false;
// let para = $('.para')
//
//
// btn.addEventListener('click',function () {
//     h2.innerHTML = 'MEZBAH-ZISHAN';
//     let body = $('body');
//     btn.style.outline = 'none';
//     body.style.padding= '60px';
//     body.style.textAlign = 'center';
//     Object.assign(btn.style, button);
//     // btn.style.border = 'none';
//     // let body = document.getElementsByTagName('BODY')[0]
//   if (show) {
//       show = false;
//       btn.innerHTML = "clickMe-S";
//       body.style.textAlign = 'center';
//       para.style.visibility = 'hidden';
//
//   }else{
//     show = true;
//       btn.innerHTML = "clickMe-H";
//     para.style.visibility = 'visible'
//     body.style.backgroundColor = '#cc66ff';
//     body.style.color = '#000000';
//     btn.style.border = '2px solid #009933';
//     btn.style.backgroundColor = '#000';
//     body.style.transition = 'all ease .3s'
//
//   }
// })
//

import axios from 'axios'

function $(selector) {
  return document.querySelector(selector);
}


let button = {
  borderRadius: '20px',
  paddingLeft: '70px',
  paddingRight: '70px',
  paddingTop: '10px',
  paddingBottom: '10px',
  border: '1px solid #fff',
  backgroundColor: '#009933',
  color: '#fff',
  display: 'inline-block',
  backfaceVisibility: 'hidden',
  outline: 'none',
  // padding:'60px',
  textAlign: 'center',

}


let btn = $('#click')
let para = document.getElementsByClassName('para')
let show = false

// console.log(para);

btn.addEventListener('click', () => {

  if (show) {
    show = false;
    for (let e of para) {
      e.style.visibility = 'hidden';
    }
    // para.style.visibility = 'hidden';
    btn.innerHTML = 'Show';
  } else {
    show = true;
    for (let e of para) {
      e.style.visibility = 'visible';
    }
    // para.style.visibility = 'visible';
    btn.innerHTML = 'Hide';
  }
})

Object.assign(btn.style, button)




const header = $('.header')
const root = document.createElement('div')
root.className = 'root'

const heading = document.createElement('h1')
heading.innerHTML = 'MEZBAH UDDIN ZISHAN'


let x = document.createElement('p')
x.className = 'para'
x.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'

root.appendChild(heading)
root.appendChild(x)
header.appendChild(root)


let input_form = $('#form_input');
let ul = $('#nameList');


input_form.addEventListener('keypress', function (event) {
  if (event.keyCode === 13) {
    let name = event.target.value
    createli(ul, name)
    event.target.value = ''
  }
})


function createli(ul, name) {
  let li = document.createElement('li')
  li.className = 'nameListItem'
  li.innerHTML = name
  // li.style.display = 'flex'
  li.style.listStyleType = 'none';
  li.style.border = '1px solid red'


  let span = document.createElement('span')
  span.className = 'delete_item';
  // span.className = 'ml-auto';
  span.innerHTML = 'X';
  span.style.display = 'inline-block';
  // span.style.justifyContent = 'flex-end';
  span.style.float = 'right';
  span.style.marginRight = '10px'
  span.style.cursor = 'pointer'


  li.appendChild(span)
  span.addEventListener('click', () => {
    ul.removeChild(li)
  })



  ul.appendChild(li)
}


let url = 'https://jsonplaceholder.typicode.com/users';
// let UL = $('#fetchData')
// let li = document.createElement('li')
// li.className = 'fetchOutput'
// UL.appendChild(li)
//
//
//
//
// btn.addEventListener('click', ()=> {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => {
//         data.forEach((value => {
//             li.innerHTML = `${li.innerHTML} <br> name: ${value.name}`
//         }))
//       } )
//       .catch(err => console.log(err))
// })



// WELCOME TO AJAX--------------------------------------------------------------

btn.addEventListener('click', () => {

  let tbody = $('#tbody')

  axios.get(url)
    .then(res => {
      res.data.forEach(Contact => {
        console.log(Contact);
        createTdElement(Contact, tbody)
      })
    })
    .catch(err => console.log(err))

  const dbData = JSON.parse(localStorage.getItem('db1'))
  dbData.forEach(Contact => {
    createTdElement(Contact, tbody)
  })
})



function createTdElement(Contact, parentsElement) {
  let TR = document.createElement('tr')
  let TdName = document.createElement('td')
  TdName.innerHTML = Contact.name
  TR.appendChild(TdName)
  let TdPhone = document.createElement('td')
  TdPhone.innerHTML = Contact.phone ? Contact.phone : 'N/A'
  TR.appendChild(TdPhone)
  let TdEmail = document.createElement('td')
  TdEmail.innerHTML = Contact.email ? Contact.email : 'N/A'
  TR.appendChild(TdEmail)
  let TdAction = document.createElement('td')
  let editBtn = document.createElement('button')
  editBtn.className = 'edit'
  editBtn.innerHTML = 'Edit'
  editBtn.addEventListener('click', () => alert('i am clicked'))
  TdAction.appendChild(editBtn)
  let deleteBtn = document.createElement('button')
  deleteBtn.className = 'delete'
  deleteBtn.innerHTML = 'Delete'
  deleteBtn.addEventListener('click', () => alert('i am clicked'))
  TdAction.appendChild(deleteBtn)
  TR.appendChild(TdAction)
  parentsElement.appendChild(TR)

}

let saveBtn = $('.SaveBtn')
let tbody = $('#tbody')
let name = $('#nameFIeld').value;
let phone = $('#phoneFIeld').value;
let email = $('#emailFIeld').value;

saveBtn.addEventListener('click', () => {
  let tr = document.createElement('tr')
  let tdName = document.createElement('td')
  tdName.innerHTML = name
  tr.appendChild(tdName)
  let tdPhone = document.createElement('td')
  tdPhone.innerHTML = phone
  tr.appendChild(tdPhone)
  let tdEmail = document.createElement('td')
  tdEmail.innerHTML = email
  let tdAction = document.createElement('td')
  let edit = document.createElement('button')
  edit.className = 'edit'
  edit.innerHTML = 'Edit'
  edit.addEventListener('click', () => {
    alert('i am edit')
  })
  tdAction.appendChild(edit)

  let del = document.createElement('button')
  del.innerHTML = 'Delete'
  del.className = 'delete'
  del.addEventListener('click', () => {
    alert('i am delete')
  })
  tdAction.appendChild(del)

  tr.appendChild(tdAction)

  tbody.appendChild(tr)

})