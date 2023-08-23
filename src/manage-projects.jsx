import { useState, useEffect } from "react";
import { Loader, Switch, Button, Table, Modal, Textarea } from "@mantine/core";
import { FaEdit, FaRegTrashAlt } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";

export default function ManageProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [opened, { open, close }] = useDisclosure(false);
  const [editOpened, { open: openEdit, close: closeEdit }] = useDisclosure(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDetails, setProjectDetails] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [applicationLink, setApplicationLink] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const [projectId, setProjectId] = useState("");

  const fetchProjects = async () => {
    try {
    //   let url = "http://localhost:1337/api/projects";
      let url = "https://strapi-kbv9.onrender.com/api/projects";

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

  const togglePublish = async (projectId) => {
    try {
      // setLoading(true);
      const projectToUpdate = projects.find(
        (project) => project.id === projectId
      );
      if (!projectToUpdate) {
        return;
      }

      const updatedProject = {
        data: {
          projectTitle: projectToUpdate.attributes.projectTitle,
          projectDetails: projectToUpdate.attributes.projectDetails,
          requirements: projectToUpdate.attributes.requirements,
          responsibilities: projectToUpdate.attributes.responsibilities,
          applicationLink: projectToUpdate.attributes.applicationLink,
          isPublished:
            projectToUpdate.attributes.isPublished === true
              ? false
              : projectToUpdate.attributes.isPublished === false
              ? true
              : true, // Default to true if it's null
        },
      };

    //   const url = `http://localhost:1337/api/projects/${projectId}`;
      const url = `https://strapi-kbv9.onrender.com/api/projects/${projectId}`;

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProject),
      });

      if (response.ok) {
        // refresh
        fetchProjects();
      } else {
        console.log("Failed to update project");
      }
    } catch (error) {
      console.log("Error occurred");
    }
    // finally {
    //     setLoading(false); // Update loading status after request completion
    //   }
  };

  const openEditModal = async (projectId) => {
    const projectToUpdate = projects.find(
      (project) => project.id === projectId
    );
    setProjectId(projectId);
    setProjectTitle(projectToUpdate.attributes.projectTitle);
    setProjectDetails(projectToUpdate.attributes.projectDetails);
    setResponsibilities(projectToUpdate.attributes.responsibilities);
    setRequirements(projectToUpdate.attributes.requirements);
    setApplicationLink(projectToUpdate.attributes.applicationLink);
    setIsPublished(projectToUpdate.attributes.isPublished);
    openEdit()
  };

  const editProject = async () => {
    try {
      const updatedProjectData = {
        data: {
          projectTitle,
          projectDetails,
          requirements,
          responsibilities,
          applicationLink,
          isPublished,
        },
      };

    //   const url = `http://localhost:1337/api/projects/${projectId}`;
      const url = `https://strapi-kbv9.onrender.com/api/projects/${projectId}`;

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProjectData),
      });

      if (response.ok) {
        // Post was successfully created
        console.log("Project Edited successfully!");
        closeEdit();
        setProjectTitle("");
        setProjectDetails("");
        setResponsibilities("");
        setRequirements("");
        setApplicationLink("");
        // refresh
        fetchProjects();
      } else {
        console.log("Failed to update project");
      }
    } catch (error) {
      console.log("Error occurred");
    }
  };

  const createProject = async () => {
    const projectData = {
      data: {
        projectTitle,
        projectDetails,
        requirements,
        responsibilities,
        applicationLink,
        isPublished: false,
      },
    };
    try {
    //   const url = `http://localhost:1337/api/projects`;
      const url = `https://strapi-kbv9.onrender.com/api/projects`;

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        // Post was successfully created
        console.log("Project created successfully!");
        close();
        setProjectTitle("");
        setProjectDetails("");
        setResponsibilities("");
        setRequirements("");
        setApplicationLink("");
        // refresh
        fetchProjects();
      } else {
        console.log("Failed to update project");
      }
    } catch (error) {
      console.log("Error occurred");
    }
    // finally {
    //     setLoading(false); // Update loading status after request completion
    //   }
  };

  const deleteProject = async (projectId) => {
    try {
    //   const url = `http://localhost:1337/api/projects/${projectId}`;
      const url = `https://strapi-kbv9.onrender.com/api/projects/${projectId}`;

      const response = await fetch(url, {
        method: "DELETE",
      });

      if (response.ok) {
        // refresh
        fetchProjects();
      } else {
        console.log("Failed to delete project");
      }
    } catch (error) {
      console.log("Error occurred");
    }
  };

  useEffect(() => {
    setLoading(true);

    fetchProjects();
  }, []);

  return (
    <>
      {/* add model */}
      <Modal opened={opened} onClose={close} title="Create Project" size="lg">
        <Textarea
          label="Project Title"
          placeholder="project Title"
          value={projectTitle}
          maxRows={1}
          minRows={1}
          onChange={(event) => setProjectTitle(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="About Project"
          placeholder="About project"
          autosize
          minRows={1}
          maxRows={4}
          value={projectDetails}
          onChange={(event) => setProjectDetails(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="Volunteer Responsibilities"
          placeholder="Volunteer Responsibilities"
          autosize
          minRows={1}
          maxRows={4}
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="Volunteer Requirements"
          placeholder="Volunteer Requirements"
          autosize
          minRows={1}
          maxRows={4}
          value={requirements}
          onChange={(event) => setRequirements(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="Application Link"
          placeholder="project Title"
          value={applicationLink}
          maxRows={2}
          minRows={1}
          onChange={(event) => setApplicationLink(event.currentTarget.value)}
        />
        <Button
          radius="xl"
          className="mt-4 bg-primary-orange-200 hover:bg-primary-orange-100"
          onClick={() => createProject()}
        >
          Create Project
        </Button>
      </Modal>

      {/* Edit model */}
      <Modal
        opened={editOpened}
        onClose={closeEdit}
        title="Edit Project"
        size="lg"
      >
        <Textarea
          label="Project Title"
          placeholder="project Title"
          value={projectTitle}
          maxRows={1}
          minRows={1}
          onChange={(event) => setProjectTitle(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="About Project"
          placeholder="About project"
          autosize
          minRows={1}
          maxRows={4}
          value={projectDetails}
          onChange={(event) => setProjectDetails(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="Volunteer Responsibilities"
          placeholder="Volunteer Responsibilities"
          autosize
          minRows={1}
          maxRows={4}
          value={responsibilities}
          onChange={(event) => setResponsibilities(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="Volunteer Requirements"
          placeholder="Volunteer Requirements"
          autosize
          minRows={1}
          maxRows={4}
          value={requirements}
          onChange={(event) => setRequirements(event.currentTarget.value)}
        />
        <Textarea
          className="mt-4"
          label="Application Link"
          placeholder="project Title"
          value={applicationLink}
          maxRows={2}
          minRows={1}
          onChange={(event) => setApplicationLink(event.currentTarget.value)}
        />
        <Button
          radius="xl"
          className="mt-4 bg-primary-orange-200 hover:bg-primary-orange-100"
          onClick={() => editProject()}
        >
          Save Changes
        </Button>
      </Modal>

      <div className="m-auto ms-4 p-4 bg-white rounded-lg text-left min-h-screen">
        <div className="mb-4 w-full">
          <div className="bg-white rounded-lg text-left pt-4 pl-4 pb-1">
            <h1 className="font-bold mb-7 text-2xl">Manage Projects</h1>
            <Button
              radius="xl"
              className="mb-2 bg-primary-blue-100 hover:bg-primary-blue-100"
              onClick={open}
            >
              Create New Project
            </Button>
          </div>
        </div>
        <div className="mt-4">
          {loading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "10vh",
              }}
            >
              <Loader color="orange" />
            </div> // Display loading indicator while loading
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Project</th>
                  <th>Publish</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{project.attributes.projectTitle}</td>
                    <td>
                      <Switch
                        color="orange"
                        checked={project.attributes.isPublished}
                        onChange={() => togglePublish(project.id)}
                      />
                    </td>
                    <td>
                      <Button
                        radius="xl"
                        className="ml-2 bg-primary-blue-100 hover:bg-primary-blue-100"
                        onClick={() => openEditModal(project.id)}
                      >
                        <FaEdit />
                      </Button>

                      <Button
                        radius="xl"
                        className="ml-2 bg-primary-orange-200 hover:bg-primary-orange-200"
                        onClick={() => deleteProject(project.id)}
                      >
                        <FaRegTrashAlt />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </div>
      </div>
    </>
  );
}
