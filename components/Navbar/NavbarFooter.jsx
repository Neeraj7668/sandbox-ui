import React from "react";

const NavbarFooter = () => {
  return (
    <div className="offcanvas-footer xl:hidden lg:hidden">
      <div>
        <a href="mailto:first.last@email.com" className="link-inverse">
          info@email.com
        </a>
        <br /> 00 (123) 456 78 90 <br />
        <nav className="nav social social-white mt-4">
          <a
            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
            href="#"
          >
            <i className="uil uil-twitter before:content-['\ed59'] !text-white text-[1rem]"></i>
          </a>
          <a
            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
            href="#"
          >
            <i className="uil uil-facebook-f before:content-['\eae2'] !text-white text-[1rem]"></i>
          </a>
          <a
            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
            href="#"
          >
            <i className="uil uil-dribbble before:content-['\eaa2'] !text-white text-[1rem]"></i>
          </a>
          <a
            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
            href="#"
          >
            <i className="uil uil-instagram before:content-['\eb9c'] !text-white text-[1rem]"></i>
          </a>
          <a
            className="text-[#cacaca] text-[1rem] transition-all duration-[0.2s] ease-in-out translate-y-0 motion-reduce:transition-none hover:translate-y-[-0.15rem] m-[0_.7rem_0_0]"
            href="#"
          >
            <i className="uil uil-youtube before:content-['\edb5'] !text-white text-[1rem]"></i>
          </a>
        </nav>
        {/* social  */}
      </div>
    </div>
  );
};

export default NavbarFooter;
