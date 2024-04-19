import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { useLogout } from "./hooks/useLogout"
import { Button } from "./components/ui/button";
import { useAuthContext } from "./hooks/useAuthContext";

export default function Navbar() {
  const { logout} = useLogout();
  const { user } = useAuthContext();
  
  
  const handleClick = () => {
    logout();
  }
  
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Portfolio
      </Link>
      <ul>
          <CustomLink to="/">Projects</CustomLink>
          <CustomLink to="/about">About</CustomLink>
          {!user && <CustomLink to="/Login">Login</CustomLink>}
      </ul>
      {user && (
      <div>
        <Button onClick={handleClick}>Log Out</Button>
        <span className="user">{user?.email}</span>
      </div>
      )}
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}