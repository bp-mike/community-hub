import { useState } from 'react'
import { Button } from '@mantine/core';
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="m-auto text-center mt-9">
        <h1 className="text-5xl font-bold mb-7">Community Hub</h1>
        <div className="mt-4">
          <Button
            onClick={() => setCount((count) => count + 1)}
            className='text-primary-blue-100 bg-primary-orange-100 hover:bg-primary-orange-200'
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
