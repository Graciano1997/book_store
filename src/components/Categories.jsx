import { useSelector } from 'react-redux';

function Categories() {
  const { categoriesArray } = useSelector((store) => store.categories);
  if (categoriesArray.length === 0) {
    return (
      <>
        <div>
          <h2>Your Categories is Empty</h2>
          <h4>COMMING SOON...!</h4>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <h2>In Development...!</h2>
      </div>
    </>
  );
}
export default Categories;
