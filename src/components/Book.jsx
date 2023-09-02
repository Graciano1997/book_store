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
          <span className={style.category}>{category}</span>
          <span className={style.title}>{title}</span>
          <span className={style.author}>{author}</span>
        </div>

        <div className={style.bookOptions}>
          <button type="button"><span className={style.buttonDescription}>Comments</span></button>
          <div className={style.divisorForm} />
          <button type="button" onClick={removeBookHandler}><span className={style.buttonDescription}>Remove</span></button>
          <div className={style.divisorForm} />
          <button type="button"><span className={style.buttonDescription}>Edit</span></button>
        </div>
      </div>
      <div className={style.statusContainer}>
        <div className={style.progressContainer}>
          <div className={style.progress} />
          <div className={style.percentage}>
            <span className={style.percentageNumber}>64%</span>
            <span className={style.completedPercentageNumber}>Completed</span>
          </div>
        </div>

        <div className={style.progressDivider} />

        <div className={style.chapter}>
          <span className={style.currentChapter}>CURRENT CHAPTER</span>
          <span className={style.currentLesson}>Chapter 17</span>
          <button type="button" aria-label="updateProgress" className={style.updateProgress}><span>UPDATE PROGRESS</span></button>
        </div>
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
