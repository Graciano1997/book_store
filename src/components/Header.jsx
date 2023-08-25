import Avatar from './Avatar';
import Logo from './Logo';
import Nav from './Nav';

const Header = () => {

  return(
    <header className="headerContainer">
    <div>
      <Logo />
      <Nav />
    </div>
    <Avatar />
  </header>
);
}

export default Header;
