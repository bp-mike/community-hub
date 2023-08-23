import { useState } from "react";
import { Textarea, Button } from "@mantine/core";
import { useParams } from "react-router-dom";

export default function CreatePost({ fetchPosts }) {
  const [value, setValue] = useState("");
  // const [topic, setTopic] = useState("")

  const { feedTopic } = useParams()
  
  // useEffect(() => {
  //   setTopic(feedTopic || 'all'); // This will be executed after the initial render
  // }, [feedTopic]); 

  const createPost = async () => {
    const postData = {
      data: {
        topic: feedTopic || "all",
        description: value,
        userId: "1", // todo: get userId from contex api
      },
    };

    try {
      // const response = await fetch("http://localhost:1337/api/posts", {
      const response = await fetch("https://strapi-kbv9.onrender.com/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(postData),
      });

      if (response.ok) {
        // Post was successfully created
        console.log("Post created successfully!");
        setValue("");
        fetchPosts(); // Call the fetchPosts function to refresh the list of 
      } else {
        // Handle error
        console.error("Failed to create post.");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg p-4 text-left">
        <Textarea
          label="Create a Post"
          placeholder="What are you thinking about"
          autosize
          minRows={1}
          maxRows={4}
          value={value}
          onChange={(event) => setValue(event.currentTarget.value)}
        />
        <Button
          radius="xl"
          className="mt-2 bg-primary-blue-100 hover:bg-primary-blue-100"
          onClick={createPost}
        >
          Post
        </Button>
      </div>
    </>
  );
}
