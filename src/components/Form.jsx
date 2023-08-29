import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { addBook } from '../redux/books/booksSlice';
import style from '../style/Form.module.css';

function Form() {
  const [book, setBook] = useState({ title: '', author: '' });
  const dispatch = useDispatch();
  return (
    <section className={style.FormContainer}>
      <h1>ADD NEW BOOK</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setBook({
            ...book,
            item_id: uuidv4(),
          });
          dispatch(addBook(book));
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
        <div className={style.submit}><button type="submit">ADD BOOK </button></div>
      </form>
    </section>
  );
}

export default Form;
