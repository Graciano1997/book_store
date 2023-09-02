import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook, getBooks } from '../redux/books/booksSlice';
import style from '../style/Form.module.css';

function Form() {
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  return (
    <section className={style.formContainer}>
      <h1>ADD NEW BOOK</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          try {
            await dispatch(addBook(book));
            dispatch(getBooks());
          } catch (error) {
            return error;
          }
          return null;
        }}
        className={style.form}
      >
        <div className={style.title}>
          <input
            type="text"
            name="title"
            id=""
            placeholder="Book title"
            onChange={(el) => {
              setBook({ ...book, title: el.target.value });
            }}
          />
        </div>
        <div className={style.author}>
          <input
            type="text"
            name="author"
            id=""
            placeholder="Book author"
            onChange={(el) => {
              setBook({ ...book, author: el.target.value });
            }}
          />
        </div>
        <div className={style.submit}>
          <button
            type="submit"
            onClick={() => {
              setBook({
                ...book,
                item_id: uuidv4(),
                category: 'None',
              });
            }}
          >
            <span className={style.addBook}>ADD BOOK</span>
          </button>
        </div>
      </form>
    </section>
  );
}

export default Form;
