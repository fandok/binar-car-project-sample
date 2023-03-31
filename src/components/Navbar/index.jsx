import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <ul>
      <li>
        <Link to="/" state={{ id: "test" }}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/detail">Detail</Link>
      </li>
      <li>
        <Link to="/search">Search</Link>
      </li>
    </ul>
  );
};

export default Navbar;
