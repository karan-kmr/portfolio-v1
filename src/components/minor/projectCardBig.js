import React from "react";
import { MdOutlineArrowOutward } from "react-icons/md";
function projectCardBig({
  subToggle,
  imgname,
  title,
  desc,
  tag1,
  tag2,
  tag3,
  tag4,
  tag5,
  tag6,
}) {
  return (
    <div className="big-card-container w-full col-span-2 h-60vh flex justify-center items-center p-4 cursor-pointer" onClick={subToggle}>
      <div className="big-card-img w-8/12 h-full overflow-hidden rounded-large bg-contain " style={{backgroundImage:`url(${imgname})`}}>
      </div>
      <div className="big-card-body w-full h-full flex flex-col items-start justify-center p-8 pr-30 gap-y-8">
        <div className="big-card-title sub-heading pt-8">{title}</div>
        <div className=" body-normal big-card-desc opacity-60 text-sm leading-7 text-justify">{desc}</div>
        <div className="big-card-tags w-full flex justify-between flex-wrap gap-y-6 gap-x-3 opacity-70">
          <div className="big-card-tag-item">{tag1}</div>
          <div className="big-card-tag-item">{tag2}</div>
          <div className="big-card-tag-item">{tag3}</div>
          
        </div>
        {/* <div className="big-card-Button w-full flex justify-end">
        <a
            className="label big-card cta-btn"
            href={"/"}
            download={true}
          >
            View Demo
            <span className="label cta-btn-icon">
            <MdOutlineArrowOutward />
            </span>
          </a>
          
        </div> */}
      </div>
    </div>
  );
}

export default projectCardBig;