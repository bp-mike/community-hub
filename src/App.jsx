import { useState } from 'react'
import { Button } from '@mantine/core';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-auto text-center mt-9">
        <h1>Community Hub</h1>
        <div className="mt-4">
          <Button
            onClick={() => setCount((count) => count + 1)}
            className='text-white bg-black'
          >
            count is {count}
          </Button>
          <h1 className='mt-3'>{count}</h1>
        </div>
      </div>
    </>
  )
}

export default App
