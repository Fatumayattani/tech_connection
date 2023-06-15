import React from 'react';
import './matches.css';

const Matches = () => {
  // Component logic

  // Example state
  const [matches, setMatches] = React.useState([]);

  // Example effect hook using React.useEffect()
  React.useEffect(() => {
    // Fetch matches data from an API or perform any other necessary operations
    // Update the matches state with the retrieved data

    // Example:
    const fetchMatches = async () => {
      try {
        const response = await fetch('/api/matches');
        const data = await response.json();
        setMatches(data);
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();

    // Clean up any resources or subscriptions (if necessary)
    return () => {
      // Cleanup code goes here
    };
  }, []);

  // JSX code
  return (
    <div className="matches-container">
      <h1>Matches</h1>
      {matches.length > 0 ? (
        <ul className="match-list">
          {matches.map((match) => (
            <li key={match.id} className="match-card">
              <img src={match.profilePic} alt="Match Profile Picture" />
              <h2>{match.name}</h2>
              <p>{match.bio}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matches found.</p>
      )}
    </div>
  );
};

export default Matches;

