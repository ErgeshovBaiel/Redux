import {useDispatch , useSelector} from "react-redux"
import { decrement, increment , randomNumber as random} from './redux/slices/counterSlice'
 
const App = () => {
  const n = useSelector( (state) => state.counter.counter) 
  const dispatch = useDispatch()

  const onClickIncrement = () => {
    dispatch(increment())
  }
  const onClickDecrement = () => {
    if (n > 0)
    dispatch(decrement())
  }

  const randomNumber = () => {
    const number = Number(prompt("Enter number"))
    dispatch(random(number))
  }
  
  return (
    <div className="flex gap-5 mt-5 text-white ml-5 ">
      <button onClick={onClickIncrement} className='py-1.25 px-2.5 rounded-[10px] bg-amber-700 cursor-pointer'>increment</button>
      <button className='py-2.5 px-2.5 rounded-[10px] bg-amber-700 cursor-pointer'>{n}</button>
      <button onClick={onClickDecrement} className='py-2.5 px-2.5 rounded-[10px] bg-amber-700 cursor-pointer'>decrement</button>
      <button onClick={randomNumber} className='py-2.5 px-2.5 rounded-[10px] bg-amber-700 cursor-pointer'>random number +</button>
    </div>
  )
}

export default App