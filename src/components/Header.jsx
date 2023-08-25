import Avatar from './Avatar';
import Logo from './Logo';
import Nav from './Nav';

function Header() {
  return (
    <>
      <header className="headerContainer">
        <div>
          <Logo />
          <Nav />
        </div>
        <Avatar />
      </header>
    </>
  );
}

export default Header;
