import profileIcon from '../assets/profile.png';
import style from '../style/Avatar.module.css';

function Avatar() {
  return (
    <div className={style.avatar}>
      <img src={profileIcon} alt="user profile icon" />
    </div>
  );
}
export default Avatar;
