import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-between py-3 items-center">
        <div>
            <h1>Wellcome</h1>
        </div>
        <div>
            <Link to="/" id="title">React Tasks with Django Rest + Sqlite</Link>
        </div>
        <div>
          <button className="bg-green-500 p-1 rounded-lg">
              <NavLink to="/signup" id="signup">Sign up</NavLink>
          </button>

          <button className="bg-indigo-700 p-1 rounded-lg">
            <NavLink to="/login" id="login">Log in</NavLink>
          </button>

        </div>
    </nav>
  )
}