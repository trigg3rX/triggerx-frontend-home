"use client";
import React from "react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import chain from "../app/assets/chain.svg";
import architect from "../app/assets/architect.svg";
import architect2 from "../app/assets/architect2.svg";
import secure from "../app/assets/secure.svg";
import job from "../app/assets/job.svg";
import power from "../app/assets/power.svg";
import bls from "../app/assets/bls.svg";
import insights from "../app/assets/insights.svg";
import choose from "../app/assets/chooseTrigger.svg";
import usecase from "../app/assets/usecase.svg";
import honesty from "../app/assets/honesty.svg";
import security from "../app/assets/security.svg";
import validation from "../app/assets/validation.svg";
import why from "../app/assets/why.svg";
import superchain from "../app/assets/superchain.svg";
import scale from "../app/assets/scale.svg";
import track from "../app/assets/track.svg";
import Minsights from "../app/assets/M-insights.svg";
import MEigen from "../app/assets/M-Eigen.svg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Main from "../components/Main";
import Boxdata from "../components/Boxdata";
import Header from "./Header";
import Footer from "@/pages/Footer";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const nextGenRef = useRef();
  const section2Ref = useRef();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // Initial animation
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(nextGenRef.current, { opacity: 1, yPercent: -0 });
      },
    });

    tl.to(nextGenRef.current, {
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Reset scroll position when component mounts
    if (section2Ref.current) {
      section2Ref.current.scrollLeft = 0;
    }

    // Handle page scroll completion
    const handleScroll = () => {
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (!isScrolling.current) {
        isScrolling.current = true;
      }

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        // Reset horizontal scroll when page scroll stops
        if (section2Ref.current) {
          section2Ref.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }, 150); // Adjust timeout as needed
    };

    window.addEventListener("scroll", handleScroll);
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  useEffect(() => {
    const container = section2Ref.current;

    const handleScroll = (event) => {
      if (!container) return; // Check if the container is available

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft < maxScrollLeft) {
        // Prevent default vertical scroll behavior
        event.preventDefault();
        // Manually scroll horizontally
        container.scrollLeft += event.deltaY; // deltaY is the vertical scroll amount
      }
    };

    // Add the wheel event listener to the container
    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    // Clean up the event listener on component unmount
    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <>
      <div className="relative z-0">
        <Header />
        <div ref={nextGenRef} className="relative -z-10">
          <section className="lg:my-40 md:my-40 my-20 sm:my-20 ">
            <div
              className=" w-[90%] mx-auto  mt-[11rem]  font-Grotest15 "
              id="target-section"
            >
              <h1 className=" text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl leading-[3rem] lg:leading-0 md:leading-12 sm:leading-15">
                Effortless Blockchain
              </h1>
              <h1 className="text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:mt-3 md:mt-3 sm:mt-0 mt-0 leading-[3rem] lg:leading-0 md:leading-0 sm:leading-15">
                Automation
              </h1>
              <h1 className=" text-center text-4xl sm:text-5xl md:text-5xl lg:text-7xl lg:mt-3 md:mt-3 sm:mt-0 mt-0 leading-[3rem] lg:leading-0 md:leading-0 sm:leading-15">
                .Limitless Potential.
              </h1>
            </div>

            <div className=" w-[50rem] mx-auto mt-10 mb-3">
              <div className="relative ">
                <h4 className="text-[#A2A2A2]  font-actayRegular text-center lg:text-lg md:text-lg text-md sm:text-md lg:leading-[2rem] md:leading-[2rem] sm:lg:leading-[1.5rem] leading-[1.5rem] py-5 px-9 tracking-wide font-normal">
                  Powered by Eigenlayer. Built with ♥️ for the Superchain.
                </h4>

                {/* Decorative Elements */}
                <div className="absolute inset-0 border-2 border-[#0a0a0a]">
                  {/* Top Left Corner */}
                  <div className="absolute top-0 left-20 w-5 h-5 border-t-2 border-l-2 border-[#C07AF6] rounded-tl-md"></div>
                  {/* Bottom Right Corner */}
                  <div className="absolute bottom-0 right-20 w-5 h-5 border-b-2 border-r-2 border-[#C07AF6] rounded-br-md"></div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-3 rounded-full group transition-transform">
                <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                  {/* This is the red background box */}
                </span>
                <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                <span className=" font-actayRegular  relative z-10 lg:px-2 md:px-6 sm:px-3 px-3 py-3 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  Dev Hub
                </span>
              </button>
              <button className="relative bg-[#222222] text-black border border-white px-6 py-3 rounded-full group transition-transform">
                <span className="absolute inset-0 bg-[#222222] border border-white rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                  {/* This is the red background box */}
                </span>
                <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0">
                  {/* This is the white box that moves up */}
                </span>
                <span className=" font-actayRegular  relative z-10 lg:px-2 md:px-6 sm:px-3 px-3 py-3 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                  Let’s Talk
                </span>
              </button>
            </div>
          </section>
          <section
            ref={section2Ref}
            className="flex justify-between items-center gap-10 w-full overflow-hidden mx-auto lg:mt-40 md:mt-40 mt-20 sm:mt-20 flex-row "
          >
            <div className="flex flex-col items-center ml-20 gap-10">
              <h2 className=" font-Grotest15 text-white lg:text-8xl font-normal md:text-5xl  sm:text-4xl text-4xl w-[100%] text-start">
                <div>Why </div>
                <div>TriggerX?</div>
              </h2>

              <div>
                <Image src={why} alt={""} />
              </div>
            </div>
            <div
              className=" w-[50rem]" // Important:  This container needs to hide overflow
            >
              <div className="flex w-max transition-transform duration-300 ease-linear">
                {Boxdata.map((box, index) => (
                  <div
                    key={index}
                    style={{
                      boxShadow: "inset 0px 0px 7.91px 0px #656565",
                    }}
                    className="relative max-w-sm  rounded-[30px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] p-2 mr-4 last:mr-0"
                  >
                    <div className="relative z-0 h-48">
                      {" "}
                      {/* Set a fixed height for the image container */}
                      <Image
                        src={box.imageSrc}
                        alt={box.title}
                        className="object-cover rounded-[30px]"
                        fill
                        style={{ objectFit: "fill" }}
                      />
                    </div>
                    <div className="relative z-10 space-y-6 p-3">
                      <h2 className=" font-actayWide text-5xl  text-white font-bold ">
                        <b>{box.title}</b>
                      </h2>
                      <p className="text-gray-300 text-sm font-actayRegular">
                        {box.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className=" lg:mx-[50px] md:mx-[50px] sm:mx-[30px] mx-[30px] lg:my-40 md:my-40 my-20 sm:my-20 ">
            <div className="bg-white rounded-3xl  shadow-lg text-black">
              <div className=" flex items-start relative flex-col p-16">
                <div className="flex items-start justify-between flex-col  w-[90%]">
                  <div className="relative lg:p-0 md:p-0 sm:p-0 p-0 z-10 text-start">
                    <h1 className=" font-Grotest15 lg:text-6xl md:text-5xl sm:text-2xl text-2xl text-start relative  pb-14 ">
                      What
                      <span className="relative text-[#5047FF] py-2 px-4 ml-3 lg:text-6xl md:text-5xl sm:text-2xl text-2xl ">
                        TriggerX {/* Decorative Elements */}
                        <div className="absolute inset-0 border-2 border-transparent pointer-events-none  rounded-xl">
                          {/* Top Left Corner */}
                          <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#5047FF] rounded-tl-md"></div>
                          {/* Bottom Right Corner */}
                          <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#5047FF] rounded-br-md"></div>
                        </div>
                      </span>
                      Offers
                    </h1>
                  </div>
                  <Image
                    src={choose}
                    alt={""}
                    className="sm:w-[100px] w-[100px] lg:w-[20%] md:w-[10%] absolute right-0"
                  />
                </div>
                <div className="flex flex-col w-3/4 gap-20">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8   px-0 ">
                    {/* First Item */}
                    <div className="space-y-4">
                      <h2 className="font-actayWide text-4xl px-2 extra-bold">
                        <b>Comprehensive Automation</b>
                      </h2>

                      <h4 className="font-actayRegular text-[#1F1F1F] leading-relaxed px-2 text-lg">
                        <b className="font-actayWide">Time-Based Automation:</b>{" "}
                        Schedule tasks at any interval or timestamp.
                      </h4>
                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg font-actayRegular">
                        <b className="font-actayWide">
                          Event-Based Automation:
                        </b>{" "}
                        Trigger actions based on on-chain events.
                      </h4>
                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg font-actayRegular">
                        <b className="font-actayWide">
                          Condition-Based Automation:
                        </b>{" "}
                        Automate responses when conditions are met.
                      </h4>
                    </div>

                    {/* Second Item */}
                    <div className="space-y-4">
                      <h2 className="text-4xl px-2 extra-bold font-actayWide">
                        <b>Crypto-Economic Security</b>
                      </h2>

                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg font-actayRegular">
                        Relax, your automation tasks are in safe hands.
                        TriggerX's integration with EigenLayer and its
                        innovative AVS system ensures that keepers are
                        incentivized to act honestly, protecting you from any
                        malicious activity.{" "}
                      </h4>
                    </div>

                    {/* Third Item */}
                    <div className="space-y-4">
                      <h2 className="text-4xl px-2 extra-bold font-actayWide">
                        <b>Scale Across Chains</b>
                      </h2>

                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg font-actayRegular">
                        TriggerX's multi-chain architecture allows you to
                        seamlessly scale to new networks. Integrate with
                        emerging L2 chains and expand your automation
                        capabilities as the Web3 landscape evolves.{" "}
                      </h4>
                    </div>
                    {/* Forth Item */}
                    <div className="space-y-4">
                      <h2 className="text-4xl px-2 extra-bold font-actayWide">
                        <b>Power of the Decentralized Network</b>
                      </h2>

                      <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-lg font-actayRegular">
                        TriggerX taps into a network of independent keepers,
                        creating a robust and tamper-proof automation
                        infrastructure for your Web3 projects.{" "}
                      </h4>
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center">
                    <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-8 py-3 rounded-full group transition-transform">
                      <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                        {/* This is the red background box */}
                      </span>
                      <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                      <span className="font-actayRegular relative z-10 lg:px-2 md:px-6 sm:px-3 px-3 py-3 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Dev Hub
                      </span>
                    </button>
                    <button className="relative bg-[#222222] text-black border border-black px-8 py-3 rounded-full group transition-transform">
                      <span className="absolute inset-0 bg-[#222222] border border-black rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2">
                        {/* This is the red background box */}
                      </span>
                      <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0">
                        {/* This is the white box that moves up */}
                      </span>
                      <span className="font-actayRegular relative z-10 lg:px-2 md:px-6 sm:px-3 px-3 py-3 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out">
                        Let’s Talk
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className=" w-full mx-auto lg:my-40 md:my-40 my-20 sm:my-20  flex justify-evenly">
            <div className="flex flex-col items-start w-1/4 ">
              <Image src={usecase} alt="" />
              <h1 className="font-Grotest15 text-6xl  text-white  text-start ">
                Who is
              </h1>
              <h1 className="font-Grotest15 text-6xl  text-white  text-start ">
                TriggerX For?
              </h1>
              <div className="font-actayRegular">
                <h4 className="text-lg md:text-md text-[#A2A2A2] text-start mt-12">
                  Whether you're a dApp developer, DeFi protocol creator, or
                  enterprise innovator, TriggerX empowers you to automate tasks
                  with ease and confidence.
                </h4>
              </div>
            </div>

            <div>
              <div className="lg:mt-20 md:mt-20 mt-20 sm:mt-20 font-actayWide">
                <h4 className="text-[#FBF197] text-4xl text-left mb-7">
                  <b>Use cases include</b>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-1 max-w-6xl mx-auto ">
                  <div className="relative flex items-center gap-3 p-6 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                    <div className="flex items-center gap-8 ">
                      <Image src={honesty} alt={""} width={30} />
                      <h3 className="text-xl">Automated API calls</h3>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-3 p-6 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                    <div className="flex items-center gap-8 ">
                      <Image src={validation} alt={""} width={30} />
                      <h3 className="text-xl">Governance actions</h3>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-3 p-6 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                    <div className="flex items-center gap-8 ">
                      <Image src={security} alt={""} width={30} />
                      <h3 className="text-xl">Liquidity management</h3>
                    </div>
                  </div>

                  <div className="relative flex items-center gap-3 p-6 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                    <div className="flex items-center gap-8 ">
                      <Image src={honesty} alt={""} width={30} />
                      <h3 className="text-xl">Token burns or mints</h3>
                    </div>
                  </div>
                  <div className="relative flex items-center gap-3 p-6 rounded-xl">
                    <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                    <div className="flex items-center gap-8 ">
                      <Image src={honesty} alt={""} width={30} />
                      <h3 className="text-xl">User notifications and more !</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className=" w-[90%] mx-auto lg:my-40 md:my-40 my-20 sm:my-20 ">
            {/* Get Started Section */}
            <div className="max-w-5xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl text-white  pb-2 text-center font-Grotest15">
                Get Started Today
              </h1>

              <div className="lg:mt-20 md:mt-20 mt-20 sm:mt-20">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6  ">
                  <div className="bg-[#141414] rounded-2xl border border-white/10  sm:flex flex items-center lg:block md:block">
                    <div className="p-6 max-w-[15rem]">
                      <h3 className="text-4xl mb-3 text-start font-actayWide">
                        <b>Speak to Us</b>
                      </h3>
                      <h4 className=" text-md text-start tracking-wider text-[#82FBD0] py-5 font-actayRegular">
                        <a href="hello@triggerx.network" target="_blank">
                          hello@triggerx.network
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#141414] rounded-2xl border border-white/10  sm:flex flex items-center lg:block md:block">
                    <div className="p-6 max-w-[15rem]">
                      <h3 className="text-4xl mb-3 text-start font-actayWide">
                        <b>Dev Hub</b>
                      </h3>
                      <h4 className=" text-md text-start tracking-wider text-[#82FBD0] py-5 font-actayRegular">
                        <a href="hello@triggerx.network" target="_blank">
                          Connect
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="bg-[#141414] rounded-2xl border border-white/10  sm:flex flex items-center lg:block md:block">
                    <div className="p-6 max-w-[15rem]">
                      <h3 className="text-4xl mb-3 text-start font-actayWide">
                        <b>Follow us on X</b>
                      </h3>
                      <h4 className=" text-md text-start tracking-wider text-[#82FBD0] py-5 font-actayRegular">
                        <a href="hello@triggerx.network" target="_blank">
                          Discover
                        </a>
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
