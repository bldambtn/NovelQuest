// Retrieve saved book IDs 
export const getSavedBookIds = () => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : [];

  return savedBookIds;
};

// Save an array of book IDs 
export const saveBookIds = (bookIdArr) => {
  if (bookIdArr.length) {
    localStorage.setItem("saved_books", JSON.stringify(bookIdArr));
  } else {
    localStorage.removeItem("saved_books");
  }
};

// Remove a specific book ID from localStorage
export const removeBookId = (bookId) => {
  const savedBookIds = localStorage.getItem("saved_books")
    ? JSON.parse(localStorage.getItem("saved_books"))
    : null;

  if (!savedBookIds) {
    return false;
  }

  const updatedSavedBookIds = savedBookIds?.filter(
    (savedBookId) => savedBookId !== bookId
  );
  localStorage.setItem("saved_books", JSON.stringify(updatedSavedBookIds));

  return true;
};
