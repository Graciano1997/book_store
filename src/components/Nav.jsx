import { Link } from 'react-router-dom';

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link to="/books" />
        Book
      </li>
      <li>
        <Link to="/categories" />
        Categories
      </li>
    </ul>
  </nav>
);

export default Nav;
