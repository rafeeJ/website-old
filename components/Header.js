import { Transition } from '@headlessui/react';
import React, { useState } from 'react';
import Link from 'next/link'
import { downloadCV } from '../functions';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-offwhite">
      <div className="max-w-7xl md:ml-10 pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link
                href={"/"}
                className="font-merri tracking-tight text-darkp text-2xl sm:text-4xl">
                Rafee Jenkins
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-48 flex items-baseline space-x-4">
                <Link
                  href={"/"}
                  className="hover:bg-gray-700 hover:text-white text-darkp px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link
                  href={"/projects"}
                  className="hover:bg-gray-700 hover:text-white text-darkp px-3 py-2 rounded-md text-sm font-medium">

                  Projects

                </Link>
                <Link
                  href={"/events"}
                  className="text-darkp hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">

                  Events

                </Link>
                <Link
                  href={"/about"}
                  className="text-darkp hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">

                  About

                </Link>
                <Link
                  href={"/blog"}
                  className="text-darkp hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">

                  Blog

                </Link>
                <a
                  href="#"
                  className="bg-darkp hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                  onClick={() => downloadCV()}
                >
                  Download my CV
                </a>
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden bg-offwhite" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href={"/"}
                className="hover:bg-gray-700 hover:text-white text-darkp block px-3 py-2 rounded-md text-base font-medium">

                Home

              </Link>
              <Link
                href={"/projects"}
                className="hover:bg-gray-700 hover:text-white text-darkp block px-3 py-2 rounded-md text-base font-medium">

                Projects

              </Link>
              <Link
                href={"/events"}
                className="text-darkp hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">

                Events

              </Link>
              <Link
                href={"/about"}
                className="text-darkp hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">

                About

              </Link>
              <Link
                href={"/blog"}
                className="text-darkp hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">

                Blog

              </Link>

              <a
                className="text-darkp hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => downloadCV()}
              >
                Download my CV!
              </a>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
