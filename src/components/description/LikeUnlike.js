import React from "react";
import like from "../../assets/like.svg";
import unlike from "../../assets/unlike.svg";

export default function LikeUnlike() {
  return (
    <div className="flex gap-10 w-48">
      <div className="flex gap-1 cursor-pointer">
        <div className="shrink-0">
          <img className="w-5 block " src={like} alt="Like" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
      <div className="flex gap-1 cursor-pointer">
        <div className="shrink-0">
          <img className="w-5 block " src={unlike} alt="Unlike" />
        </div>
        <div className="text-sm leading-[1.7142857] text-slate-600">100K</div>
      </div>
    </div>
  );
}
