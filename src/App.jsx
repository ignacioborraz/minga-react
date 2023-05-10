import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)
  const name = 'IGNACIO JAVIER BORRAZ'
  const data = {
    name,
    last_name: 'borraz',
    age: 32
  }
  return (
    <>
      <div className='w-full h-screen flex flex-col items-center justify-center'>
        <div className='flex bg-gray-500 w-11/12 h-48'>
          <a className='bg-purple-600 p-10 m-5' href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a className='bg-blue-600 p-10 m-5' href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          {name+' - '+data.age}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </div>
    </>
  )
}

export default App