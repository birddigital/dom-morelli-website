'use client';

import Image from 'next/image';
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="justify-center flex">
      <Image
        src="https://pub-a919f337b6404843818a1b3b7857e3c1.r2.dev/dom-morelli-header.webp"
        alt="Dom Morelli Header"
        width={1000} // Replace with the desired width
        height={1000} // Replace with the desired height
        className="object-cover rounded shadow-lg sm:h-64 md:h-80 lg:h-auto w-full h-auto mr-auto ml-auto transition-shadow duration-300 hover:shadow-xl lg:mb-6"
      />
    </section>
  );
};

export default Hero;
