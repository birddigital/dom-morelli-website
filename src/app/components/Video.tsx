'use client';

import React from 'react';

const VideoPage: React.FC = () => {
  return (
    <div
      className="relative text-sm tracking-wide leading-4 text-zinc-50"
      style={{ fontFamily: 'SuisseIntlMono-Regular' }}
    >
      {/* For Pages */}
      <div
        className="py-16 px-8 m-auto tracking-wide text-zinc-50"
        id="video-page"
        data-url-id="video"
        style={{ maxWidth: '1080px', fontFamily: 'SuisseIntlMono-Regular' }}
      >
        <div
          className="relative leading-4"
          style={{ fontFamily: 'SuisseIntlMono-Regular' }}
        >
          <div
            className="text-zinc-50"
            data-type="page"
            id="page-5e9ec30325156d09d6b65489"
            style={{ fontFamily: 'SuisseIntlMono-Regular' }}
          >
            <div
              className="table clear-both -mx-4 w-auto"
              style={{ fontFamily: 'SuisseIntlMono-Regular' }}
            >
              <div
                className="float-none pr-0 w-auto"
                style={{ fontFamily: 'SuisseIntlMono-Regular' }}
              >
                <div
                  className="clear-both relative px-4 pt-0 pb-4 h-auto"
                  style={{ fontFamily: 'SuisseIntlMono-Regular' }}
                >
                  <div
                    className="relative max-w-full"
                    style={{
                      maxWidth: '100%',
                      fontFamily: 'SuisseIntlMono-Regular',
                    }}
                  >
                    <div
                      className="relative"
                      style={{
                        paddingBottom: '64%',
                        fontFamily: 'SuisseIntlMono-Regular',
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 w-full h-full"
                        data-provider-name="YouTube"
                        style={{ fontFamily: 'SuisseIntlMono-Regular' }}
                      >
                        <iframe
                          width="200"
                          height="113"
                          src="https://www.youtube.com/embed/rNU5vsJmMIY?feature=oembed&enablejsapi=1"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          referrerPolicy="strict-origin-when-cross-origin"
                          allowFullScreen
                          title="Dom Dolla - girl$ (Official Audio)"
                          className="absolute top-0 left-0 w-full h-full"
                          style={{ fontFamily: 'SuisseIntlMono-Regular' }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="clear-both relative px-4 pt-4 pb-0 h-auto"
                  style={{ fontFamily: 'SuisseIntlMono-Regular' }}
                >
                  <div
                    className="text-center"
                    style={{ fontFamily: 'SuisseIntlMono-Regular' }}
                  >
                    <a
                      href="https://domdolla.lnk.to/girls"
                      className="inline-block py-3 px-6 w-auto h-auto text-xl not-italic text-white uppercase bg-transparent rounded-sm border-2 border-white border-solid cursor-pointer hover:bg-white hover:text-stone-900 hover:opacity-100"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        textDecoration: 'none',
                        fontFamily: 'SuisseIntlMono-Regular',
                        fontWeight: 'normal',
                        lineHeight: 'normal',
                        transition:
                          'background-color 0.1s linear, color 0.1s linear',
                      }}
                    >
                      STREAM ‘GIRL$’
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* For Galleries */}
      {/* For Albums */}
    </div>
  );
};

export default VideoPage;
