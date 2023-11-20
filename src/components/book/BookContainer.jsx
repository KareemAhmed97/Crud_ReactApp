import { Fragment } from "react";
import BookInfo from "./BookInfo";
import BooksList from "./BooksList";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getBooks } from "../../Store/bookSlice";
import { deleteBook } from "../../Store/bookSlice";
import "./book.css";

const PostContainer = () => {
  const [getData, setGetData] = useState();
  const dispatch = useDispatch();
  const { books, isloading } = useSelector((state) => state.bookSlice);
  const { islogged } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  
  const getBookInfo = (id) => {
    const info = books.find((el) => el.id === id);
    setGetData((prev) => {
      return { ...prev, ...info };
    });
  };
  return (
    <Fragment>
      <hr className="my-5" />
      <div className="row">
        <div className="col">
          <BooksList
            isloading={isloading}
            islogged={islogged}
            dispatch={dispatch}
            getBooks={books}
            deleteBook={deleteBook}
            bookInfo={getBookInfo}
          />
        </div>
        <div className="col side-line">
          <BookInfo getData={getData} />
        </div>
      </div>
    </Fragment>
  );
};

export default PostContainer;
