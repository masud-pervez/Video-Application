import React from "react";
import { useDispatch, useSelector } from "react-redux";
import likeImage from "../../assets/like.svg";
import unlikeImage from "../../assets/unlike.svg";
import { likeVideo, unlikeVideo } from "../../features/video/videoSlice";

export default function LikeUnlike() {
  const dispatch = useDispatch();
  const { video } = useSelector((state) => state.video);
  const { likes, unlikes } = video;

  const handleChange = () => {
    console.log("like",likes);
    // dispatch(likeVideo());
    dispatch(unlikeVideo());
  };
  // console.log(likes);

  return (
    <div
      className="flex gap-10 w-48
    "
    >
      <div className="flex gap-1 cursor-pointer">
        <div className="shrink-0">
          <img className="w-5 block " src={likeImage} alt="Like" />
        </div>
        <div
          onClick={handleChange}
          className="text-sm leading-[1.7142857] text-slate-600"
        >
          {likes}
        </div>
      </div>
      <div onClick={handleChange} className="flex gap-1 cursor-pointer">
        <div className="shrink-0">
          <img className="w-5 block " src={unlikeImage} alt="Unlike" />
        </div>
        <div
          onClick={handleChange}
          className="text-sm leading-[1.7142857] text-slate-600"
        >
          {unlikes}
        </div>
      </div>
    </div>
  );
}
