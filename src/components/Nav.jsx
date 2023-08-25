import { Link } from 'react-router-dom';
import style from '../style/Nav.module.css';

function Nav() {
  return (
    <nav>
      <ul className={style.navContainer}>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
