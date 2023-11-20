import { Fragment } from "react";

const BookInfo = ({ getData }) => {
  console.log(getData);
  return (
    <Fragment>
      <h2>Book Details</h2>
      {getData ? (
        <div>
          <p className="fw-bold">Title:{getData.title}</p>
          <p className="fw-light">Description:{getData.description}</p>
          <p className="fst-italic">Price:{getData.price}</p>
          <p className="fst-italic">
            Name:{getData.userName ? getData.userName : "App Data"}
          </p>
        </div>
      ) : (
        <div className="alert alert-secondary" role="alert">
          There is no post selected yet. Please select!
        </div>
      )}
    </Fragment>
  );
};

export default BookInfo;
