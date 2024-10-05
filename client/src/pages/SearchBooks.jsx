import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { SAVE_BOOK } from "../utils/mutations";
import { Container, Form, Row, Col, Button, Card } from "react-bootstrap";
import Auth from "../utils/auth";

const SearchBooks = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedBooks, setSearchedBooks] = useState([]);
  const [saveBook] = useMutation(SAVE_BOOK);

  // Function to handle saving a book
  const handleSaveBook = async (bookData) => {
    try {
      await saveBook({
        variables: {
          bookId: bookData.bookId,
          title: bookData.title,
          authors: bookData.authors,
          description: bookData.description,
          image: bookData.image,
          link: bookData.link,
        },
      });
    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle form submission
  const handleFormSubmit = async (event) => {
    event.preventDefault();

    if (!searchInput.trim()) {
      return; // Don't proceed if the input is empty
    }

    try {
      // Use an API call to search for books (example with Google Books API)
      const response = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchInput}`
      );
      const { items } = await response.json();

      // Map the response to match your state structure
      const bookData = items.map((book) => ({
        bookId: book.id,
        title: book.volumeInfo.title,
        authors: book.volumeInfo.authors || ["No authors listed"],
        description: book.volumeInfo.description || "No description available",
        image: book.volumeInfo.imageLinks?.thumbnail || "",
        link: book.volumeInfo.infoLink || "",
      }));

      setSearchedBooks(bookData); // Update state with the search results
    } catch (err) {
      console.error("Error fetching books:", err);
    }
  };

  return (
    <>
      <div className="text-light bg-dark p-5">
        <Container>
          <h1>Search for Books!</h1>
          <Form onSubmit={handleFormSubmit}>
            <Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a book"
                />
              </Col>
              <Col xs={12} md={4}>
                <Button type="submit" variant="success" size="lg">
                  Submit Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>

      <Container>
        <h2 className="pt-5">
          {searchedBooks.length
            ? `Viewing ${searchedBooks.length} results:`
            : "Search for a book to begin"}
        </h2>
        <Row>
          {searchedBooks.map((book) => (
            <Col md="4" key={book.bookId}>
              <Card border="dark">
                {book.image && (
                  <Card.Img
                    src={book.image}
                    alt={`The cover for ${book.title}`}
                    variant="top"
                  />
                )}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className="small">Authors: {book.authors.join(", ")}</p>
                  <Card.Text>{book.description}</Card.Text>
                  {Auth.loggedIn() && (
                    <Button
                      className="btn-block btn-info"
                      onClick={() => handleSaveBook(book)}
                    >
                      Save this Book!
                    </Button>
                  )}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default SearchBooks;
