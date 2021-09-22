# React Intermediate Challenge 3 - Auth, Routing and Global state managment.

For this challenge you will create a SPA with Authentication and use of a global state managment.

The app will consist in a clone of [Google keep app](https://keep.google.com/u/0/).

The app allows you to create diferent kind of notes and keep them on the site.

We are not going to clone 100% the app.

Just focus on the next features:

- Access only via authentication using Email/Password.
- Create a new note through a form with **only plain text and color**.
- You can update the content and the color of note.
- You can search a note via search input.
- You can archive a note.
- You can navigate through login page, notes page and archive page.

## Instructions

Please read the following requisites in order to complete this challenge.

- Create a new branch with name `challenge-3` from this repository.
- Complete all the Acceptance Criterias.
- No UI libraries.
- **You have to use React Testing Library and Jest tools in order to complete the tests.**
- **Use functional components and React Hooks as possible.**

**Notes**
We suggest you to use React Router for navigation and React Context/Redux for global state managment.

## Acceptance Criterias (AC)

- When the user is not authenticated and enters on the app, the app should redirect always to the login page.
- When the user is not authenticated and enters on the login page, the app should display a Login form with email and password inputs and a submit button.
- When the user is not authenticated, enters on the login page and types incorrect Email/Password credentials, the app should shows the error message "Email or password are not correct".
- When the user is not authenticated, enters on the login page and fills the login form with valid credentials, then the app should redirect to the Notes page.
- When the user is authenticated, enters on notes page and there are not notes yet, the app should shows a message "There are no notes, please create a new one using the creation note input".
- When the user is authenticated, enters on notes page, type text on the creation note input and clicks on "close" button, then the app should create the new note with the text content and selected color, and display it on the notes page.
- When the user is authenticated, enters on notes page, have at least one note, modifies the text content and color of one note and clicks on save, then the app should update only the note selected with the text content and color selected.
- When the user is authenticated, enters on notes page, have at least 5 notes with text content, and types in the search input with text, then the app should shows only the notes that match with the search.
- When the user is authenticated, enters on notes page, have at least 5 notes with text content, and types in the search input with text that does not match with no note, then the app should shows a message "There are no match results. Try another search."
- When the user is authenticated, enters on archive page and there are not archive notes yet, then the app should shows the message "You don't have archived notes".
- When the user is authenticated, enters on notes page, have at least one note, and clicks on archive note, then the app should move the note selected to the archives page and should not be longer displayed on notes page.


## Score

- Authentication validations for access to private routes: `10`.
- Authentication via Email/Password: `10`.
- Navigation routing through different views: `10`.
- Create new note with text and color: `10`.
- Update a current note with text and color: `10`.
- Search notes: `10`.
- Archive notes: `10`.
- Tests for private routes: `10`.
- Tests for login page UI using valid and invalid credentail cases: `10`.
- Tests for notes page UI doing the creation of a new note: `10`.

## Bonus

The bonus are a plus that help us to know you better and increments your final score.

- Add tests for update a note through the notes page UI: `10`.
- Add tests for archive a note through the notes page UI: `10`.
- Add a 404 page: `10`.
- Add a test for 404 page: `10`.
- Add Dark mode: `20`.
- The app is responsive: `20`.
- The app use a backend service (like Firebase): `50`.

## Questions?

If you have any question about this challenge, feel free to ask on the Slack channel ASAP.
