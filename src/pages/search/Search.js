import React, { useState } from "react";

import { Link } from "react-router-dom";

import { axiosInstance } from "../../axios/config";

import BookShelf from "../../component/BookShelf";

const Search = ({ bookUpdate, booksList }) => {
  const [booksSearchList, setBooksSearchList] = useState([]);

  //book search
  const bookSearch = async (query, maxResults) => {
    await axiosInstance({
      method: "post",
      url: `/search`,
      data: { query, maxResults },
    })
      .then((res) => res.data)
      .then((data) => setBooksSearchList(data?.books ? data?.books : []))
      .catch((err) => console.error(err));
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/myReads-app">
          Close
        </Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={(e) => e.target.value && bookSearch(e.target.value, 20)}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {booksSearchList && booksSearchList.length > 0 ? (
            booksSearchList
              .filter((book) => !booksList.includes(book))
              .map((book) => (
                <BookShelf book={book} key={book.id} bookUpdate={bookUpdate} />
              ))
          ) : (
            <h1>no match books</h1>
          )}
        </ol>
      </div>
    </div>
  );
};

export default Search;
