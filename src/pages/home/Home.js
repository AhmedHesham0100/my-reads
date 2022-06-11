import React, { useEffect, useCallback, useState } from "react";

import { Link } from "react-router-dom";

import { axiosInstance } from "../../axios/config";

import BookShelf from "../../component/BookShelf";

const Home = () => {
  const [booksList, setBooksList] = useState([]);

  const getBooks = useCallback(async () => {
    await axiosInstance({
      method: "get",
      url: `/books`,
    })
      .then((res) => res.data)
      .then((data) => setBooksList(data.books))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    getBooks();
  }, [getBooks, booksList]);

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksList &&
                  booksList
                    .filter((book) => book.shelf === "currentlyReading")
                    .map((book) => <BookShelf book={book} key={book.id} />)}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksList &&
                  booksList
                    .filter((book) => book.shelf === "wantToRead")
                    .map((book) => <BookShelf book={book} key={book.id} />)}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {booksList &&
                  booksList
                    .filter((book) => book.shelf === "read")
                    .map((book) => <BookShelf book={book} key={book.id} />)}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/myReads-app/search">Add a book</Link>
      </div>
    </div>
  );
};

export default Home;
