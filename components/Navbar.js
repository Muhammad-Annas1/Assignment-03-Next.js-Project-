// components/Navbar.js
"use client";  // This line is necessary since we're using client-side hooks

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white">
      <ul className="flex space-x-8 mx-2.5 justify-end ">
        <li><Link href="/" className='text-xl'>Home</Link></li>
        <li><Link href="/about" className='text-xl'>About</Link></li>
        <li><Link href="/contact" className='text-xl'>Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
