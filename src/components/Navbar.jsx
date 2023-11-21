import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function logoutHandler() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <div className="topnav">
      <div className="logo_navbar">
        <img
          src="https://www.clker.com/cliparts/w/s/M/d/S/T/light-pink-circle-md.png"
          alt="Logo"
          width="40"
          height="40"
        />

        <NavLink to="/" className="nav_link">
          <p>Home</p>
        </NavLink>
        <NavLink to="/add-product" className="nav_link">
          <p>Add Product</p>
        </NavLink>
      </div>

      <div className="sign_out_link" onClick={logoutHandler}>
        <p>Sign Out</p>
      </div>
    </div>
  );
};

export default Navbar;
