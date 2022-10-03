import React from "react";
import VideoGrid from "../components/grid/VideoGrid";
import Tags from "../components/Tags/Tags";
import Pagination from "../components/UI/Pagination";

export default function Home() {
  return (
    <>
      <Tags />
      <VideoGrid />
      <Pagination />
    </>
  );
}
