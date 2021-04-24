import axios from 'axios'

// const fun = () =>{
//   axios.get('https://jsonplaceholder.typicode.com/users')
//     .then(({ data })=>{
//       console.log(data);
//     })
//     .catch((error) => console.log(error))
// }


const url = 'https://jsonplaceholder.typicode.com/user'

async function getData() {
  try {
    const { data } = await axios.get(url)
    console.log(JSON.stringify(data));
  } catch (e) {
    console.log(e.response.status);
  }
}


export default getData;
