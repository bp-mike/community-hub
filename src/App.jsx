import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Loader } from '@mantine/core';
// import { Button } from '@mantine/core';
import Post from "./components/Post";
import PageTitle from "./components/PageTitle";
import CreatePost from "./components/CreatePost";

function App() {
  const [topic, setTopic] = useState("");
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const { feedTopic } = useParams();

  const fetchPosts = async () => {
    try {
      // const response = await fetch("http://localhost:1337/api/posts");
      // if (response.ok) {
      //   const data = await response.json();
      //   if (feedTopic) {
      //     const filteredPosts = data.data.filter((post) => {
      //       return post.attributes.topic === topic;
      //     });
      //     setPosts(filteredPosts);
      //   } else {
      //     setPosts(data.data);
      //   }
      // } else {
      //   console.log("failed to get posts");
      // }
      // let url = "http://localhost:1337/api/posts";
      let url = "https://strapi-kbv9.onrender.com/api/posts";
      if (feedTopic) {
        url += `?filters[topic][$eq]=${feedTopic}`;
      }

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setPosts(data.data);
      } else {
        console.log("Failed to get posts");
      }
    } catch (error) {
      console.log("Error occurred");
    } finally {
      setLoading(false); // Update loading status after request completion
    }
  };

  useEffect(() => {
    setTopic(feedTopic || "all");
    setLoading(true);

    fetchPosts();
  }, [feedTopic]);

  return (
    <>
      <div className="m-auto text-center px-4">
        <div className="mb-4 w-full">
          <PageTitle selectedFeedTopic={topic} className="w-full" />
        </div>
        <div className="mb-4 w-full">
          <CreatePost className="" fetchPosts={fetchPosts} />
        </div>
        <div className="mt-4">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
              <Loader color="orange" />
            </div> // Display loading indicator while loading
          ) : (
            posts.map((post) => (
              <div className="mt-4" key={post.id}>
                <Post 
                description={post.attributes.description} 
                createdAt={post.attributes.createdAt} 
                />
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
}

export default App;
