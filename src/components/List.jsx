import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getBooks } from '../redux/books/booksSlice';
import style from '../style/List.module.css';
import Book from './Book';
import Form from './Form';

function List() {
  const {
    booksArray, isLoading, hasError,
  } = useSelector((store) => store.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={style.information}>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (!isLoading && hasError) {
    return (
      <div className={style.information}>
        <h2>Network Error!...</h2>
      </div>
    );
  }

  if (!isLoading && booksArray.length > 0) {
    return (
      <section className={style.listBooksContainer}>
        {
          booksArray.map((book) => (
            <Book
              key={book.item_id}
              item_id={book.item_id}
              author={book.author}
              title={book.title}
              category={book.category}
            />
          ))
        }
        <div className={style.divisorForm} />
        <Form />
      </section>
    );
  }

  return (
    <div>
      <div className={style.information}>
        <h2>Your BookStore is Empty!</h2>
      </div>
      <div className={style.divisorForm} />
      <Form />
    </div>
  );
}

export default List;
