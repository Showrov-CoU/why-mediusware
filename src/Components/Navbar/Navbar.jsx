import React from "react";

import logo from '../../assets/Logo.png'

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 px-[10%]">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="font-bold menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>HOME</a>
            </li>
            <li>
              <a>SERVICES</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>PROJECTS</a>
            </li>
            <li>
              <a>WHY MEDIUSWARE</a>
            </li>
            <li>
              <a>BLOG</a>
            </li>
            <li>
              <a>CAREER</a>
            </li>
            <li>
              <a>OUR TEAM</a>
            </li>
          </ul>
        </div>
        {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
        <img src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <a>HOME</a>
          </li>
          <li>
            <details>
              <summary>SERVICES</summary>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <a>PROJECTS</a>
          </li>
          <li>
            <a>WHY MEDIUSWARE</a>
          </li>
          <li>
            <a>BLOG</a>
          </li>
          <li>
            <a>CAREER</a>
          </li>
          <li>
            <a>OUR TEAM</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-[#0060AF] text-white">Book a Call</a>
      </div>
    </div>
  );
}
