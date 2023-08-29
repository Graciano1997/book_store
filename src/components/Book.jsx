import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import style from '../style/Book.module.css';

function Book({ book }) {
  const dispatch = useDispatch();
  return (
    <div className={style.bookContainer}>
      <div className={style.bookDetails}>
        <div className={style.book}>
          <h4>{book.category}</h4>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
        <ul className={style.booOptions}>
          <li><a href="#coment">Comments</a></li>
          <li><a href="#remove" onClick={() => { dispatch(removeBook(book)); }}>Remove</a></li>
          <li><a href="#edit">Edit</a></li>
        </ul>
      </div>
      <div className={style.statusContainer}>
        <div className={style.progress}>
          *
        </div>
        <div className={style.percentage}>
          <h3>64%</h3>
          <p>Completed</p>
        </div>
      </div>

      <div className={style.currentChapter}>
        <h3>Current Chapter</h3>
        <h2>Chapter 17</h2>
        <button type="button" aria-label="updateProgress"> UPDATEPROGRESS </button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
