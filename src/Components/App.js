import React from 'react';
import './app.css';
import LoginPage from './LoginPage';
import Signup from './Signup';
import Profile from './Profile';
import Matches from './Matches';
import Settings from './Settings';

const App = () => {
  // Example state for managing authentication and current page
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState('login');

  // Function to handle login and set the logged-in state
  const handleLogin = () => {
    setIsLoggedIn(true);
    setCurrentPage('profile');
  };

  // Function to handle logout and set the logged-out state
  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  // JSX code for rendering the appropriate component based on the current page and authentication status
  let content;
  if (currentPage === 'login') {
    content = <LoginPage handleLogin={handleLogin} />;
  } else if (currentPage === 'signup') {
    content = <Signup />;
  } else if (currentPage === 'profile') {
    content = <Profile handleLogout={handleLogout} />;
  } else if (currentPage === 'matches') {
    content = <Matches />;
  } else if (currentPage === 'settings') {
    content = <Settings />;
  }

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Tech Connection</h1>
      </header>
      <nav className="app-nav">
        <ul>
          <li onClick={() => setCurrentPage('login')}>Login</li>
          <li onClick={() => setCurrentPage('signup')}>Sign Up</li>
          {isLoggedIn && (
            <>
              <li onClick={() => setCurrentPage('profile')}>Profile</li>
              <li onClick={() => setCurrentPage('matches')}>Matches</li>
              <li onClick={() => setCurrentPage('settings')}>Settings</li>
            </>
          )}
        </ul>
      </nav>
      <main className="app-content">{content}</main>
    </div>
  );
};

export default App;

