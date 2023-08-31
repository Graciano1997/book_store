import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooks, removeBook } from '../redux/books/booksSlice';
import style from '../style/Book.module.css';

function Book({
  item_id, title, author, category,
}) {
  const dispatch = useDispatch();

  const removeBookHandler = async () => {
    try {
      await dispatch(removeBook(item_id));
      dispatch(getBooks());
    } catch (error) {
      return error;
    }
    return null;
  };

  return (
    <div className={style.bookContainer}>
      <div className={style.bookDetails}>
        <div className={style.book}>
          <h4>{category}</h4>
          <h3>{title}</h3>
          <p>{author}</p>
        </div>
        <ul className={style.booOptions}>
          <li><button type="button">Comments</button></li>
          <li><button type="button" onClick={removeBookHandler}>Remove</button></li>
          <li><button type="button">Edit</button></li>
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
  item_id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
