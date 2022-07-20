import PropTypes from 'prop-types';
import { SunIcon, MoonIcon } from '@heroicons/react/outline';
import { Transition } from '@headlessui/react';

const Navigation = ({ theme, handleThemeChange }) => (
  <div className="h-16 w-full bg-space-light px-3">
    <div className="mx-auto flex h-full w-full max-w-screen-lg items-center justify-between">
      <div className="text-xl font-semibold text-primary-dark">
        tz
        <span className="text-brand-dark">.</span>
      </div>
      <div className="relative h-6 w-6">
        <button
          onClick={handleThemeChange}
          type="button"
          className="absolute h-6 w-6 overflow-hidden focus:outline-none"
        >
          <Transition
            show={theme === 'light'}
            enter="transition-transform duration-1000"
            enterFrom="rotate-0"
            enterTo="rotate-360"
          >
            <MoonIcon className="h-6" />
          </Transition>
          <Transition
            show={theme === 'dark'}
            enter="transition-transform duration-1000"
            enterFrom="rotate-0"
            enterTo="rotate-180"
          >
            <SunIcon className="h-6" />
          </Transition>
        </button>
      </div>
    </div>
  </div>
);

Navigation.defaultProps = {
  theme: 'dark',
  handleThemeChange: () => {},
};

Navigation.propTypes = {
  theme: PropTypes.string,
  handleThemeChange: PropTypes.func,
};

export default Navigation;
