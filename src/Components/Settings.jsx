import React from 'react';
import './settings.css';

const Settings = () => {
  // Component logic

  // Example state
  const [settings, setSettings] = React.useState({
    notifications: true,
    darkMode: false,
    language: 'English',
  });

  // Event handler for toggling notification setting
  const toggleNotifications = () => {
    setSettings((prevState) => ({
      ...prevState,
      notifications: !prevState.notifications,
    }));
  };

  // Event handler for toggling dark mode setting
  const toggleDarkMode = () => {
    setSettings((prevState) => ({
      ...prevState,
      darkMode: !prevState.darkMode,
    }));
  };

  // Event handler for selecting language
  const selectLanguage = (event) => {
    const selectedLanguage = event.target.value;
    setSettings((prevState) => ({
      ...prevState,
      language: selectedLanguage,
    }));
  };

  // JSX code
  return (
    <div className="settings-container">
      <h1>Settings</h1>
      <div className="setting-item">
        <label>
          Notifications:
          <input
            type="checkbox"
            checked={settings.notifications}
            onChange={toggleNotifications}
          />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Dark Mode:
          <input
            type="checkbox"
            checked={settings.darkMode}
            onChange={toggleDarkMode}
          />
        </label>
      </div>
      <div className="setting-item">
        <label>
          Language:
          <select value={settings.language} onChange={selectLanguage}>
            <option value="English">English</option>
            <option value="French">French</option>
            <option value="Spanish">Spanish</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default Settings;

