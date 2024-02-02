import { NavLink, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Navbar = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  if (!auth) {
    return;
  }

  const { user, logOut } = auth;

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to Log Out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut()
          .then(() => {
            Swal.fire({
              title: "Log Out Successful",
              icon: "success",
            });
            navigate("/");
          })
          .catch(() => {
            Swal.fire({
              title: "Something went wrong, try again later.",
              icon: "error",
            });
          });
      }
    });
  };

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/mission">Mission</NavLink>
      </li>
      <li>
        <NavLink to="/campaign">Campaign</NavLink>
      </li>
      <li>
        <NavLink to="/bloodRequest">Request Blood</NavLink>
      </li>
      <li>
        <NavLink to="/donate">Donate Us</NavLink>
      </li>
    </>
  );
  return (
    <div className=" navbar fixed z-50 bg-[#DC0000] text-white font-semibold">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2  shadow bg-[#DC0000] rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <p className=" text-xl font-bold text-white">BloodBond</p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <li>
            <button onClick={handleLogOut}>Log Out</button>
          </li>
        ) : (
          <NavLink to="/login" className="btn btn-outline text-white">
            Join
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
