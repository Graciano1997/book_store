import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul className="nav">
      <li>
        <Link to="/">Books</Link>
      </li>
      <li>
        <Link to="/categories" />
        Categories
      </li>
    </ul>
  </nav>
);

export default Nav;
