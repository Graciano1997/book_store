import { Link } from 'react-router-dom';
import style from '../style/Nav.module.css';

function Nav() {
  return (
    <nav>
      <ul className={style.navContainer}>
        <li><Link to="/"><span className={style.books}>BOOKS</span></Link></li>
        <li><Link to="/categories"><span className={style.categories}>CATEGORIES</span></Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
