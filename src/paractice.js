const DB_NAME = 'myData'
let db1 = {
  users : {},
  deposites : {},
  expenses :  {}
}

let  exists = localStorage.getItem(DB_NAME)
if (!exists) {
    localStorage.setItem(DB_NAME, JSON.stringify(db1))
}

class Data {
  constructor(dbName) {
      this.dbName = dbName
      this.db1 = JSON.parse(localStorage.getItem(dbName))
  }
  updateDb(db1){
      localStorage.setItem(this.dbName, JSON.stringify(db1))
    // console.log(db1);
  }

  error(error){
    return { error, data: null, status: 400 }
  }

  error404(error){
    return { error, data: null, status: 404 }
  }

  success(data){
    return { data , error: null, status: 200 }
  }

  createSuccess(data){
    return { data, error: null, status: 201 }
  }

  deleteSuccess(data){
    return { data, error: null, status: 204 }
  }

  getAllUser(){
    return this.db1.users;
  }

  getUserById(id) {
      const user =  this.db1.users[id]
      if(!user){
        return this.error404("User not found!")
      }
      return this.success(user)
    }

  getUserByName(name){
    const user =   Object.values(this.db1.users).find( data => data.name === name)
    if(!user){
      return this.error('data not found')
    }
    return this.success(user)

  }

  getUpdateUser({id,name,phone}){
      let exists = this.getUserById(id)
      if (exists) {
        return this.error('this id is not correct')
      }
      let user = this.db1.users[id]
      user.name = name
      user.phone = phone
      this.updateDb(this.db1)
      return this.success(user)
  }

  createUsers({ name,phone }){
      let {data, error} = this.getUserByName(name)
      if (data) {
        return this.error('data Already exists')
      }
      let id = new Date().getTime()
      let user = {id,name,phone,deposites : 0}
      this.db1.users[id] = user
      // console.log(user);
      this.updateDb(this.db1)
      return this.createSuccess(user)
  }

  getDeleteUserByName(name){
      let { data, error } = this.getUserByName(name)
      if(error){
        return this.deleteSuccess('data not found')
      }
    let arr = []
    for (var key in this.db1.users) {
      const user = this.db1.users[key]
      if(user.name === name){
        arr.push(user)
        delete this.db1.users[key]

      }
    }
    this.updateDb(this.db1)
    return this.deleteSuccess(arr)
  }

  getDeleteUserById(id){
    let { error , data } = this.getUserById(id)
    // console.log(exists);
    if (error) {
      return this.error404('data not found')
    }
     delete this.db1.users[id]
     this.updateDb(this.db1)
     return this.deleteSuccess(user)
  }

}
let newdata = new Data(DB_NAME);







console.log(newdata.createUsers({name: 'jamshed', phone: '01847884042'}));


// console.log(newdata.getUpdateUser({id:1609167846377,name: 'sharia faisal', phone: '0184574885'}));
// console.log(newdata.getDeleteUserByName('faisal'));

console.log(newdata.getAllUser())

// console.log(newdata.getDeleteUserByName('mezbah'));


// console.log(newdata.getUserByName('oshan'));
