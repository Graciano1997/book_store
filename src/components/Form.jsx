function Form() {
  return (
    <section className="addBookSection">
      <h1>ADD NEW BOOK</h1>
      <form action="">
        <div><input type="text" name="title" id="" placeholder="Book title" /></div>
        <div><input type="text" name="author" id="" placeholder="Book author" /></div>
        <div><button type="submit">ADD BOOK </button></div>
      </form>
    </section>
  );
}

export default Form;
