
// this page cannot show any output, because we cannot import this page any where...this page is just for practice and memorise.....

import axios from 'axios'

function $(selector){
  return document.querySelector(selector);
}


let button = {
  borderRadius : '20px',
  paddingLeft : '70px',
  paddingRight: '70px',
  paddingTop : '10px',
  paddingBottom : '10px',
  border : '1px solid #fff',
  backgroundColor : '#009933',
  color : '#fff',
  display : 'inline-block',
  backfaceVisibility: 'hidden',
  outline : 'none',
  // padding:'60px',
  textAlign :'center',

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
    }else{
      show = true;
      for (let e of para) {
        e.style.visibility = 'visible';
      }
      // para.style.visibility = 'visible';
      btn.innerHTML= 'Hide';
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
if(event.keyCode ===  13){
  let name = event.target.value
  createli(ul,name)
  event.target.value = ''
}
})


function createli(ul,name) {
    let li = document.createElement('li')
    li.className = 'nameListItem'
    li.innerHTML = name
    // li.style.display = 'flex'
    li.style.listStyleType = 'none';
    li.style.border = '1px solid red'


    let span= document.createElement('span')
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
let UL = $('#fetchData')
let li = document.createElement('li')
li.className = 'fetchOutput'
UL.appendChild(li)




btn.addEventListener('click', ()=> {
    // fetch(url)
    //   .then(response => response.json())
    //   .then(data => {
    //     data.forEach((value => {
    //         li.innerHTML = `${li.innerHTML} <br> name: ${value.name}`
    //     }))
    //   } )
    //   .catch(err => console.log(err))

    axios.get(url)
    .then(res => {
      res.data.forEach(value => {
        li.innerHTML = `${li.innerHTML} <br> Name:  ${value.name}`
      })
    })
    .catch(err => console.log(err))

})
