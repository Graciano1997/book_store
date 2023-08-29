import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';
import style from '../style/List.module.css';

function List() {
  const { booksArray } = useSelector((store) => store.books);
  if (booksArray.length === 0) {
    return (
      <div>
        <h2>Your BookStore is Empty!</h2>
        <hr className={style.divisorForm} />
      </div>
    );
  }

  return (
    <section className="listBooksContainer">
      {
        booksArray.map((book, index) => <Book key={{ index }} book={book} />)
      }
      <hr className={style.divisorForm} />
      <Form />
    </section>
  );
}

export default List;
