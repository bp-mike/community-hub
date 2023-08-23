import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import ProjectsLayout from "./routes/ProjectsLayout.jsx";
import Projects from "./Projects.jsx";
import ProjectDetails from "./ProjectDetails.jsx";
import ManageProjects from "./manage-projects.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <ErrorPage /> },
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <App /> },
      { path: "/feed/:feedTopic", element: <App /> },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <ProjectsLayout />,
    children: [
      { path: "/projects", element: <Projects /> },
      { path: "/projects/project/:projectId", element: <ProjectDetails /> },
      { path: "/projects/manage-projects", element: <ManageProjects /> },
    ],
  },
  // { path: '/:userName', element: <Profile/> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
