import { Link, NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { LuLogOut } from "react-icons/lu";

const Navbar = () => {
  const auth = useAuth();
  // const navigate = useNavigate();

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
            // navigate("/");
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
        <NavLink to="/donorSearch">Search Donor</NavLink>
      </li>
      <li>
        <NavLink to="/chat">Chat</NavLink>
      </li>
      <li>
        <NavLink to="/campaign">Campaign</NavLink>
      </li>
      <li>
        <NavLink to="/bloodRequest">Request Blood</NavLink>
      </li>
      <li>
        <NavLink to="/allRequest">Blood Request List</NavLink>
      </li>
      <li>
        <NavLink to="/donate">Donate Us</NavLink>
      </li>
      <li>
        <NavLink to="/bioMedical">Bio-Medical</NavLink>
      </li>
    </>
  );

  return (
    <div className=" navbar  z-50 bg-[#DC0000] text-white font-semibold">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#DC0000] rounded-box w-52"
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
        {/* {user ? (
          <>
            <details className="dropdown">
              <summary className="m-1 btn">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src={user?.photoURL || ''} />
                  </div>
                </div>
              </summary>
              <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li>
                  <NavLink to="/dashboard">DashBoard</NavLink>
                </li>
                <li>
                  <button onClick={handleLogOut}>LogOut</button>
                </li>
              </ul>
            </details>
          </>
        ) : (
          <NavLink to="/login">
            <button className="btn btn-outline">Login / Register</button>
          </NavLink>
        )} */}


        {
          user ? <div className='flex items-center text-white'>
            <div className="dropdown dropdown-hover dropdown-end dropdown-bg-[#DC0000]">
            <label tabIndex={0} className="md:mx-2 btn btn-sm md:btn-md btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img title={user.displayName || ''} src={user.photoURL || ''} alt='userImg' />

                </div>
              </label>
              <ul tabIndex={0} className="dropdown-content z-[10] menu px-5 mt-3 shadow bg-[#DC0000] rounded-box py-5 w-56">
                <div className='flex flex-col justify-center items-center mb-4'>
                  <label tabIndex={0} className="btn btn-circle avatar">
                    <div className="w-16 rounded-full">
                      <img src={user.photoURL || ''} alt='userImg' />

                    </div>
                  </label>
                  <h2 className='text-lg font-bold'>{user.displayName}</h2>
                  <h2>{user.email}</h2>
                  <Link to='/dashboard/userHome'>
                    <button className="btn lg:btn-sm btn-xs btn-outline text-white mt-2">View Profile</button>
                  </Link>
                </div>
                <li><NavLink className="font-bold" to='/dashboard/home'>Dashboard</NavLink></li>

                {/* {
                                        user && !isAdmin && <li><NavLink className="font-bold" to='/dashboard/userProfile'>Dashboard</NavLink></li>
                                    } */}

                <li><button className='font-bold text-md' onClick={handleLogOut}>Logout <LuLogOut className='text-xl'></LuLogOut></button></li>
              </ul>
            </div>

          </div> :
            <Link to='/login'>
              <button className="btn btn-outline text-white">Login</button>
            </Link>
        }
      </div>
    </div>
  );
};

export default Navbar;
