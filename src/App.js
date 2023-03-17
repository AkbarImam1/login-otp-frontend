
import { Routes, Route } from 'react-router-dom'

import react from 'react'
import Login from './Login'
import Success from './Success'
import Otp from './Otp'



function App() {
    return (
      <div >
       
        <Routes> 
            <Route exact path = '/' element = {<Login/>}/>
           <Route exact path='/otp' element={<Otp />} />
           <Route exact path='/Success' element={<Success />} />

          </Routes>
</div>)
}
export default App;
