import { 
    useState, 
    useEffect 
} from "react";
import { Loader } from '@mantine/core';
import Project from "./components/Project";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    try {
      // let url = "http://localhost:1337/api/projects?filters[isPublished][$eq]=true";
      let url = "https://strapi-kbv9.onrender.com/api/projects?filters[isPublished][$eq]=true";

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProjects(data.data);
      } else {
        console.log("Failed to get projects");
      }
    } catch (error) {
      console.log("Error occurred");
    } finally {
      setLoading(false); // Update loading status after request completion
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchProjects();
  }, []);

  return (
    <>
      <div className="m-auto text-center px-4">
        <div className="mb-4 w-full">
        <div className="bg-white rounded-lg text-left pt-4 pl-4 pb-1">
            <h1 className="font-bold mb-7 text-2xl">Recommended for you</h1>
        </div>
        </div>
        <div className="mb-4 w-full">
          {/* <CreatePost className="" fetchPosts={fetchPosts} /> */}
        </div>
        <div className="mt-4">
          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
              <Loader color="orange" />
            </div> // Display loading indicator while loading
          ) : (
            projects.map((project) => (
              <div className="mt-4" key={project.id}>
                <Project projectAttributes={project.attributes} projectId={project.id} />
              </div>
              // <div key={project.id}>{project.attributes.projectTitle}</div>
            ))
          )}
        </div>
      </div>
    </>
  );
}
