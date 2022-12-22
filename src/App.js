import axios from 'axios'
import React, { useEffect } from 'react'

const App = () => {

  // console.log('text1')
  // console.log('text2')
 // promises---> async and await--->
//  1.pending state
//  2. fullfilled state---success
//  3.rejected----fail--reason

// async function  name(){
//   const myAPi= await axios.get('https://jsonplaceholder.typicode.com/users')
// }
//  console.log('some example')
//  useEffect(async()=>{
//     const myAPi= await axios.get('https://jsonplaceholder.typicode.com/users')
//       console.log(myAPi)
//  },[])

// console.log('different')
//   return (
//     <div>
//         <h1>some text</h1>
//         <button onClick={name}>clicked</button>
//     </div>
//   )
// console.log('hello')

setTimeout(()=>{
  console.log('koti');
},1000);
console.log('how are you')


async function Hello(){
  return await"Hello..."
}
console.log(Hello());
console.log(Hello(2));
console.log(Hello());

}
export default App
