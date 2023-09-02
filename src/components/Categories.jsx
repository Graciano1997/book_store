import style from '../style/List.module.css';
import styleCategories from '../style/Categories.module.css';

function Categories() {
  // const { categoriesArray } = useSelector((store) => store.categories);
  // if (categoriesArray.length === 0) {
  return (
    <div>
      <div className={style.information}>
        <h2>In Development...</h2>
      </div>
      <div className={style.divisorForm} />
      <div className={styleCategories.status}>
        <button type="button" aria-label="updateProgress" className={styleCategories.checkStatus}><span>Check Status</span></button>
      </div>
    </div>
  );
  // }

  // return (
  //   <>
  //     <div>
  //       <h2>In Development...!</h2>
  //     </div>
  //   </>
  // );
}
export default Categories;
