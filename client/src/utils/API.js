export const searchGoogleBooks = (query) => {
  const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
  console.log("Google API Key:", apiKey);

  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`
  );
};
