import { NavLink } from "react-router-dom";
function Header() {
  return <header>
  <a href="#">logo</a>
  <nav>
      <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/contact'>contact</NavLink></li>
          
      </ul>
  </nav>
</header>;
}

export default Header;
