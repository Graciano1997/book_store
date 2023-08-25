import Book from './Book';
import Form from './Form';
import style from '../style/List.module.css';

function List() {
  const booksArray = [
    { type: 'Action', author: 'Suzanne Collins', title: 'The Hunger Games' },
    { type: 'Science Fiction', author: 'Frank Herbert', title: 'Dune' },
    { type: 'Ecomomy', author: 'Suzanne Collins', title: 'Capital in the Twenty/First Century' },
  ];
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
