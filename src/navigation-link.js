import { Link } from "react-router-dom";

export default function NavigationLink() {
  return (
    <>
      <p>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="add-remove">Add/Remove Guest</Link>
        </span>
        <span>
          <Link to="/">Room Occupancy Details</Link>
        </span>
        <span>
          <Link to="/">Reports</Link>
        </span>
      </p>
    </>
  );
}
