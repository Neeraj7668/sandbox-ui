import Image from "next/image";

import DemoItems from "./DemoItems";
import PageItems from "./PageItems";
import ProjectPageItems from "./ProjectPageItems";
import SingleProjectItems from "./SingleProjectItems";
import BlogItems from "./BlogItems";
import BlocksItems from "./BlocksItems";
import UsagesItems from "./UsagesItems";
import ElementItems from "./ElementItems";
import NavbarFooter from "./NavbarFooter";
import { DirectionIcon } from "../Icons/Icons";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg classic transparent !absolute navbar-dark">
      <div className="container xl:flex-row lg:flex-row !flex-nowrap items-center">
        <div className="navbar-brand w-full">
          <a href="/">
            <Image
              className="logo-dark"
              src="/assets/images/logo-dark.png"
              srcSet="/assets/images/logo-dark@2x.png 2x"
              alt="image"
              width={200}
              height={100}
            />
            <Image
              className="logo-light"
              src="/assets/images/logo-light.png"
              srcSet="/assets/images/logo-light@2x.png 2x"
              alt="image"
              width={200}
              height={100}
            />
          </a>
        </div>
        <div className="navbar-collapse offcanvas offcanvas-nav offcanvas-start">
          <div className="offcanvas-header xl:hidden lg:hidden flex items-center justify-between flex-row p-6">
            <h3 className="text-white xl:text-[1.5rem] !text-[calc(1.275rem_+_0.3vw)] !mb-0">
              Sandbox
            </h3>
            <button
              type="button"
              className="btn-close btn-close-white mr-[-0.75rem] m-0 p-0 leading-none text-[#343f52] transition-all duration-[0.2s] ease-in-out border-0 motion-reduce:transition-none before:text-[1.05rem] before:content-['\ed3b'] before:w-[1.8rem] before:h-[1.8rem] before:leading-[1.8rem] before:shadow-none before:transition-[background] before:duration-[0.2s] before:ease-in-out before:flex before:justify-center before:items-center before:m-0 before:p-0 before:rounded-[100%] hover:no-underline bg-inherit before:bg-[rgba(255,255,255,.08)] before:font-Unicons hover:before:bg-[rgba(0,0,0,.11)] focus:outline-0"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body xl:!ml-auto lg:!ml-auto flex  flex-col !h-full">
            <ul className="navbar-nav">
              <li className="nav-item dropdown dropdown-mega">
                <a
                  className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Demos
                  <span className="direction-icon">
                    <DirectionIcon />
                  </span>
                </a>
                <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li className="mega-menu-content mega-menu-scroll">
                    <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-10px] lg:mx-[-10px] xl:mt-[-10px] lg:mt-[-10px] !pl-0 list-none">
                      <DemoItems />
                    </ul>

                    {/* row close  */}
                    <span className="hidden xl:flex lg:flex">
                      <i className="uil uil-direction before:content-['\ea93']"></i>
                      <strong>Scroll to view more</strong>
                    </span>
                  </li>
                  {/* mega-menu-content */}
                </ul>
                {/* dropdown-menu  */}
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Pages  <span className="direction-icon">
                    <DirectionIcon />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <PageItems />
                </ul>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Projects  <span className="direction-icon">
                    <DirectionIcon />
                  </span>
                </a>
                <div className="dropdown-menu dropdown-lg">
                  <div className="dropdown-lg-content">
                    <div>
                      <h6 className="dropdown-header !text-[#747ed1]">
                        Project Pages
                      </h6>
                      <ul className="pl-0 list-none">
                        <ProjectPageItems />
                      </ul>
                    </div>
                    {/*column  */}
                    <div>
                      <h6 className="dropdown-header !text-[#747ed1]">
                        Single Projects
                      </h6>
                      <ul className="pl-0 list-none">
                        <SingleProjectItems />
                      </ul>
                    </div>
                    {/*column  */}
                  </div>
                  {/*  /auto-column  */}
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Blog  <span className="direction-icon">
                    <DirectionIcon />
                  </span>
                </a>
                <ul className="dropdown-menu">
                  <BlogItems />
                </ul>
              </li>
              <li className="nav-item dropdown dropdown-mega">
                <a
                  className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Blocks  <span className="direction-icon">
                    <DirectionIcon />
                  </span>
                </a>
                <ul className="dropdown-menu mega-menu mega-menu-dark mega-menu-img">
                  <li className="mega-menu-content">
                    <ul className="grid grid-cols-1 xl:grid-cols-6 lg:grid-cols-6 mx-0 xl:mx-[-15px] lg:mx-[-15px] xl:mt-[-20px] lg:mt-[-20px] !pl-0 list-none">
                      <BlocksItems />
                    </ul>
                    {/*row  */}
                  </li>
                  {/*mega-menu-content */}
                </ul>
                {/*dropdown-menu  */}
              </li>
              <li className="nav-item dropdown dropdown-mega">
                <a
                  className="nav-link dropdown-toggle !text-[.85rem] !tracking-[normal]"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Documentation  <span className="direction-icon">
                    <DirectionIcon />
                  </span>
                </a>
                <ul className="dropdown-menu mega-menu">
                  <li className="mega-menu-content">
                    <div className="flex flex-wrap mx-0 xl:mx-[-7.5px] lg:mx-[-7.5px]">
                      <UsagesItems />
                      {/*column  */}
                      <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] max-w-full xl:border-l-[rgba(164,174,198,0.2)] xl:border-l xl:border-solid lg:border-l-[rgba(164,174,198,0.2)] lg:border-l lg:border-solid">
                        <h6 className="dropdown-header !text-[#747ed1]">
                          Elements
                        </h6>
                        <ElementItems />
                      </div>
                      {/*column  */}
                    </div>
                    {/*row  */}
                  </li>
                  {/*mega-menu-content */}
                </ul>
                {/*dropdown-menu  */}
              </li>
            </ul>
            {/* navbar-nav  */}
            <NavbarFooter />
            {/* offcanvas-footer  */}
          </div>
          {/* offcanvas-body  */}
        </div>
        {/* navbar-collapse  */}
        <div className="navbar-other w-full !flex !ml-auto">
          <ul className="navbar-nav !flex-row !items-center !ml-auto">
            <li className="nav-item dropdown language-select uppercase group">
              <a
                className="nav-link dropdown-item dropdown-toggle xl:!text-[.85rem] lg:!text-[.85rem] md:!text-[1.05rem] sm:!text-[1.05rem] xsm:!text-[1.05rem]"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                En
              </a>
              <ul className="dropdown-menu group-hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]">
                <li className="nav-item">
                  <a className="dropdown-item hover:!text-[#747ed1]" href="#">
                    En
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item hover:!text-[#747ed1]" href="#">
                    De
                  </a>
                </li>
                <li className="nav-item">
                  <a className="dropdown-item hover:!text-[#747ed1]" href="#">
                    Es
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvas-info"
              >
                <i className="uil uil-info-circle before:content-['\eb99'] !text-[1.1rem]"></i>
              </a>
            </li>
            <li className="nav-item xl:hidden lg:hidden">
              <button className="hamburger offcanvas-nav-btn">
                <span></span>
              </button>
            </li>
          </ul>
          {/* {/*navbar-nav  */}
        </div>
        {/*navbar-other  */}
      </div>
      {/*container  */}
    </nav>
  );
};

export default Navbar;
