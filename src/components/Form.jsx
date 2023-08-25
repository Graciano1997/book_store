const Form = () => (

  <section className="addBookSection">
    <h1>ADD NEW BOOK</h1>
    <form action="">
      <div><input type="text" name="bookTitle" id="" placeholder="Book title" /></div>
      <div>
        <select name="" id="" placeholder="category">
          <option value="" selected>Romantic</option>
          <option value="">Action</option>
          <option value="">Economy</option>
        </select>
        {' '}

      </div>
      <div><button type="submit">ADD BOOK </button></div>
    </form>
  </section>
);

export default Form;
