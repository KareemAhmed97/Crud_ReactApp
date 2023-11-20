const BooksList = ({
  getBooks,
  isloading,
  islogged,
  dispatch,
  deleteBook,
  bookInfo,
}) => {
  const bookList =
    getBooks.length > 0
      ? getBooks.map(
          (item) =>
            getBooks && (
              <li
                className="list-group-item d-flex  justify-content-between align-items-center"
                key={item.id}
              >
                <div>{item.title}</div>
                <div className="btn-group" role="group">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => bookInfo(item.id)}
                  >
                    Read
                  </button>
                  <button
                    type="button"
                    className="btn btn-danger"
                    disabled={islogged ? false : true}
                    onClick={() => dispatch(deleteBook(item.id))}
                  >
                    Delete
                  </button>
                </div>
              </li>
            )
        )
      : "There is no book avalible";

  return (
    <div>
      <h2>Books List</h2>
      {isloading ? "loading..." : <ul className="list-group">{bookList}</ul>}
    </div>
  );
};

export default BooksList;
