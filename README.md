# NovelQuest

## Table of Contents
- [Description](#description)
- [User Story and Acceptance Criteria](#user-story-and-acceptance-criteria)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
- [Walkthrough Video](#Walkthrough-Video)
- [Citations](#citations)
- [Acknowledgments](#acknowledgments)
- [License](#license)

## Description
The Book Search Engine is a MERN stack app that lets users search for books via the Google Books API. Users can sign up, log in, search for books, and save their favorites to a personal list. The app is powered by a GraphQL API with Apollo Server, offering a streamlined experience for discovering and managing books.

## User Story and Acceptance Criteria

### User Story
```
AS AN avid reader
I WANT to search for new books to read
SO THAT I can keep a list of books to purchase
```

### Acceptance Criteria
```
GIVEN a book search engine
WHEN I load the search engine
THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
WHEN I click on the Search for Books menu option
THEN I am presented with an input field to search for books and a submit button
WHEN I am not logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site
WHEN I click on the Login/Signup menu option
THEN a modal appears on the screen with a toggle between the option to log in or sign up
WHEN the toggle is set to Signup
THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
WHEN the toggle is set to Login
THEN I am presented with two inputs for an email address and a password and login button
WHEN I enter a valid email address and create a password and click on the signup button
THEN my user account is created and I am logged in to the site
WHEN I enter my account’s email address and password and click on the login button
THEN I the modal closes and I am logged in to the site
WHEN I am logged in to the site
THEN the menu options change to Search for Books, an option to see my saved books, and Logout
WHEN I am logged in and enter a search term in the input field and click the submit button
THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
WHEN I click on the Save button on a book
THEN that book’s information is saved to my account
WHEN I click on the option to see my saved books
THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
WHEN I click on the Remove button on a book
THEN that book is deleted from my saved books list
WHEN I click on the Logout button
THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  
```
## Walkthrough

Deployed application: https://novelquest.onrender.com

Application repository: https://github.com/bldambtn/NovelQuest

![gif of walkthrough for NovelQuest application](../NovelQuest/client/assets/novelquest.gif)

## Citations

*   Source code: University of Texas at Austin. (2024). MERN challenge [Git repository]. GitLab. https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-05-2024-U-LOLC/-/tree/main/21-MERN/02-Challenge?ref_type=heads 

## Acknowledgments

I would like to acknowledge the assistance provided by Xpert, an AI Learning Assistant from EdX, for guidance on various aspects of full stack application development, including debugging, API configuration, and setting up MongoDB Atlas.

Additionally, I would like to thank my classmate Daneil Revello (https://github.com/Lixiviate) for their invaluable assistance with setting up the Google Books API and help with Render. Their support and insights greatly contributed to the success of this project.

## License
MIT License

Copyright (c) 2024 bldambtn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
