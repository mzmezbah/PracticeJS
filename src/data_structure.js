

class Node {
  constructor(data,next=null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
    this.length = 0
  }

  push(){

  }

  pop(){

  }

  getFirst(){
    return this.head
  }

  unshift(data){
    const newHead = new Node(data,this.head)
    this.length++
    this.head = newHead
    return this.head
  }

  clear(){
    this.head = null
    this.length = 0
  }

  shift(){
    if(!this.head){
      return
    }
    const nextValues = this.head.next
    this.length--
    this.head = nextValues
    return this.head
  }

  getLast(){
    let currentNode = this.head
    while (currentNode && currentNode) {

    }
  }

  pop(){

  }

}


const a = new LinkedList()
a.unshift('hello')
a.unshift('world')
a.shift()
console.log(a.getFirst().data);
