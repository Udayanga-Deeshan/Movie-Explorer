import React from 'react';
import DarkModeToggle from './DarkModeToggle';

const Header = () => (
  <header className="flex justify-between items-center p-4 border-b dark:border-gray-700">
    <h1 className="text-2xl font-bold"> Movie Explorer</h1>
    <DarkModeToggle />
  </header>
);

export default Header;
