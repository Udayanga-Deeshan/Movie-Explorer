import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => (
  <header className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-700">
    <h1 className="text-lg sm:text-2xl font-bold">Movie Explorer</h1>
    <DarkModeToggle />
  </header>
);

export default Header;
