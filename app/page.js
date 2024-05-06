import Image from "next/image";

import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <section className="!font-Urbanist !text-[0.85rem] main">
      <div className="page-frame !bg-[#e0e9fa]">
        <div className="grow shrink-0">
          <header className="relative wrapper">
            <Navbar />
            {/*navbar  */}
            <div
              className="offcanvas offcanvas-end text-inverse !text-[#cacaca] opacity-100"
              id="offcanvas-info"
              data-bs-scroll="true"
            >
              <div className="offcanvas-header flex flex-row items-center justify-between p-[1.5rem]">
                <h3 className="text-white xl:!text-[1.5rem] text-[calc(1.275rem_+_0.3vw)] !leading-[1.4] mb-0">
                  Sandbox
                </h3>
                <button
                  type="button"
                  className="btn-close btn-close-white mr-[-0.5rem] m-0 p-0"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body !pb-[1.5rem]">
                <div className="widget mb-8">
                  <p>
                    Sandbox is a multipurpose HTML5 template with various
                    layouts which will be a great solution for your business.
                  </p>
                </div>
                {/*widget  */}
                <div className="widget mb-8">
                  <h4 className="widget-title text-white mb-[0.75rem] !text-[1rem] !leading-[1.45]">
                    Contact Info
                  </h4>
                  <address className=" not-italic leading-[inherit] mb-[1rem]">
                    {" "}
                    Moonshine St. 14/05 <br /> Light City, London{" "}
                  </address>
                  <a
                    className="text-[#cacaca] hover:!text-[#747ed1]"
                    href="mailto:first.last@email.com"
                  >
                    info@email.com
                  </a>
                  <br /> 00 (123) 456 78 90
                </div>
                {/*widget  */}
                <div className="widget mb-8">
                  <h4 className="widget-title text-white mb-[0.75rem] !text-[1rem] !leading-[1.45]">
                    Learn More
                  </h4>
                  <ul className="list-unstyled pl-0">
                    <li>
                      <a
                        className="text-[#cacaca] hover:!text-[#747ed1]"
                        href="#"
                      >
                        Our Story
                      </a>
                    </li>
                    <li className="mt-[.35rem]">
                      <a
                        className="text-[#cacaca] hover:!text-[#747ed1]"
                        href="#"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="mt-[.35rem]">
                      <a
                        className="text-[#cacaca] hover:!text-[#747ed1]"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li className="mt-[.35rem]">
                      <a
                        className="text-[#cacaca] hover:!text-[#747ed1]"
                        href="#"
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
                {/*widget  */}
                <div className="widget">
                  <h4 className="widget-title text-white mb-[0.75rem] !text-[1rem] !leading-[1.45]">
                    Follow Us
                  </h4>
                  <nav className="nav social social-white">
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
                  {/*social  */}
                </div>
                {/*widget  */}
              </div>
              {/*offcanvas-body  */}
            </div>
            {/*offcanvas  */}
          </header>
          {/*/header  */}
          <section className="video-wrapper relative overflow-hidden bg-overlay bg-overlay-gradient !px-0 !mt-0 min-h-[80vh] xl:rounded-[1rem] lg:rounded-[1rem] md:rounded-[1rem]">
            <video
              poster="/assets/images/movie2.jpeg"
              src="https://sandbox-tailwindcss.ibthemespro.com/assets/media/movie2.mp4"
              autoPlay
              loop
              playsInline
              muted
              width={100}
              height={100}
            ></video>
            <div className="video-content absolute z-[2] w-full h-full flex items-center justify-center text-center flex-col left-0 top-0">
              <div className="container !text-center">
                <div className="flex flex-wrap mx-[-15px]">
                  <div className="lg:w-8/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center text-white !mx-auto">
                    <h1 className="xl:text-[2.7rem] text-[calc(1.395rem_+_1.74vw)] font-semibold !leading-[1.15] text-white mb-5">
                      <span className="rotator-zoom">
                        Rapid Solutions,Innovative Thinking,Top-Notch Support
                      </span>
                    </h1>
                    <p className="lead !text-[1.2rem] !leading-[1.6] font-medium !mb-0 xxl:!mx-8">
                      We are a digital agency specializing in web design, mobile
                      development and seo optimization.
                    </p>
                  </div>
                  {/*/column  */}
                </div>
              </div>
              {/*video-content  */}
            </div>
            {/*content-overlay  */}
          </section>
          {/*/section  */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
              <div className="flex flex-wrap mx-[-15px] !text-center mb-10">
                <div className="md:w-10/12 lg:w-9/12 xl:w-9/12 xxl:w-8/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                    What We Do?
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold xl:!px-10  !mb-0">
                    The service we offer is specifically designed to meet your
                    needs.
                  </h3>
                </div>
                {/*/column  */}
              </div>
              {/*row  */}
              <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full">
                  <figure className="!rounded-[.4rem]  !mb-0">
                    <Image
                      className="max-w-full h-auto"
                      src="/assets/images/ui4.png"
                      srcSet="/assets/images/ui4@2x.png 2x"
                      alt="image"
                      width={1920}
                      height={1080}
                      layout="responsive"
                    />
                  </figure>
                </div>
                {/*column  */}
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full ml-auto">
                  <h3 className="xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mb-3">
                    Web Design
                  </h3>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Praesent commodo cursus
                    magna risus varius.
                  </p>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-purple">
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Aenean quam ornare curabitur blandit.
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Nullam quis risus eget urna mollis ornare leo.
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Etiam porta euismod mollis natoque ornare.
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-soft-purple !rounded-[50rem] !mt-2  !mb-0"
                  >
                    More Details
                  </a>
                </div>
                {/*column  */}
              </div>
              {/*row  */}
              <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem] items-center">
                <div className="lg:w-6/12 xl:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full lg:!order-2 xl:!order-2 ml-auto">
                  <figure className="!rounded-[.4rem]  !mb-0">
                    <Image
                      className="max-w-full h-auto"
                      src="/assets/images/ui1.png"
                      srcSet="/assets/images/ui1@2x.png 2x"
                      alt="image"
                      width={1920}
                      height={1080}
                      layout="responsive"
                    />
                  </figure>
                </div>
                {/*column  */}
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full">
                  <h3 className="xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mb-3">
                    Mobile Development
                  </h3>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Praesent commodo cursus
                    magna risus varius.
                  </p>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-purple">
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Aenean quam ornare curabitur blandit.
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Nullam quis risus eget urna mollis ornare leo.
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Etiam porta euismod mollis natoque ornare.
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-soft-purple !rounded-[50rem] !mt-2  !mb-0"
                  >
                    More Details
                  </a>
                </div>
                {/*column  */}
              </div>
              {/*row  */}
              <div className="flex flex-wrap mx-[-15px] xl:mx-0 lg:mx-0 mt-[-50px] items-center">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full">
                  <figure className="!rounded-[.4rem]  !mb-0">
                    <Image
                      className="max-w-full h-auto"
                      src="/assets/images/ui5.png"
                      srcSet="/assets/images/ui5@2x.png 2x"
                      alt="image"
                      width={1920}
                      height={1080}
                      layout="responsive"
                    />
                  </figure>
                </div>
                {/*column  */}
                <div className="xl:w-5/12 lg:w-5/12 w-full flex-[0_0_auto] px-[15px] xl:px-0 lg:px-0 mt-[50px] max-w-full ml-auto">
                  <h3 className="xl:text-[1.4rem] text-[calc(1.265rem_+_0.18vw)] !mb-3">
                    SEO Optimization
                  </h3>
                  <p>
                    Cum sociis natoque penatibus et magnis dis parturient
                    montes, nascetur ridiculus mus. Cras justo odio, dapibus ac
                    facilisis in, egestas eget quam. Praesent commodo cursus
                    magna risus varius.
                  </p>
                  <ul className="pl-0 list-none bullet-bg bullet-soft-purple">
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Aenean quam ornare curabitur blandit.
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Nullam quis risus eget urna mollis ornare leo.
                    </li>
                    <li className="relative pl-6 mt-[0.35rem]">
                      <i className="uil uil-check absolute left-0 w-4 h-4 text-[0.8rem] leading-none tracking-[normal] !text-center flex items-center justify-center bg-[#e6e8f7] text-[#747ed1] rounded-[100%] top-[0.2rem] before:content-['\e9dd'] before:align-middle before:table-cell"></i>
                      Etiam porta euismod mollis natoque ornare.
                    </li>
                  </ul>
                  <a
                    href="#"
                    className="btn btn-soft-purple !rounded-[50rem] !mt-2  !mb-0"
                  >
                    More Details
                  </a>
                </div>
                {/*column  */}
              </div>
              {/*row  */}
            </div>
            {/*container  */}
          </section>
          {/*/section  */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
              <div className="flex flex-wrap mx-[-15px] !text-center">
                <div className="lg:w-10/12 xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto !relative">
                  <div className="!relative">
                    <div
                      className="shape pale-pink rellax !w-[8rem] top-4 left-[-4.2rem] !h-[8rem] !absolute z-[1]"
                      data-rellax-speed="1"
                    >
                      <Image
                        src="/assets/images/hex.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                        alt="image"
                        width={24}
                        height={24}
                      />
                    </div>
                    <div
                      className="shape pale-purple bottom-8 right-[-3.5rem] rellax !w-[8rem] !h-[8rem] !absolute z-[1]"
                      data-rellax-speed="1"
                    >
                      <Image
                        src="/assets/images/circle.svg"
                        className="svg-inject icon-svg !w-full !h-full"
                        alt="image"
                        width={24}
                        height={24}
                      />
                    </div>
                    <video
                      poster="/assets/images/movie2.jpeg"
                      className="player relative z-[2] rounded-[0.4rem]"
                      autoPlay
                      
                      playsInline
                      muted
                     controls
                      src="https://sandbox-tailwindcss.ibthemespro.com/assets/media/movie.mp4" 
                    />
                     
                  </div>
                </div>
                {/*column  */}
              </div>
              {/*row  */}
              <div className="flex flex-wrap mx-[-15px] !text-center mt-[3.5rem]">
                <div className="xl:w-10/12 lg:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                    Our Working Process
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold xl:!px-10 xxl:!px-20 mb-10">
                    Find out everything you need to know about creating a
                    business process model
                  </h3>
                  <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] process-wrapper arrow !text-center">
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                      {" "}
                      <Image
                        src="/assets/images/bulb.svg"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-pink mb-4 m-[0_auto]"
                        alt="image"
                        width={24}
                        height={24}
                      />
                      <h3 className="text-[1.1rem]">1. Collect Ideas</h3>
                      <p>
                        Etiam porta malesuada magna mollis euismod consectetur
                        leo elit.
                      </p>
                    </div>
                    {/*column  */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                      {" "}
                      <Image
                        src="/assets/images/compare.svg"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-pink mb-4 m-[0_auto]"
                        alt="image"
                        width={24}
                        height={24}
                      />
                      <h3 className="text-[1.1rem]">2. Data Analysis</h3>
                      <p>
                        Etiam porta malesuada magna mollis euismod consectetur
                        leo elit.
                      </p>
                    </div>
                    {/*column  */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] xl:px-[35px] lg:px-[20px] max-w-full">
                      {" "}
                      <Image
                        src="/assets/images/delivery-box.svg"
                        className="svg-inject icon-svg !w-[2.2rem] !h-[2.2rem]  solid-duo text-purple-pink mb-4 m-[0_auto]"
                        alt="image"
                        width={24}
                        height={24}
                      />
                      <h3 className="text-[1.1rem]">3. Finalize Product</h3>
                      <p>
                        Etiam porta malesuada magna mollis euismod consectetur
                        leo elit.
                      </p>
                    </div>
                    {/*column  */}
                  </div>
                  {/*row  */}
                </div>
                {/*/column  */}
              </div>
              {/*row  */}
            </div>
            {/*container  */}
          </section>
          {/*/section  */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
              <div className="flex flex-wrap mx-[-15px]">
                <div className="lg:w-11/12 xl:w-10/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto mb-10">
                  <h2 className="text-[0.8rem] uppercase text-[#aab0bc] !text-center !mb-3 !leading-[1.35]">
                    Our Projects
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !text-center lg:!px-5 xl:!px-10 xxl:!px-[6rem]  !mb-0">
                    Check out some of our awesome projects with creative ideas
                    and great design.
                  </h3>
                </div>
                {/*/column  */}
              </div>
              {/*row  */}
              <div className="itemgrid grid-view projects-masonry">
                <div className="flex flex-wrap mx-[-15px] xl:mx-[-20px] lg:mx-[-20px] md:mx-[-20px] mt-[-50px] xl:mt-[-80px] lg:mt-[-80px] md:mt-[-80px] isotope">
                  <div className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                    <figure className="!rounded-[.4rem] !mb-6">
                      <Image
                        className="!rounded-[.4rem]"
                        src="/assets/images/pd7.jpeg"
                        srcSet="/assets/images/pd7@2x.jpeg 2x"
                        alt="image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        href="/assets/images/pd7-full.jpeg"
                        data-glightbox
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']"></i>
                      </a>
                    </figure>
                    <div className="project-details flex justify-center flex-col">
                      <div className="post-header">
                        <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            href="./single-project.html"
                            className="text-[#343f52] hover:text-[#3f78e0]"
                          >
                            Cras Fermentum Sem
                          </a>
                        </h2>
                        <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
                          Stationary
                        </div>
                      </div>
                      {/*post-header  */}
                    </div>
                    {/*project-details  */}
                  </div>
                  {/*item  */}
                  <div className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                    <figure className="!rounded-[.4rem] !mb-6">
                      <Image
                        className="!rounded-[.4rem]"
                        src="/assets/images/pd8.jpeg"
                        srcSet="/assets/images/pd8@2x.jpeg 2x"
                        alt="image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        href="/assets/images/pd8-full.jpeg"
                        data-glightbox
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']"></i>
                      </a>
                    </figure>
                    <div className="project-details flex justify-center flex-col">
                      <div className="post-header">
                        <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            href="./single-project2.html"
                            className="text-[#343f52] hover:text-[#3f78e0]"
                          >
                            Mollis Ipsum Mattis
                          </a>
                        </h2>
                        <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
                          Magazine, Book
                        </div>
                      </div>
                      {/*post-header  */}
                    </div>
                    {/*project-details  */}
                  </div>
                  {/*item  */}
                  <div className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                    <figure className="!rounded-[.4rem] !mb-6">
                      <Image
                        className="!rounded-[.4rem]"
                        src="/assets/images/pd9.jpeg"
                        srcSet="/assets/images/pd9@2x.jpeg 2x"
                        alt="image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        href="/assets/images/pd9-full.jpeg"
                        data-glightbox
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']"></i>
                      </a>
                    </figure>
                    <div className="project-details flex justify-center flex-col">
                      <div className="post-header">
                        <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            href="./single-project3.html"
                            className="text-[#343f52] hover:text-[#3f78e0]"
                          >
                            Ipsum Ultricies Cursus
                          </a>
                        </h2>
                        <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
                          Packaging
                        </div>
                      </div>
                      {/*post-header  */}
                    </div>
                    {/*project-details  */}
                  </div>
                  {/*item  */}
                  <div className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                    <figure className="!rounded-[.4rem] !mb-6">
                      <Image
                        className="!rounded-[.4rem]"
                        src="/assets/images/pd10.jpeg"
                        srcSet="/assets/images/pd10@2x.jpeg 2x"
                        alt="image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        href="/assets/images/pd10-full.jpeg"
                        data-glightbox
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']"></i>
                      </a>
                    </figure>
                    <div className="project-details flex justify-center flex-col">
                      <div className="post-header">
                        <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            href="./single-project.html"
                            className="text-[#343f52] hover:text-[#3f78e0]"
                          >
                            Inceptos Euismod Egestas
                          </a>
                        </h2>
                        <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
                          Stationary, Branding
                        </div>
                      </div>
                      {/*post-header  */}
                    </div>
                    {/*project-details  */}
                  </div>
                  {/*item  */}
                  <div className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                    <figure className="!rounded-[.4rem] !mb-6">
                      <Image
                        className="!rounded-[.4rem]"
                        src="/assets/images/pd11.jpeg"
                        srcSet="/assets/images/pd11@2x.jpeg 2x"
                        alt="image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        href="/assets/images/pd11-full.jpeg"
                        data-glightbox
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']"></i>
                      </a>
                    </figure>
                    <div className="project-details flex justify-center flex-col">
                      <div className="post-header">
                        <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            href="./single-project2.html"
                            className="text-[#343f52] hover:text-[#3f78e0]"
                          >
                            Ipsum Mollis Vulputate
                          </a>
                        </h2>
                        <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
                          Packaging
                        </div>
                      </div>
                      {/*post-header  */}
                    </div>
                    {/*project-details  */}
                  </div>
                  {/*item  */}
                  <div className="project item group md:w-6/12 lg:w-6/12 xl:w-4/12 w-full flex-[0_0_auto] xl:px-[20px] lg:px-[20px] md:px-[20px] px-[15px] mt-[50px] xl:mt-[80px] lg:mt-[80px] md:mt-[80px] max-w-full">
                    <figure className="!rounded-[.4rem] !mb-6">
                      <Image
                        className="!rounded-[.4rem]"
                        src="/assets/images/pd12.jpeg"
                        srcSet="/assets/images/pd12@2x.jpeg 2x"
                        alt="image"
                        width={1920}
                        height={1080}
                        layout="responsive"
                      />
                      <a
                        className="item-link absolute w-[2.2rem] h-[2.2rem] leading-[2.2rem] z-[1] transition-all duration-[0.3s] ease-in-out opacity-0 text-[#343f52] shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.02)] text-[1rem] flex items-center justify-center rounded-[100%] right-0 bottom-4 bg-[rgba(255,255,255,.7)] hover:bg-[rgba(255,255,255,.9)] hover:!text-[#343f52] group-hover:opacity-100 group-hover:right-[1rem]"
                        href="/assets/images/pd12-full.jpeg"
                        data-glightbox
                        data-gallery="projects-group"
                      >
                        <i className="uil uil-focus-add before:content-['\eb22']"></i>
                      </a>
                    </figure>
                    <div className="project-details flex justify-center flex-col">
                      <div className="post-header">
                        <h2 className="post-title h3 !text-[1.1rem] !leading-[1.4]">
                          <a
                            href="./single-project3.html"
                            className="text-[#343f52] hover:text-[#3f78e0]"
                          >
                            Porta Ornare Cras
                          </a>
                        </h2>
                        <div className="uppercase tracking-[0.02rem] text-[0.7rem] font-bold mb-[0.4rem] text-[#9499a3]">
                          Branding
                        </div>
                      </div>
                      {/*post-header  */}
                    </div>
                    {/*project-details  */}
                  </div>
                  {/*item  */}
                </div>
                {/*row  */}
              </div>
              {/*grid  */}
              <div className="text-center mt-10">
                <a
                  href="#"
                  className="btn btn-lg btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !rounded-[50rem] hover:translate-y-[-0.15rem] hover:shadow-[0_0.25rem_0.75rem_rgba(30,34,40,0.15)]"
                >
                  Start a Project
                </a>
              </div>
            </div>
            {/*container  */}
          </section>
          {/*/section  */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container py-[5rem] xl:!py-[7rem] lg:!py-[7rem] md:!py-[7rem]">
              <div className="flex flex-wrap mx-[-15px] xl:mx-[-35px] lg:mx-[-20px] mt-[-50px] xl:mt-0 lg:mt-0">
                <div className="xl:w-4/12 lg:w-4/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px] xl:mt-2 lg:mt-2">
                  <h2 className="text-[0.8rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                    Our Clients
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold mb-3 xxl:pr-5">
                    Trusted by over 300+ clients
                  </h3>
                  <p className="lead !text-[1.1rem] !leading-[1.55] font-medium !mb-0 xxl:pr-5">
                    We bring solutions to make life easier for our customers.
                  </p>
                </div>
                {/*/column  */}
                <div className="xl:w-8/12 lg:w-8/12 w-full flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[50px] xl:mt-0 lg:mt-0">
                  <div className="flex flex-wrap mx-[-15px] md:mx-[-20px] xl:mx-[-35px] mt-[-70px]">
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z1.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z2.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z3.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z4.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z5.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z6.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z7.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                    <div className="xl:w-3/12 lg:w-3/12 md:w-3/12 w-6/12 flex-[0_0_auto] xl:px-[35px] lg:px-[20px] md:px-[20px] px-[15px] max-w-full mt-[70px]">
                      <figure className="px-3 xl:!px-0 lg:!px-0 md:!px-0 xxl:!px-2">
                        <Image
                          src="/assets/images/z8.png"
                          alt="image"
                          width={1920}
                          height={1080}
                          layout="responsive"
                        />
                      </figure>
                    </div>
                    {/*column  */}
                  </div>
                  {/*row  */}
                </div>
                {/*/column  */}
              </div>
              {/*row  */}
            </div>
            {/*container  */}
          </section>
          {/*/section  */}
          <section className="wrapper !bg-[#ffffff]">
            <div className="container pt-20 xl:pt-28 lg:pt-28 md:pt-28">
              <div className="flex flex-wrap mx-[-15px] xsm:mt-[-50px] mt-[-80px] md:mx-[-20px] lg:mx-[-20px] xl:mx-[-35px] items-center mb-20 xl:!mb-[7rem] lg:!mb-[7rem] md:!mb-[7rem]">
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xsm:mt-[50px] mt-[80px] md:px-[20px] lg:px-[20px] xl:px-[35px] max-w-full !relative">
                  <a
                    href="./assets/media/movie.mp4"
                    className="btn btn-circle btn-white btn-play ripple !mx-auto mb-5 !absolute xl:text-[2.3rem] text-[calc(1.355rem_+_1.26vw)] w-[3.5rem] h-[3.5rem] !inline-flex !items-center !justify-center !leading-none !p-0 !rounded-[100%] before:!bg-[#ffffff] after:!bg-[#ffffff] before:content-[''] before:block before:absolute before:opacity-80 before:animate-[ripple-1_2s_infinite_ease-in-out] before:z-[-1] before:rounded-[50%] before:inset-0 after:content-[''] after:block after:absolute after:z-[-1] after:rounded-[50%] after:inset-0 after:opacity-60 after:animate-[ripple-2_2s_infinite_ease-in-out] after:[animation-delay:0.5s] top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-3"
                    data-glightbox
                  >
                    <i className="icn-caret-right ml-[0.15rem] !relative z-[2] before:content-['\e900'] text-[calc(1.355rem_+_1.26vw)] text-[#262b32]"></i>
                  </a>
                  <figure className="!rounded-[.4rem] relative z-[2]">
                    <Image
                      className="!rounded-[.4rem]"
                      src="/assets/images/about12.jpeg"
                      srcSet="/assets/images/about12@2x.jpeg 2x"
                      alt="image"
                      width={1920}
                      height={1080}
                      layout="responsive"
                    />
                  </figure>
                </div>
                {/*column  */}
                <div className="xl:w-6/12 lg:w-6/12 w-full flex-[0_0_auto] px-[15px] xsm:mt-[50px] mt-[80px] md:px-[20px] lg:px-[20px] xl:px-[35px] max-w-full">
                  <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                    What Makes Us Different?
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold !mb-8">
                    We make spending stress free so you have the perfect
                    control.
                  </h3>
                  <div className="flex flex-wrap mx-[-15px] mt-[-30px]">
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <div className="flex flex-row">
                        <div>
                          <Image
                            src="/assets/images/lamp.svg"
                            className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem]  solid-mono text-[#e668b3] text-fuchsia !mr-4"
                            alt="image"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="!mb-1">Creativity</h4>
                          <p className="!mb-0">
                            Curabitur blandit lacus porttitor ridiculus mus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*column  */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <div className="flex flex-row">
                        <div>
                          <Image
                            src="/assets/images/bulb.svg"
                            className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem]  solid-mono text-[#a07cc5] text-violet !mr-4"
                            alt="image"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="!mb-1">Innovative Thinking</h4>
                          <p className="!mb-0">
                            Curabitur blandit lacus porttitor ridiculus mus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*column  */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <div className="flex flex-row">
                        <div>
                          <Image
                            src="/assets/images/puzzle.svg"
                            className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem]  solid-mono text-[#f78b77] text-orange !mr-4"
                            alt="image"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="!mb-1">Rapid Solutions</h4>
                          <p className="!mb-0">
                            Curabitur blandit lacus porttitor ridiculus mus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*column  */}
                    <div className="xl:w-6/12 lg:w-6/12 md:w-6/12 w-full flex-[0_0_auto] px-[15px] max-w-full mt-[30px]">
                      <div className="flex flex-row">
                        <div>
                          <Image
                            src="/assets/images/headphone.svg"
                            className="svg-inject icon-svg !w-[1.8rem] !h-[1.8rem]  solid-mono text-[#45c4a0] text-green !mr-4"
                            alt="image"
                            width={24}
                            height={24}
                          />
                        </div>
                        <div>
                          <h4 className="!mb-1">Top-Notch Support</h4>
                          <p className="!mb-0">
                            Curabitur blandit lacus porttitor ridiculus mus.
                          </p>
                        </div>
                      </div>
                    </div>
                    {/*column  */}
                  </div>
                  {/*row  */}
                </div>
                {/*column  */}
              </div>
              {/*row  */}
              <div className="flex flex-wrap mx-[-15px] !text-center mb-7">
                <div className="lg:w-11/12 xl:w-10/12 xxl:w-9/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <h2 className="text-[0.8rem] tracking-[0.02rem] uppercase text-[#aab0bc] !mb-3 !leading-[1.35]">
                    Join Our Community
                  </h2>
                  <h3 className="xl:text-[2.1rem] text-[calc(1.335rem_+_1.02vw)] !leading-[1.2] font-semibold lg:!px-14 xxl:!px-[4.5rem]">
                    We are trusted by over 5000+ clients. Join them now and grow
                    your business.
                  </h3>
                </div>
                {/*/column  */}
              </div>
              {/*row  */}
              <div className="flex flex-wrap mx-[-15px] !mb-6">
                <div className="md:w-10/12 lg:w-9/12 xl:w-7/12 w-full flex-[0_0_auto] px-[15px] max-w-full !mx-auto">
                  <div className="flex flex-wrap mx-[-15px] items-center counter-wrapper mt-[-20px] xl:mt-0 lg:mt-0 md:mt-0">
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0">
                      <h3 className="counter counter-lg xl:text-[2.2rem] text-[calc(1.35rem_+_1.2vw)] !leading-none tracking-[normal] mb-2  text-[#747ed1]">
                        1000+
                      </h3>
                      <p className="!font-medium !mb-0">Completed Projects</p>
                    </div>
                    {/*column  */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0">
                      <h3 className="counter counter-lg xl:text-[2.2rem] text-[calc(1.35rem_+_1.2vw)] !leading-none tracking-[normal] mb-2  text-[#747ed1]">
                        50K+
                      </h3>
                      <p className="!font-medium !mb-0">Happy Customers</p>
                    </div>
                    {/*column  */}
                    <div className="xl:w-4/12 lg:w-4/12 md:w-4/12 w-full flex-[0_0_auto] px-[15px] max-w-full !text-center mt-[20px] xl:mt-0 lg:mt-0 md:mt-0">
                      <h3 className="counter counter-lg xl:text-[2.2rem] text-[calc(1.35rem_+_1.2vw)] !leading-none tracking-[normal] mb-2  text-[#747ed1]">
                        4x
                      </h3>
                      <p className="!font-medium !mb-0">Revenue Growth</p>
                    </div>
                    {/*column  */}
                  </div>
                  {/*row  */}
                </div>
                {/*/column  */}
              </div>
              {/*row  */}
              <figure className="m-0 p-0">
                <Image
                  className="w-full max-w-full !h-auto"
                  src="/assets/images/about26.png"
                  srcSet="/assets/images/about26@2x.png 2x"
                  alt="image"
                  width={1920}
                  height={1080}
                  layout="responsive"
                />
              </figure>
            </div>
            {/*container  */}
          </section>
          {/*/section  */}
        </div>
        {/*content-wrapper  */}
        <footer className=" bg-[#21262c] opacity-100  text-[#cacaca]">
          <div className="container py-16 xl:!py-20 lg:!py-20 md:!py-20">
            <div className="flex flex-wrap mx-[-15px] mt-[-30px] xl:mt-0 lg:mt-0">
              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <Image
                    className="!mb-4"
                    src="/assets/images/logo-light.png"
                    srcSet="/assets/images/logo-light@2x.png 2x"
                    alt="image"
                    width={1920}
                    height={1080}
                    layout="responsive"
                  />
                  <p className="!mb-4">
                    © 2024 Sandbox.{" "}
                    <br className="hidden xl:block lg:block text-[#cacaca]" />
                    All rights reserved.
                  </p>
                  <nav className="nav social social-white">
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
                  {/*social  */}
                </div>
                {/*widget  */}
              </div>
              {/*/column  */}
              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3">
                    Get in Touch
                  </h4>
                  <address className="xl:pr-20 xxl:!pr-28 not-italic leading-[inherit] block mb-4">
                    Moonshine St. 14/05 Light City, London, United Kingdom
                  </address>
                  <a
                    className="text-[#cacaca] hover:text-[#747ed1]"
                    href="mailto:first.last@email.com"
                  >
                    info@email.com
                  </a>
                  <br /> 00 (123) 456 78 90
                </div>
                {/*widget  */}
              </div>
              {/*/column  */}
              <div className="md:w-4/12 xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3">Learn More</h4>
                  <ul className="pl-0 list-none   !mb-0">
                    <li>
                      <a
                        className="text-[#cacaca] hover:text-[#747ed1]"
                        href="#"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#747ed1]"
                        href="#"
                      >
                        Our Story
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#747ed1]"
                        href="#"
                      >
                        Projects
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#747ed1]"
                        href="#"
                      >
                        Terms of Use
                      </a>
                    </li>
                    <li className="mt-[0.35rem]">
                      <a
                        className="text-[#cacaca] hover:text-[#747ed1]"
                        href="#"
                      >
                        Privacy Policy
                      </a>
                    </li>
                  </ul>
                </div>
                {/*widget  */}
              </div>
              {/*/column  */}
              <div className="md:w-full xl:w-3/12 lg:w-3/12 w-full flex-[0_0_auto] px-[15px] max-w-full xl:mt-0 lg:mt-0 mt-[30px]">
                <div className="widget text-[#cacaca]">
                  <h4 className="widget-title text-white !mb-3">
                    Our Newsletter
                  </h4>
                  <p className="!mb-5">
                    Subscribe to our newsletter to get our news & deals
                    delivered to you.
                  </p>
                  <div className="newsletter-wrapper">
                    {/*Begin Mailchimp Signup Form  */}
                    <div id="mc_embed_signup2">
                      <form
                        action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a"
                        method="post"
                        id="mc-embedded-subscribe-form2"
                        name="mc-embedded-subscribe-form"
                        className="validate dark-fields"
                        target="_blank"
                        novalidate
                      >
                        <div id="mc_embed_signup_scroll2">
                          <div className="!text-left input-group form-floating !relative flex flex-wrap items-stretch w-full">
                            <input
                              type="email"
                              value=""
                              name="EMAIL"
                              className="required email form-control block w-full text-[12px] font-medium leading-[1.7] appearance-none bg-clip-padding shadow-[0_0_1.25rem_rgba(30,34,40,0.04)] px-4 py-[0.6rem] rounded-[0.4rem] motion-reduce:transition-none focus:text-[#60697b] focus:bg-[rgba(255,255,255,.03)] focus:shadow-[0_0_1.25rem_rgba(30,34,40,0.04),unset] disabled:bg-[#aab0bc] disabled:opacity-100 file:mt-[-0.6rem] file:mr-[-1rem] file:mb-[-0.6rem] file:ml-[-1rem] file:text-[#60697b] file:bg-[#fefefe] file:pointer-events-none file:transition-all file:duration-[0.2s] file:ease-in-out file:px-4 file:py-[0.6rem] file:rounded-none motion-reduce:file:transition-none placeholder:text-[#959ca9] placeholder:opacity-100 border border-solid !border-[rgba(255,255,255,0.1)] text-[#cacaca] focus:!border-[rgba(63,120,224,0.5)] bg-[rgba(255,255,255,.03)] focus-visible:!border-[rgba(63,120,224,0.5)] focus-visible:!outline-0"
                              placeholder="Email Address"
                              id="mce-EMAIL2"
                            />
                            <label
                              className="!ml-[0.05rem] text-[#959ca9] text-[.75rem] absolute z-[2] h-full overflow-hidden text-start text-ellipsis whitespace-nowrap pointer-events-none origin-[0_0] px-4 py-[0.6rem] left-0 top-0"
                              for="mce-EMAIL2"
                            >
                              Email Address
                            </label>
                            <input
                              type="submit"
                              value="Join"
                              name="subscribe"
                              id="mc-embedded-subscribe2"
                              className="btn btn-purple text-white !bg-[#747ed1] border-[#747ed1] hover:text-white hover:bg-[#747ed1] hover:border-[#747ed1] focus:shadow-[rgba(92,140,229,1)] active:text-white active:bg-[#747ed1] active:border-[#747ed1] disabled:text-white disabled:bg-[#747ed1] disabled:border-[#747ed1] !relative z-[2] focus:z-[5] hover:!transform-none border-0"
                            />
                          </div>
                          <div id="mce-responses2" className="clear">
                            <div
                              className="response hidden"
                              id="mce-error-response2"
                            ></div>
                            <div
                              className="response hidden"
                              id="mce-success-response2"
                            ></div>
                          </div>{" "}
                          {/*real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
                          <div
                            aria-hidden="true"
                            className="absolute left-[-5000px]"
                          >
                            <input
                              type="text"
                              name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc"
                              tabIndex="-1"
                              value=""
                            />
                          </div>
                          <div className="clear"></div>
                        </div>
                      </form>
                    </div>
                    {/*End mc_embed_signup */}
                  </div>
                  {/*newsletter-wrapper  */}
                </div>
                {/*widget  */}
              </div>
              {/*/column  */}
            </div>
            {/*row  */}
          </div>
          {/*container  */}
        </footer>
      </div>
      {/*progress wrapper  */}
      <div className="progress-wrap fixed w-[2.3rem] h-[2.3rem] cursor-pointer block shadow-[inset_0_0_0_0.1rem_rgba(128,130,134,0.25)] z-[1010] opacity-0 invisible translate-y-3 transition-all duration-[0.2s] ease-[linear,margin-right] delay-[0s] rounded-[100%] right-6 bottom-6 motion-reduce:transition-none after:absolute after:content-['\e951'] after:text-center after:leading-[2.3rem] after:text-[1.2rem] after:text-[#605dba] after:h-[2.3rem] after:w-[2.3rem] after:cursor-pointer after:block after:z-[1] after:transition-all after:duration-[0.2s] after:ease-linear after:left-0 after:top-0 motion-reduce:after:transition-none after:font-Unicons">
        <svg
          className="progress-circle svg-content"
          width="100%"
          height="100%"
          viewBox="-1 -1 102 102"
        >
          <path
            className="fill-none stroke-[#605dba] stroke-[4] box-border transition-all duration-[0.2s] ease-linear motion-reduce:transition-none"
            d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"
          />
        </svg>
      </div>
    </section>
  );
}
