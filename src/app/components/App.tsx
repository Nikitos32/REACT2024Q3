'use client';

import { createContext, useState } from 'react';

export const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

const App = () => {
  const [theme, setTheme] = useState<string>('light');
  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <>
      <ThemeContext.Provider
        value={{ theme: theme, toggleTheme: toggleTheme }}
      />
    </>
  );
};

export default App;
