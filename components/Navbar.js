// components/Navbar.js
import { useState } from 'react';
import { Search, Heart, ShoppingCart, Home as HomeIcon, Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'About us', href: '/about' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Testimonial', href: '/testimonial' },
  ];

  const handleLinkClick = () => {
    setMobileOpen(false); // Close mobile menu after a link click
  };

  return (
    <nav className="w-full bg-[#F6F3EF] shadow-sm py-3 px-6 sticky top-0 z-50">
      <div className="max-w-11/12 mx-auto flex justify-between items-center">
        {/* Left: Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <HomeIcon className="w-6 h-6 text-black" />
          <span className="text-lg font-semibold tracking-wide">HOME DECOR</span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-gray-600 font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className={`${
                  router.pathname === link.href
                    ? 'font-semibold text-black border-b-2 border-black pb-1'
                    : ''
                } transition-all duration-200 hover:text-black`}
                aria-current={router.pathname === link.href ? 'page' : undefined}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right: Icons */}
        <div className="hidden md:flex items-center space-x-4">
          <Link href="/">
            <Search className="w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="/wishlist">
            <Heart className="w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
          </Link>
          <Link href="/cart">
            <div className="relative">
              <ShoppingCart className="w-5 h-5 cursor-pointer transition-transform duration-200 hover:scale-110" />
              <span className="absolute -top-1 -right-2 text-xs bg-yellow-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </div>
          </Link>
          <Link href="/login">
            <Image
              src="/navbarLogo.svg"
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full object-cover cursor-pointer transition-transform duration-200 hover:scale-110"
            />
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle mobile menu">
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="md:hidden mt-4 space-y-4 text-gray-700 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={handleLinkClick}
              className={`block ${
                router.pathname === link.href ? 'font-semibold text-black' : ''
              } transition-all duration-200 hover:text-black`}
              aria-current={router.pathname === link.href ? 'page' : undefined}
            >
              {link.name}
            </Link>
          ))}
          <div className="flex justify-center gap-4 mt-2">
            <Link href="/">
              <Search className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
            </Link>
            <Link href="/wishlist">
              <Heart className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
            </Link>
            <Link href="/cart">
              <div className="relative">
                <ShoppingCart className="w-5 h-5 transition-transform duration-200 hover:scale-110" />
                <span className="absolute -top-1 -right-2 text-xs bg-yellow-500 text-white w-4 h-4 flex items-center justify-center rounded-full">
                  2
                </span>
              </div>
            </Link>
            <Link href="/login">
              <Image
                src="/navbarLogo.svg"
                alt="Profile"
                width={32}
                height={32}
                className="rounded-full object-cover"
              />
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
