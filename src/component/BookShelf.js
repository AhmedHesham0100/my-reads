import React, { useCallback } from "react";

import { axiosInstance } from "../axios/config";

const BookShelf = ({ book }) => {
  //book update
  const bookUpdate = useCallback(
    async (shelf) => {
      await axiosInstance({
        method: "put",
        url: `/books/${book.id}`,
        data: { shelf },
      })
        .then((res) => res.data)
        .catch((err) => console.error(err));
    },
    [book.id]
  );

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 188,
              backgroundImage: `url(${book?.imageLinks?.thumbnail})`,
            }}
          ></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => bookUpdate(e.target.value)}>
              <option value="none" disabled>
                Move to...
              </option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book?.title}</div>
        <div className="book-authors">
          {book?.authors ? book?.authors[0] : ""}
        </div>
      </div>
    </li>
  );
};

export default BookShelf;
