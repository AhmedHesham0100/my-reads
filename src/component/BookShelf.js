import React from "react";

const BookShelf = ({ book, bookUpdate }) => {
  const shelves = [
    { id: 1, shelfValue: "currentlyReading", shelfName: "Currently Reading" },
    { id: 2, shelfValue: "wantToRead", shelfName: "Want to Read" },
    { id: 3, shelfValue: "read", shelfName: "Read" },
    { id: 4, shelfValue: "none", shelfName: "None" },
  ];

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
            <select
              onChange={(e) => bookUpdate(e.target.value, book)}
              value={book.shelf}
            >
              <option value="none" disabled>
                Move to...
              </option>
              {shelves.map((shelf) => (
                <option value={shelf.shelfValue} key={shelf.id}>
                  {shelf.shelfName}
                </option>
              ))}
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
