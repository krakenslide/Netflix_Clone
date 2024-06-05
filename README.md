**Netflix Clone**

This project is a Netflix clone website built using React and Firebase. It aims to replicate the user interface and functionality of the popular streaming platform Netflix. Users can authenticate, browse movie titles, and watch trailers.

### Features:
- **User Authentication:** Users can sign in or sign up for an account using their email and password. Firebase authentication is used to manage user credentials securely.

- **Movie Player:** The application allows users to watch movie trailers fetched from the TMDB API. It displays information about the movie, such as its release date and type, alongside the video player.

- **Homepage:** The homepage features a hero banner with promotional content and buttons to play or get more information about featured titles. It also includes title cards showcasing various categories of movies fetched from the TMDB API.

### Components:
- **Player Component:** Renders the movie player interface and fetches movie trailer data from the TMDB API.

- **Login Component:** Manages user authentication and provides a login form for users to sign in or sign up for an account.

- **Home Component:** Displays the homepage interface with promotional content and title cards for browsing movies.

- **TitleCards Component:** Generates title cards for movie titles fetched from the TMDB API, allowing users to discover new content.

- **Navbar Component:** Provides navigation links and icons for search, notifications, and user profiles.

- **Footer Component:** Displays social media icons and links to various sections of the website.

### Technologies Used:
- React
- Firebase Authentication
- TMDB API
- HTML
- CSS

### Installation:
1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up Firebase: Create a Firebase project and configure Firebase authentication.
4. Add API keys: Obtain an API key from the TMDB API and add it to the project.

### Usage:
1. Start the development server: `npm start`
2. Open the application in your browser: `http://localhost:3000`

### Contributing:
Contributions are welcome! Feel free to submit pull requests or open issues for any bugs or feature requests.

### License:
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
