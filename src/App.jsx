import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
// import { Button } from '@mantine/core';
import Post from './components/Post';
import PageTitle from './components/PageTitle';

function App() {
  const [topic, setTopic] = useState("")

  const { feedTopic } = useParams()

  // setTopic(feedTopic || "all")
  
  useEffect(() => {
    setTopic(feedTopic || 'all'); // This will be executed after the initial render
  }, [feedTopic]); 

  return (
    <>
      <div className="m-auto text-center mt-9 p-6">
        <div className="mb-4">
          <PageTitle selectedFeedTopic={topic} />
        </div>

        <div className="mt-4">
          <Post />
        </div>
        <div className="mt-4">
          <Post />
        </div>

      </div>
    </>
  )
}

export default App
