import Avatar from './Avatar';
import Logo from './Logo';
import Nav from './Nav';
import style from '../style/Header.module.css';

function Header() {
  return (
    <>
      <header className={style.headerContainer}>
        <div className={style.logoNavContainer}>
          <Logo />
          <Nav />
        </div>
        <Avatar />
      </header>
    </>
  );
}

export default Header;
