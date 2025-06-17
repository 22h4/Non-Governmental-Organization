"use client";

import "./Navbar.scss";
import Link from "next/link";
import { BsCheckCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { GrFacebookOption } from "react-icons/gr";
import { BsTwitter } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoWhatsapp } from "react-icons/io";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoCloseCircle } from "react-icons/io5";
import Dropdown from "./Dropdown";
import { useEffect, useState } from "react";
import Image from "next/image";
import ToggleTheme from "../toggleTheme/ToggleTheme";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

const Navbar = () => {
  const [dropdownState, setDropdownState] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      disableBodyScroll(document.body)
    } else {
      enableBodyScroll(document.body)
    }
  }, [isMenuOpen])

  return (
    <div className="nav-parent-container">
      <div className="header-secondary">
        <div className="wrapper">
          <div>
            <div>
              social media:{" "}
              <span>
                <GrFacebookOption />
                <BsTwitter />
                <TfiLinkedin />
                <IoLogoWhatsapp />
              </span>
            </div>
          </div>
          <div>
            <span>
              <IoCall />
              Call: +91 1234567890
            </span>
            <span>
              <MdEmail />
              Email: someemail@gmail.com
            </span>
          </div>
        </div>
      </div>
      <div className="header-primary">
        <div className="wrapper">
          <div className="logo-container">
            <span>
              <Image
                src="/assets/logo/logo.jpeg"
                alt="logo"
                fill
                priority
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 30vw, 200px"
              />
            </span>
            <h4>Ek Nayi Soch Foundation</h4>
          </div>
          <div className="nav-container">
            <nav
              className="navbar"
              onClick={() => setIsMenuOpen(false)}
              data-menu={isMenuOpen && "open"}
            >
              <ul
                className="nav-list-primary"
                onClick={(e) => e.stopPropagation()}
                data-menu={isMenuOpen && "open"}
              >
                <div>
                  <div className="toggle-btn-md">
                    <ToggleTheme />
                  </div>
                  <IoCloseCircle
                    id="closeMenu"
                    onClick={() => setIsMenuOpen(false)}
                  />
                </div>
                <li>
                  <span>
                    <Link onClick={(prev) => setIsMenuOpen(!prev)} href="/">
                      home
                    </Link>
                  </span>
                </li>
        
                {/* <Dropdown
                  title="pages"
                  links={[
                    { label: "gallery", href: "/gallery" },
                    { label: "FAQ", href: "/helpdesk" },
                    { label: "Link 3", href: "#" },
                  ]}
                  dropdownState={dropdownState}
                  setDropdownState={setDropdownState}
                  setIsMenuOpen={setIsMenuOpen}
                /> */}
                {/* <Dropdown
                  title="causes"
                  links={[
                    { label: "Some Larger Link", href: "#" },
                    { label: "Some Larger Link", href: "#" },
                    { label: "Some Larger Link", href: "#" },
                  ]}
                  dropdownState={dropdownState}
                  setDropdownState={setDropdownState}
                  setIsMenuOpen={setIsMenuOpen}
                /> */}
                 <li>
                <span>
                    <Link onClick={(prev) => setIsMenuOpen(!prev)} href="/gallery">
                      Gallery
                    </Link>
                  </span>
                </li>
                <li>
                <span>
                    <Link onClick={(prev) => setIsMenuOpen(!prev)} href="/helpdesk">
                      Faq
                    </Link>
                  </span>
                </li>
                {/* <Dropdown
                  title="about"
                  links={[
                    { label: "Demo Link", href: "#" },
                    { label: "Demo Link", href: "#" },
                    { label: "Demo Link", href: "#" },
                  ]}
                  dropdownState={dropdownState}
                  setDropdownState={setDropdownState}
                  setIsMenuOpen={setIsMenuOpen}
                />
                <Dropdown
                  title="blog"
                  links={[
                    { label: "Demo Link", href: "#" },
                    { label: "Demo Link", href: "#" },
                    { label: "Demo Link", href: "#" },
                  ]}
                  dropdownState={dropdownState}
                  setDropdownState={setDropdownState}
                  setIsMenuOpen={setIsMenuOpen}
                /> */}

                {/* <li>
                  <span>
                    <Link onClick={(prev) => setIsMenuOpen(!prev)} href="#">
                      contact
                    </Link>
                  </span>
                </li> */}
              </ul>
            </nav>
            <div>
              <Link href="/donate">
                <button id="donate-btn-primary">
                  Donate now
                  <BsCheckCircleFill />
                </button>
              </Link>
              <HiOutlineMenuAlt2
                id="handburger-menu"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            </div>
            <div className="toggle-btn-lg">
              <ToggleTheme />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
