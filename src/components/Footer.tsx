// components/Footer.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsInstagram, BsTwitterX, BsWhatsapp, BsLinkedin, BsFacebook, BsSearch } from 'react-icons/bs';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
          <div>
            <h3 className="text-lg font-bold mb-4">Product</h3>
            <ul>
              <li>
                <Link href="/employee-database" className="hover:text-gray-400">
                  Employee database
                </Link>
              </li>
              <li>
                <Link href="/payroll" className="hover:text-gray-400">
                  Payroll
                </Link>
              </li>
              <li>
                <Link href="/absences" className="hover:text-gray-400">
                  Absences
                </Link>
              </li>
            </ul>
            <div className="md:col-span-2 mt-9">
            <Link href="/">
              <Image
                src="/logo.gif"
                alt="Logo"
                width={90}
                height={90}
                />
            </Link>
          </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Information</h3>
            <ul>
              <li>
                <Link href="/faq" className="hover:text-gray-400">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/support" className="hover:text-gray-400">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li>
                <Link href="http://localhost:3000/#pricing" className="hover:text-gray-400">
                  About us
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="http://localhost:3000/#contact" className="hover:text-gray-400">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe</h3>
            <p className="mb-4">
              Hello, we are Influencio. Our goal is to translate the positive effects from revolutionizing how companies
              engage with their clients & their team.
            </p>
            <form>
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-700 text-white px-4 py-2 rounded-md w-full mb-2"
              />
              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div>
            <ul className="flex space-x-4">
              <li>
                <Link href="/terms" className="hover:text-gray-400">
                  Terms
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-400">
                  Privacy
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-gray-400">
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
          <div className="hidden lg:flex gap-1 ml-5 text-gray-300">
            <Link href="https://web.whatsapp.com/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <div className="header_top_icon_wrapper">
                <BsInstagram className="header_top_icon" />
              </div>
            </Link>
            <Link href="https://www.facebook.com/profile.php?id=100041103906011" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <div className="header_top_icon_wrapper">
                <BsFacebook className="header_top_icon" />
              </div>
            </Link>
            <Link href="https://x.com/ABDESSAMAD30211" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <div className="header_top_icon_wrapper">
                <BsTwitterX className="header_top_icon" />
              </div>
            </Link>
            <Link href="https://www.instagram.com/mekkaoui_abdessamad_/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <div className="header_top_icon_wrapper">
                <BsWhatsapp className="header_top_icon" />
              </div>
            </Link>
            <Link href="https://www.linkedin.com/in/abdessamad-mekkaoui/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
              <div className="header_top_icon_wrapper">
                <BsLinkedin className="header_top_icon" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
