import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';

// 1. Create the Context
const ThemeContext = createContext();

// 2. Create the Provider
export const ThemeProvider = ({ children }) => {
  // 'setting' stores the user's *choice* ('light', 'dark', or 'auto')
  // 'theme' stores the *actual* applied theme ('light' or 'dark')
  const [setting, setSetting] = useState(() => 
    localStorage.getItem('theme-setting') || 'auto' // Default to 'auto'
  );

  const [theme, setTheme] = useState('light'); // Default to light before logic runs

  useEffect(() => {
    let newTheme = setting;

    if (setting === 'auto') {
      // --- This is your time-based logic ---
      const hour = new Date().getHours();
      // It's 1:10 AM IST, so (hour < 6 || hour >= 18) is TRUE -> dark mode
      if (hour < 6 || hour >= 18) {
        newTheme = 'dark';
      } else {
        newTheme = 'light';
      }
      // --- End time-based logic ---
      
      // A more robust 'auto' would also check system preference:
      // const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      // newTheme = systemPrefersDark ? 'dark' : 'light';
    }

    // Apply the new theme to the root <html> element
    document.documentElement.setAttribute('data-theme', newTheme);
    setTheme(newTheme); // Save the *actual* theme
    localStorage.setItem('theme-setting', setting); // Save the *user's choice*
    
  }, [setting]); // This effect re-runs every time the user changes the setting

  // The value to provide to all child components
  const value = useMemo(() => ({
    theme,     // The *current* theme ('light' or 'dark')
    setting,   // The *user's choice* ('light', 'dark', 'auto')
    setSetting // The function to change the choice
  }), [theme, setting]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// 3. Create the custom hook
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};