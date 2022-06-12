//react
import React, { useEffect, useCallback, useState } from "react";

//react router
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { axiosInstance } from "./../axios/config";

//pages
import Home from "../pages/home/Home";
import Search from "../pages/search/Search";
import NotFound from "../pages/notFound/NotFound";

export const Routers = () => {
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
  }, [getBooks]);

  //book update
  const bookUpdate = async (shelf, book) => {
    book.shelf = shelf;

    await axiosInstance({
      method: "put",
      url: `/books/${book.id}`,
      data: { shelf },
    })
      .then((res) => res.data)
      .then(() =>
        setBooksList([...booksList.filter((b) => b.id !== book.id), book])
      )
      .catch((err) => console.error(err));
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/myReads-app"
          element={<Home booksList={booksList} bookUpdate={bookUpdate} />}
        />
        <Route
          path="/myReads-app/search"
          element={<Search bookUpdate={bookUpdate} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
