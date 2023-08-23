import { useRouteError, useNavigate } from "react-router-dom";
import { Button } from "@mantine/core";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-7">Oops!</h1>
      <Button
        radius="xl"
        className="mb-2 bg-primary-blue-100 hover:bg-primary-blue-100"
        onClick={() => navigate("/")}
      >
        Go To Home
      </Button>
      <p className="text-gray-400 mt-7">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
