import { useState } from 'react'
import './App.css'
import { Reproductor } from './pages/Reproductor'


function App() {
  const [count, setCount] = useState(0)

  return (
    
    <div>
        <Reproductor />
    </div>

  )
}

export default App
