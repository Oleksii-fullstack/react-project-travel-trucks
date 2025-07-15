import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>404</h1>
      <p>Page is not found</p>
      <Link to="/">Go to the Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
