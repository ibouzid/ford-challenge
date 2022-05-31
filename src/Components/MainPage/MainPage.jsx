import React, { useEffect, useState } from "react";
import AuthorCard from "./AuthorCard";
import "./MainPage.scss";

// The Challenge – Part 2

// We would like you to build a basic application which has two routes, root (you will work on this page for this test)
// and /add-new-author (this page should already exist). The root page should contain a list of cards with author information
// that you pulled from the mock API inside of each card. The cards should sit inside of a 2x3 grid.

// Requirements

// · Preferred application framework: Angular or React.

// · Pages should be fully responsive and mobile friendly.

// · Must us Sass as a preprocessor.

// · Must write the styles yourself and not use a third-party CSS framework.

// · Pull the list of authors from https://625dc3ef4c36c753577995e4.mockapi.io/authors

// · Add author information to a styled card in this order:

// o image

// o firstName lastName

// o company

// o jobTitle

// o Additional info toggle

// § email

// § jobDescription

// · The additional info toggle should be closed by default. When the user clicks the toggle, the
// additional content should show and the SVG icon should rotate up.

const MainPage = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    fetch("https://625dc3ef4c36c753577995e4.mockapi.io/authors")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((data) => {
        setAuthors(data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, []);
  return (
    <>
      <div className="authors-container">
        {authors.map((author) => {
          return <AuthorCard author={author} />;
        })}
      </div>
      <a className="button" href="/add-new-author">
        <h1>Add Authors Page</h1>
      </a>
    </>
  );
};
export default MainPage;
