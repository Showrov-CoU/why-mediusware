import React from "react";
import { MdOutlinePhone } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Topbar() {
  return (
    <div className="bg-[#002B4F] text-white px-[10%] py-3">
      <div className="flex justify-between items-center">
        <div className="flex justify-center items-center gap-5">
          <div className="flex justify-center items-center gap-2">
            <div>
              <MdOutlinePhone></MdOutlinePhone>
            </div>
            <p>+880 1750 020408</p>
          </div>
          <div className="h-[20px] w-[2px] bg-white"></div>
          <div className="flex justify-center items-center gap-2">
            <div>
              <MdOutlineMailOutline></MdOutlineMailOutline>
            </div>
            <p>contact@mediusware.com</p>
          </div>
        </div>
        <div className="flex gap-5">
          <FaFacebook></FaFacebook>
          <FaTwitter></FaTwitter>
          <FaLinkedin></FaLinkedin>
        </div>
      </div>
    </div>
  );
}
