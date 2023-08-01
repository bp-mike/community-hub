import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import ErrorPage from "./error-page.jsx";
import RootLayout from "./routes/RootLayout.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  // { path: "/", element: <App />, errorElement: <ErrorPage /> },
  { path: "/", element: <RootLayout />, children: [
    {path: "/app", element: <App />}
  ], 
  errorElement: <ErrorPage /> },
  // { path: '/:userName', element: <Profile/> }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
