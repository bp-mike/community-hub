// import { useState } from 'react'
import { useParams } from 'react-router-dom';
// import { Button } from '@mantine/core';
import Post from './components/Post';

function App() {

  const { feedTopic } = useParams()

  const selectedFeedTopic = feedTopic || "all"

  return (
    <>
      <div className="m-auto text-center mt-9 p-6">
        {/* TODO create card displaying the topic */}
        <h1 className="text-5xl font-bold mb-7">{selectedFeedTopic}</h1>

        <Post className="mt-4"/>
      </div>
    </>
  )
}

export default App
