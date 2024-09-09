'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Shows: React.FC = () => {
  return (
    <section className="mx-auto py-20 px-4 max-w-screen-2xl">
      <p className="tracking-widest text-sm font-bold text-gray-600 text-center uppercase">
        Shows
      </p>
      <p className="mt-2 mb-14 text-center text-4xl md:text-6xl font-bold text-black tracking-tight">
        Upcoming Shows
      </p>

      <div className="mb-14 justify-center md:flex-wrap lg:flex-row lg:flex-nowrap lg:justify-between lg:gap-x-8 lg:gap-y-0 flex flex-wrap gap-y-8">
        <div className="w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300 hover:border-black max-lg:max-w-xl">
          <div className="mb-6 items-center flex">
            <Image
              src="https://images.pexels.com/photos/4256211/pexels-photo-4256211.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt="Show Image"
              className="w-full rounded-lg"
              width={500}
              height={400}
            />
          </div>
          <div className="block">
            <span className="mb-3 font-medium text-black block">
              Jan 01, 2024
            </span>
            <p className="mb-5 text-xl font-medium leading-8 text-gray-900 line-clamp-2">
              Live at LA
            </p>
            <p className="mb-10 leading-6 text-gray-500 line-clamp-2">
              Join Dom Morelli live in Los Angeles for an unforgettable night...
            </p>
            <Link
              href="#"
              className="text-lg font-semibold text-black cursor-pointer"
            >
              Learn more...
            </Link>
          </div>
        </div>

        <div className="w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300 hover:border-black max-lg:max-w-xl">
          <div className="mb-6 items-center flex">
            <Image
              src="https://images.unsplash.com/photo-1557425631-f132f06f4aa1?q=80&w=2692&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Show Image"
              className="w-full rounded-lg"
              width={500}
              height={400}
            />
          </div>
          <div className="block">
            <span className="mb-3 font-medium text-black block">
              Feb 14, 2024
            </span>
            <p className="mb-5 text-xl font-medium leading-8 text-gray-900 line-clamp-2">
              Live at NYC
            </p>
            <p className="mb-10 leading-6 text-gray-500 line-clamp-2">
              Experience an electrifying performance at NYC&apos;s most iconic
              venue...
            </p>
            <Link
              href="#"
              className="text-lg font-semibold text-black cursor-pointer"
            >
              Learn more...
            </Link>
          </div>
        </div>

        <div className="w-full rounded-2xl lg:w-1/3 group cursor-pointer border border-gray-300 p-5 transition-all duration-300 hover:border-black max-lg:max-w-xl">
          <div className="mb-6 items-center flex">
            <Image
              src="https://images.unsplash.com/photo-1543269865-4430f94492b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Show Image"
              className="w-full rounded-lg"
              width={500}
              height={400}
            />
          </div>
          <div className="block">
            <span className="mb-3 font-medium text-black block">
              Mar 25, 2024
            </span>
            <p className="mb-5 text-xl font-medium leading-8 text-gray-900 line-clamp-2">
              Live at Miami
            </p>
            <p className="mb-10 leading-6 text-gray-500 line-clamp-2">
              Dance the night away at Miami&apos;s biggest electronic music
              festival...
            </p>
            <Link
              href="#"
              className="text-lg font-semibold text-black cursor-pointer"
            >
              Learn more...
            </Link>
          </div>
        </div>
      </div>

      <div className="items-center justify-center flex">
        <Link
          href="#"
          className="h-fit w-fit items-center font-medium flex gap-2"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
};

export default Shows;
