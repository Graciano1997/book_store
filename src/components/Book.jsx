const Book = () =>{

  return (
    <div className="bookContainer">
    <div className="bookDetails">
      <div>
        <h3>Type</h3>
        <h2>Tittle</h2>
        <p>Author</p>
      </div>
      <ul>
        <li>Comments</li>
        <li><div className="separator" /></li>
        <li>Remove</li>
        <li><div className="separator" /></li>
        <li>Edit</li>
      </ul>
    </div>
    <div className="status">
      <div className="currentState">
        <div>
          <h4>Image</h4>
        </div>
        <div className="percentage">
          <h3>64%</h3>
          <p>Completed</p>
        </div>
      </div>
      <div className="separator" />
      <div className="currentChapter">
        <h3>Current Chapter</h3>
        <h2>Chapter 17</h2>
        <button type="button" aria-label="updateProgress">UPDATEPROGRESS</button>
      </div>
    </div>
  </div>
);
} 

export default Book;
