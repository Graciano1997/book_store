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
      <div>
        <h2>Loading...</h2>
      </div>
    );
  }

  if (hasError) {
    return (
      <div>
        <h2>Occured An Error!...</h2>
      </div>
    );
  }

  if (booksArray.length > 0) {
    return (
      <section className="listBooksContainer">
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
        <hr className={style.divisorForm} />
        <Form />
      </section>
    );
  }

  return (
    <div>
      <h2>Your BookStore is Empty!</h2>
      <hr className={style.divisorForm} />
      <Form />
    </div>
  );
}

export default List;
