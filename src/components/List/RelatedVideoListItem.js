import React from "react";
import { Link } from "react-router-dom";

export default function RelatedVideoListItem() {
  return (
    <div className="w-full flex flex-row gap-2 mb-4">
      <div className="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
        <Link to="video.html">
          <img
            src="https://i3.ytimg.com/vi/6O4s7v28nlw/maxresdefault.jpg"
            className="object-cover"
            alt="Some video title"
          />
        </Link>
        <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
          12:10
        </p>
      </div>

      <div className="flex flex-col w-full">
        <Link to="/">
          <p className="text-slate-900 text-sm font-semibold">
            Some video title
          </p>
        </Link>
        <Link to="/" className="text-gray-400 text-xs mt-2 hover:text-gray-600">
          Learn with Sumit
        </Link>
        <p className="text-gray-400 text-xs mt-1">100K views . 23 Oct 2022</p>
      </div>
    </div>
  );
}
