'use client';

import React from 'react';
import Link from 'next/link';
import {
  AppleMusicSVG,
  FacebookSVG,
  InstagramSVG,
  SoundCloudSVG,
  SpotifySVG,
  TikTokSVG,
  TwitterSVG,
  YouTubeSVG,
} from './Svgs';

const Footer: React.FC = () => {
  return (
    <footer
      id="footer"
      role="contentinfo"
      className="bg-neutral-900 text-sm tracking-wide leading-4 text-white"
      style={{ fontFamily: 'SuisseIntlMono-Regular' }}
    >
      <div className="py-16 px-8 mx-auto max-w-screen-xl">
        {/* Back to Top Section */}
        <div className="flex justify-center mb-4">
          <nav>
            <Link
              href="#header"
              className="py-3 px-4 text-orange-100 uppercase cursor-pointer hover:text-orange-200 transition-colors ease-in-out"
              style={{
                textDecoration: 'none',
                fontSize: '8px',
                fontFamily: 'Source Code Pro',
              }}
            >
              Back To Top
            </Link>
          </nav>
        </div>

        {/* Social Media Icons Section */}
        <div className="flex justify-center space-x-4 mb-8">
          <Link
            href="https://www.facebook.com/domdollamusic"
            target="_blank"
            aria-label="Facebook"
          >
            <FacebookSVG />
          </Link>
          <Link
            href="http://instagram.com/domdolla"
            target="_blank"
            aria-label="Instagram"
          >
            <InstagramSVG />
          </Link>
          <Link
            href="https://twitter.com/domdolla"
            target="_blank"
            aria-label="Twitter"
          >
            <TwitterSVG />
          </Link>
          <Link
            href="https://open.spotify.com/artist/205i7E8fNVfojowcQSfK9m?si=hZl4L1c-RJiR7hHooy-S8g"
            target="_blank"
            aria-label="Spotify"
          >
            <SpotifySVG />
          </Link>
          <Link
            href="http://music.apple.com/au/artist/dom-dolla/555348065"
            target="_blank"
            aria-label="Apple Music"
          >
            <AppleMusicSVG />
          </Link>
          <Link
            href="http://soundcloud.com/domdolla"
            target="_blank"
            aria-label="SoundCloud"
          >
            <SoundCloudSVG />
          </Link>
          <Link
            href="https://www.youtube.com/c/DomDolla"
            target="_blank"
            aria-label="YouTube"
          >
            <YouTubeSVG />
          </Link>
          <Link
            href="https://www.tiktok.com/@domdolla"
            target="_blank"
            aria-label="TikTok"
          >
            <TikTokSVG />
          </Link>
        </div>

        {/* Copyright Section */}
        <div className="flex justify-center">
          <p
            className="text-center whitespace-pre-wrap"
            style={{ fontFamily: 'Press Gothic' }}
          >
            © 2024 DOM MORELLI
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
