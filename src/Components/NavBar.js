import { NavLink } from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return (
        <nav className="NavBarContainer">
            <NavLink to="/"></NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/skills">Skills</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}

export default NavBar;