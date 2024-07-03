import './App.css'
import Navbar from './component/Navbar'
import { Routes, Route } from 'react-router-dom'
import First from './component/First'
import Reg from './component/Reg'
import TableC from './component/TableC'

import StateBasic from './component/StateBasic'
import Counter from './component/Counter'
function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path = '/' element={<StateBasic/>}/>
      <Route path = '/l' element={<First/>}/>
      <Route path = '/r' element={<Reg/>}/>
      <Route path = '/t' element={<TableC/>}/>
      <Route path = '/c' element={<Counter/>}/>
    </Routes>
    </>
  )
}

export default App