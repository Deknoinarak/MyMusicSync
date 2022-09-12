import React from "react";

export const Home = () => {
  return (
    <div>
      <div className="grid place-items-center w-full min-h-screen px-5">
        <div className="w-full h-full bg-web-pattern animate-pulse absolute"></div>
        <div className="z-10">
          <h1 className="uppercase text-4xl font-bold">
            Transfer playlists between streaming platforms
          </h1>
          <p className="text-sm">
            Supported platforms: Spotify, Youtube, Youtube Music
          </p>
        </div>
        <button className="py-5 px-10 bg-gradient-to-r from-purple-500 via-blue-600 to-sky-600 transition-all duration-500 z-10 rounded-full bg-pos-0 hover:bg-pos-100 bg-size-200">
          Start Transfering
        </button>
      </div>
      <div className="container mx-auto p-5"></div>
    </div>
  );
};
