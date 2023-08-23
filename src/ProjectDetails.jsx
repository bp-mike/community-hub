import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Loader, Button } from "@mantine/core";

export default function ProjectDetails() {
  const [projectDetails, setProjectDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const { projectId } = useParams();
  const navigate = useNavigate();

  const fetchOneProject = async () => {
    try {
      // let url = `http://localhost:1337/api/projects/${projectId}`;
      let url = `https://strapi-kbv9.onrender.com/api/projects/${projectId}`;

      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        setProjectDetails(data.data);
      } else {
        console.log("Failed to get project");
      }
    } catch (error) {
      console.log("Error occurred");
    } finally {
      setLoading(false); // Update loading status after request completion
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchOneProject();
  }, []);

  return (
    <>
      <div className="m-auto ms-4 p-4 bg-white rounded-lg text-left min-h-screen">
        <Button
          radius="xl"
          className="mb-2 bg-primary-blue-100 hover:bg-primary-blue-100"
          onClick={() => navigate("..")}
        >
          Back
        </Button>
        <div className="">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
              }}
            >
              <Loader color="orange" />
            </div> // Display loading indicator while loading
          ) : (
            <>
              <div className="">
                <h1 className="font-bold mb-7 text-2xl">
                  {projectDetails.attributes.projectTitle}
                </h1>

                <h1 className="font-bold mt-7 text-base"> About the Project</h1>

                <p className="px-4">
                  {projectDetails.attributes.projectDetails}
                </p>

                <h1 className="font-bold mt-7 text-base"> Responsibilities</h1>

                <p className="px-4">
                  {projectDetails.attributes.responsibilities}
                </p>

                <h1 className="font-bold mt-7 text-base"> Requirements</h1>

                <p className="px-4">{projectDetails.attributes.requirements}</p>

                <div className="mt-7">
                  <a
                    href={projectDetails.attributes.applicationLink}
                    target="_blank"
                    rel="noreferrer"
                    className=""
                  >
                    <Button
                      radius="xl"
                      className="mb-2 bg-primary-blue-100 hover:bg-primary-blue-100"
                    >
                      Apply Now
                    </Button>
                  </a>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
