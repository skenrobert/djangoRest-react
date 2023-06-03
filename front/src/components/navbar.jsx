import { NavLink, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <div id="navone">
            <h1>Logo</h1>
        </div>
        <div id="navtwo">
            <Link to="/" id="title">Blog-React</Link>
        </div>
        <div id="navthree">
            <NavLink to="/signup" id="signup">Sign up</NavLink>
            <NavLink to="/login" id="login">Log in</NavLink>
        </div>
    </nav>
  )
}