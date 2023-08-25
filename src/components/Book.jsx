import PropTypes from 'prop-types';
import style from '../style/Book.module.css';

function Book({ book }) {
  return (
    <div className={style.bookContainer}>
      <div className={style.bookDetails}>
        <div className={style.book}>
          <h4>{book.nature}</h4>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
        </div>
        <ul className={style.booOptions}>
          <li>Comments</li>
          <li>Remove</li>
          <li>Edit</li>
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
        <button type="button" aria-label="updateProgress">UPDATEPROGRESS</button>
      </div>
    </div>
  );
}

Book.propTypes = {
  book: PropTypes.shape({
    nature: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
