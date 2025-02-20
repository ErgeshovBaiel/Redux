import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
      counter: 100
    },
    reducers: {
      increment: (state) => {
        state.counter += 10
      },
      decrement: (state) => {  
        state.counter -= 10
      },
      randomNumber: (state, {payload}) => {
        console.log(state);
        console.log(payload);
        state.counter += payload;
        
      }
     }
  })
  



  export const {increment , decrement ,  randomNumber} = counterSlice .actions
  export default counterSlice .reducer
  