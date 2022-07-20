import { useState, useEffect } from 'react';

import Navigation from 'common/components/Navigation';
import UserTime from 'common/components/UserTime';
import RemoteTime from 'common/components/RemoteTime';

import getSystemTheme from 'common/utils/systemTheme';
import { getTimestamp } from 'common/utils/dayjs';

const systemTheme = getSystemTheme();

const version = '1';

const App = () => {
  const [theme, setTheme] = useState(systemTheme);
  const [ts, setTs] = useState(getTimestamp());

  useEffect(() => {
    const currentVersion = localStorage.getItem('version');
    if (currentVersion !== version) {
      localStorage.clear();
      localStorage.setItem('version', version);
    }

    const timer = setInterval(() => {
      setTs(getTimestamp);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleThemeChange = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  return (
    <div
      className="h-full min-h-screen w-full bg-space text-primary-dark"
      data-theme={theme}
    >
      <div className="flex w-full flex-col">
        <Navigation handleThemeChange={handleThemeChange} theme={theme} />
        <div className="mx-auto w-full max-w-screen-lg py-4 px-3">
          <UserTime ts={ts} />
          <RemoteTime theme={theme} ts={ts} />
        </div>
      </div>
    </div>
  );
};
export default App;
