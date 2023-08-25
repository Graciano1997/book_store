import Book from './Book';
import Form from './Form';
import style from '../style/List.module.css';

function List() {
  const booksArray = [
    { nature: 'Action', author: 'Suzanne Collins', title: 'The Hunger Games' },
    { nature: 'Science Fiction', author: 'Frank Herbert', title: 'Dune' },
    { nature: 'Ecomomy', author: 'Suzanne Collins', title: 'Capital in the Twenty/First Century' },
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
