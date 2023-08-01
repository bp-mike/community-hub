import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="text-center">
      <h1 className="text-5xl font-bold mb-7">Oops!</h1>
      <p>Err page</p>
      <p className="text-gray-400 mt-7">
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}