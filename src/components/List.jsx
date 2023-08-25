import Book from './Book';
import Form from './Form';
import style from '../style/List.module.css';

function List() {
  const booksArray = [
    { type: 'Action', author: 'Suzanne Collins', title: 'The Hunger Games' },
    { type: 'Action', author: 'Suzanne Collins', title: 'The Hunger Games' },
    { type: 'Action', author: 'Suzanne Collins', title: 'The Hunger Games' },
  ];
  return (
    <section className="listBooksContainer">
      {

        booksArray.map((book) => <Book key={1} book={book} />)
      }
      <hr className={style.divisorForm} />
      <Form />
    </section>
  );
}

export default List;
