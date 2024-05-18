import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  return (
    <div>
      <h1>Something went wrong</h1>
      <p>{error.data || error.message}</p>
      <Link to={-1}>Go back</Link>
    </div>
  );
}
