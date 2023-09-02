import style from '../style/List.module.css';

function Error() {
  return (
    <div>
      <div className={style.information}>
        <h2>UUUPPS! Page Not Found!</h2>
      </div>
    </div>
  );
}
export default Error;
