
import style from '../style/Form.module.css';

function Form() {
  return (
    <section className={style.FormContainer}>
      <h1>ADD NEW BOOK</h1>
      <form action="" className={style.form}>
        <div className={style.title}><input type="text" name="title" id="" placeholder="Book title" /></div>
        <div className={style.author}><input type="text" name="author" id="" placeholder="Book author" /></div>
        <div className={style.submit}><button type="submit">ADD BOOK </button></div>
      </form>
    </section>
  );
}

export default Form;
