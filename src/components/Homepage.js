"use client";
import { useRef, useEffect, React } from "react";
import Image from "next/image";
import choose from "../app/assets/chooseTrigger.svg";
import honesty from "../app/assets/honesty.svg";
import security from "../app/assets/security.svg";
import validation from "../app/assets/validation.svg";
import why from "../app/assets/why.svg";

import usecase from "../app/assets/usecase svg/usecase.svg";

import speak from "@/app/assets/get started svgs/speak.svg";
import follow from "@/app/assets/get started svgs/follow.svg";
import dev from "@/app/assets/get started svgs/dev.svg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Boxdata from "./Boxdata";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const nextGenRef = useRef();
  const section2Ref = useRef();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const componentRef = useRef(null);
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   // Register ScrollTrigger plugin
  //   gsap.registerPlugin(ScrollTrigger);

  //   const slider = sliderRef.current;
  //   const section = componentRef.current;

  //   let tl = gsap.timeline({
  //     defaults: {
  //       ease: "none",
  //     },
  //     scrollTrigger: {
  //       trigger: section,
  //       // start: () => "top 100",
  //       start: "bottom bottom-=10", // Start when bottom of section is 10px from viewport bottom

  //       end: () => `+=${slider.scrollWidth - window.innerWidth}`,
  //       pin: true,
  //       pinSpacing: true,
  //       scrub: 1,
  //       invalidateOnRefresh: true,
  //       anticipatePin: 1,
  //       markers: true,
  //     },
  //   });

  //   // Animate the slider horizontally
  //   tl.to(slider, {
  //     x: () => -(slider.scrollWidth - window.innerWidth),
  //     ease: "none",
  //   });

  //   // Handle resize events
  //   const handleResize = () => {
  //     ScrollTrigger.refresh();
  //   };

  //   window.addEventListener("resize", handleResize);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //     tl.kill();
  //     ScrollTrigger.getAll().forEach((st) => st.kill());
  //   };
  // }, []);

  useEffect(() => {
    // Only initialize ScrollTrigger for screens >= 768px
    if (window.innerWidth >= 768) {
      // Register ScrollTrigger plugin
      gsap.registerPlugin(ScrollTrigger);
  
      const slider = sliderRef.current;
      const section = componentRef.current;
  
      let tl = gsap.timeline({
        defaults: {
          ease: "none",
        },
        scrollTrigger: {
          trigger: section,
          start: "bottom bottom-=10",
          end: () => `+=${slider.scrollWidth - window.innerWidth}`,
          pin: true,
          pinSpacing: true,
          scrub: 1,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          // markers: true,
        },
      });
  
      // Animate the slider horizontally
      tl.to(slider, {
        x: () => -(slider.scrollWidth - window.innerWidth),
        ease: "none",
      });
  
      // Handle resize events
      const handleResize = () => {
        // Kill the animation if screen becomes smaller than 768px
        if (window.innerWidth < 768) {
          tl.kill();
          ScrollTrigger.getAll().forEach((st) => st.kill());
          // Reset any transformations
          gsap.set(slider, { x: 0 });
        } else {
          ScrollTrigger.refresh();
        }
      };
  
      window.addEventListener("resize", handleResize);
  
      // Cleanup
      return () => {
        window.removeEventListener("resize", handleResize);
        tl.kill();
        ScrollTrigger.getAll().forEach((st) => st.kill());
      };
    }
  }, []);

  // useEffect(() => {
  //   // Initial animation
  //   const tl = gsap.timeline({
  //     onComplete: () => {
  //       gsap.set(nextGenRef.current, { opacity: 1, yPercent: -0 });
  //     },
  //   });

  //   tl.to(nextGenRef.current, {
  //     opacity: 1,
  //     duration: 1,
  //     ease: "power2.out",
  //   });

  //   // Reset scroll position to again at left 0 when component mounts
  //   if (section2Ref.current) {
  //     section2Ref.current.scrollLeft = 0;
  //   }

  //   // Handle page scroll completion
  //   const handleScroll = () => {
  //     if (!section2Ref.current) return;

  //     if (scrollTimeout.current) {
  //       clearTimeout(scrollTimeout.current);
  //     }

  //     if (!isScrolling.current) {
  //       isScrolling.current = true;
  //     }

  //     scrollTimeout.current = setTimeout(() => {
  //       isScrolling.current = false;

  //       // Get section's position and dimensions
  //       const rect = section2Ref.current.getBoundingClientRect();
  //       const isCompletelyOutOfView = rect.bottom <= 500;

  //       // Only reset scroll when section is completely out of viewport
  //       if (isCompletelyOutOfView) {
  //         section2Ref.current.scrollTo({
  //           left: 0,
  //           behavior: "smooth",
  //         });
  //       }
  //     }, 150);
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);

  //     ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
  //   };
  // }, []);

  // useEffect(() => {
  //   const container = section2Ref.current;

  //   const handleScroll = (event) => {
  //     if (!container) return; // Check if the container is available

  //     const rect = container.getBoundingClientRect();
  //     const isAtTop = rect.top <= 200;

  //     // If section hasn't reached top of viewport, allow normal vertical scrolling
  //     if (!isAtTop) {
  //       return;
  //     }

  //     const maxScrollLeft = container.scrollWidth - container.clientWidth;

  //     if (container.scrollLeft === 0 && event.deltaY < 0) {
  //       // Allow default vertical scroll
  //       return;
  //     } else if (container.scrollLeft < maxScrollLeft) {
  //       // Prevent default vertical scroll behavior
  //       event.preventDefault();
  //       // Manually scroll horizontally
  //       container.scrollLeft += event.deltaY; // deltaY is the vertical scroll amount
  //     }
  //   };

  //   // Add the wheel event listener to the container
  //   if (container) {
  //     container.addEventListener("wheel", handleScroll);
  //   }

  //   // Clean up the event listener on component unmount
  //   return () => {
  //     if (container) {
  //       container.removeEventListener("wheel", handleScroll);
  //     }
  //   };
  // }, []);

  return (
    <>
      <div className="relative z-0">
        <Header />
        <div ref={nextGenRef} className="relative -z-10">
          <section className="my-20 xl:my-40 ">
            <div
              className="font-sharpGrotesk w-[90%] mx-auto mt-[100px] lg:mt-[11rem] text-center text-4xl sm:text-5xl md:text-5xl lg:text-[70px] leading-[80px]"
              id="target-section"
            >
              <h1 className=" text-center text-2xl sm:text-5xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] transform scale-y-[.8]">
                Effortless Blockchain
              </h1>
              <h1 className="text-center text-2xl sm:text-5xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] lg:mt-3 md:mt-3 sm:mt-0 mt-0 transform scale-y-[.8]">
                Automation
              </h1>
              <h1 className=" text-center text-2xl sm:text-5xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] lg:mt-3 md:mt-3 sm:mt-0 mt-0 transform scale-y-[.8]">
                <span className="text-[#82FBD0]">.</span>Limitless Potential
                <span className="text-[#82FBD0]">.</span>
              </h1>
            </div>

            <h4 className="relative text-[#A2A2A2] font-actayRegular text-center text-xs sm:text-base lg:text-lg py-3 sm:py-5 px-6 sm:px-16 lg:px-20 xl:px-36 tracking-wide leading-[2rem] font-normal w-fit mx-auto my-6 lg:my-10">
              Powered by Eigenlayer. Built with ♥️ for the Superchain.
              <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-[#5047FF] rounded-tl-md sm:rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-[#5047FF] rounded-br-md sm:rounded-br-xl"></div>
            </h4>

            <div className="flex gap-4 justify-center">
              <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                  Dev Hub
                </span>
              </button>
              <button className="relative bg-[#222222] text-black border border-black px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                <span className="absolute inset-0 bg-[#222222] border border-black rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                  Let's Talk
                </span>
              </button>
            </div>
          </section>

          {/* why */}
          <section
            ref={componentRef}
            className="relative w-full md:w-[98%] md:mx-auto md:overflow-hidden"
          >
            <div
              ref={sliderRef}
              className="flex flex-col md:flex-row items-center gap-10 md:gap-24"
              style={{
                willChange: "transform",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="flex flex-col items-center ml-0 md:ml-20 gap-10">
                <h2 className="font-sharpGrotesk text-white font-light text-4xl md:text-5xl 2xl:text-[80px] text-center md:text-start transform scale-y-[.8] leading-normal w-[70%] sm:w-[100%]">
                  Why TriggerX?
                </h2>

                <div className="w-full h-max hidden md:flex">
                  <Image src={why} alt={""} className="w-full h-auto" />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-4 min-w-max">
                {Boxdata.map((box, index) => (
                  <div
                    key={index}
                    style={{
                      boxShadow: "inset 0px 0px 7.91px 0px #656565",
                    }}
                    className="relative max-w-[290px] xs:max-w-[300px] 2xl:max-w-sm rounded-[20px] 2xl:rounded-[30px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] mr-0 p-2 md:mr-4 md:last:mr-20"
                  >
                    <div className="relative z-0 h-32 2xl:h-48 overflow-hidden">
                      {/* Set a fixed height for the image container */}
                      <Image
                        src={box.imageSrc}
                        alt={box.title}
                        className="object-bottom rounded-[14px] 2xl:rounded-[30px] w-full h-auto aspect-auto"
                        fill
                      />
                    </div>
                    <div className="relative z-10 space-y-4 p-6">
                      <h2 className="font-actayWide text-[17px] md:text-[2vw] lg:text-[1.5vw] text-white font-bold leading-snug">
                        <b>{box.title}</b>
                      </h2>
                      <p className="text-gray-300 text-xs md:text-sm 2xl:text-base font-actayRegular mb-6">
                        {box.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* offer */}
          <section className="mx-[10px] xs:mx-[30px] mt-[50px] mb-20 lg:mb-40">
            <div className="bg-white rounded-3xl shadow-lg text-black flex flex-col items-start justify-center relative overflow-hidden px-3 xs:px-7 py-10 sm:py-16 md:p-16 2xl:p-24">
              <div className="absolute right-0 top-[-20px] md:top-[-50px] lg:top-[-100px] w-[150px] md:w-[200px] lg:w-[300px] h-max">
                <Image src={choose} alt="image" className="w-full h-auto" />
              </div>

              <h1 className="font-sharpGrotesk text-2xl xs:text-[30px] sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl w-[40%] sm:w-full text-start mb-10 sm:mb-16 lg:mb-24 2xl:mb-32 mt-0 lg:mt-8 ml-6 xs:ml-3 sm:ml-0 leading-[3rem]">
                What{" "}
                <span className="relative text-[#5047FF] py-1 sm:py-2 px-4 sm:px-6 md:px-8 ml-[-20px] mx-0 sm:mx-3 md:mx-5 text-nowrap">
                  TriggerX
                  <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-[#5047FF] rounded-tl-md sm:rounded-tl-xl"></div>
                  <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-[#5047FF] rounded-br-md sm:rounded-br-xl"></div>
                </span>{" "}
                Offers
              </h1>

              <div className="flex flex-col gap-10 lg:gap-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20">
                  {/* First Item */}
                  <div className="space-y-4 xl:space-y-8">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-2 extra-bold text-nowrap">
                      <b>
                        Comprehensive
                        <br />
                        Automation
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-xl 2xl:text-2xl">
                      <b className="font-actayWide">Time-Based Automation:</b>{" "}
                      Schedule tasks at any interval or timestamp.
                    </h4>
                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-xl 2xl:text-2xl">
                      <b className="font-actayWide">Event-Based Automation:</b>{" "}
                      Trigger actions based on on-chain events.
                    </h4>
                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-xl 2xl:text-2xl">
                      <b className="font-actayWide">
                        Condition-Based Automation:
                      </b>{" "}
                      Automate responses when conditions are met.
                    </h4>
                  </div>

                  {/* Second Item */}
                  <div className="space-y-4 xl:space-y-8">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-2 extra-bold text-nowrap">
                      <b>
                        Crypto-Economic
                        <br />
                        Security
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-xl 2xl:text-2xl">
                      Relax, your automation tasks are in safe hands. TriggerX's
                      integration with EigenLayer and its innovative AVS system
                      ensures that keepers are incentivized to act honestly,
                      protecting you from any malicious activity.{" "}
                    </h4>
                  </div>

                  {/* Third Item */}
                  <div className="space-y-4 xl:space-y-8">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-2 extra-bold text-nowrap">
                      <b>
                        Scale Across
                        <br />
                        Chains
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-xl 2xl:text-2xl">
                      TriggerX's multi-chain architecture allows you to
                      seamlessly scale to new networks. Integrate with emerging
                      L2 chains and expand your automation capabilities as the
                      Web3 landscape evolves.{" "}
                    </h4>
                  </div>
                  {/* Forth Item */}
                  <div className="space-y-4 xl:space-y-8">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-5xl px-2 extra-bold text-nowrap">
                      <b>
                        Power of the
                        <br />
                        Decentralized Network
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-xl 2xl:text-2xl">
                      TriggerX taps into a network of independent keepers,
                      creating a robust and tamper-proof automation
                      infrastructure for your Web3 projects.{" "}
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                    <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                    <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                    <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                      Dev Hub
                    </span>
                  </button>
                  <button className="relative bg-[#222222] text-black border border-black px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                    <span className="absolute inset-0 bg-[#222222] border border-black rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                    <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                    <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                      Let's Talk
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* use cases */}
          <section className="w-[90%] h-auto mx-auto my-5 lg:my-20 flex justify-between items-center flex-col md:flex-row">
            <div className="flex flex-col items-start w-full md:w-1/2 p-4 sm:p-6 2xl:p-10">
              <div className="hidden md:inline-block w-[50%] h-max">
                <Image src={usecase} alt="usecase" className="w-full h-auto" />
              </div>
              <h1 className="font-sharpGrotesk text-3xl sm:text-4xl lg:text-[5vw] text-center md:text-start leading-normal 2xl:leading-[8rem] xl:mb-5 w-full md:w-auto">
                Who is
              </h1>
              <h1 className="font-sharpGrotesk text-3xl sm:text-4xl lg:text-[5vw] text-center md:text-start lg:leading-[6rem] 2xl:leading-[8rem] w-full md:w-auto">
                TriggerX For?
              </h1>
              <div className="font-actayRegular w-[95%]">
                <h4 className="text-xs xs:text-sm lg:text-[18px] 2xl:text-[25px] text-[#A2A2A2] text-center md:text-left mt-6 sm:mt-12 tracking-wider leading-normal lg:leading-[2.1rem] 2xl:leading-[2.5rem]">
                  Whether you're a dApp developer, DeFi protocol creator, or
                  enterprise innovator, TriggerX empowers you to automate tasks
                  with ease and confidence.
                </h4>
              </div>
            </div>

            <div className="font-actayWide w-full sm:w-[70%] md:w-1/2 h-full p-4 sm:p-10">
              <h4 className="text-[#FBF197] text-2xl sm:text-3xl lg:text-[4vw] text-center mb-5 sm:mb-9 lg:mb-14 xl:mb-16 2xl:mb-24 text-nowrap">
                <b>Use cases include</b>
              </h4>
              <div className="grid grid-cols-1 w-full">
                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[30px] 2xl:p-[44px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
                    <Image
                      src={honesty}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-10"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[25px] tracking-wide text-nowrap">
                      Automated API calls
                    </h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[30px] 2xl:p-[44px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
                    <Image
                      src={validation}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-10"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[25px] tracking-wide text-nowrap">
                      Governance actions
                    </h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[30px] 2xl:p-[44px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
                    <Image
                      src={security}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-10"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[25px] tracking-wide text-nowrap">
                      Liquidity management
                    </h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[30px] 2xl:p-[44px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
                    <Image
                      src={honesty}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-10"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[25px] tracking-wide text-nowrap">
                      Token burns or mints
                    </h3>
                  </div>
                </div>
                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[30px] 2xl:p-[44px]">
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full">
                    <Image
                      src={honesty}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-10"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[25px] tracking-wide text-nowrap">
                      User notifications and more !
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Get Started Section */}
          <section className="w-[90%] mx-auto mt-6 mb-32 sm:mb-20 md:mt-10 md:mb-40">
            <div className="w-full text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-8xl text-white pb-2 text-center font-sharpGrotesk">
                Get Started Today
              </h1>

              <div className="mt-10 md:mt-20">
                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto">
                  <div className="relative overflow-hidden bg-[#141414] rounded-3xl border border-white/10 flex items-center aspect-auto md:aspect-square">
                    <div className="block md:hidden absolute right-[-30%] xs:right-[-15%] top-[-35%]">
                      <Image src={speak} alt="side image"></Image>
                    </div>
                    <div className="p-6 lg:p-10 w-full">
                      <h3 className="text-[4vw] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[90px] xl:h-[120px] 2xl:h-[250px] text-wrap">
                        <b>Speak to Us</b>
                      </h3>
                      <h4 className="text-xs lg:text-base 2xl:text-[1.7vw] text-start tracking-wider text-[#82FBD0] hover:underline py-2 md:py-5 font-actayRegular">
                        <a href="hello@triggerx.network" target="_blank">
                          hello@triggerx.network
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[#141414] rounded-3xl border border-white/10 flex items-center aspect-auto md:aspect-square">
                    <div className="block md:hidden absolute right-[-30%] xs:right-[-15%] top-[-35%]">
                      <Image src={dev} alt="side image"></Image>
                    </div>
                    <div className="p-6 lg:p-10 w-full">
                      <h3 className="text-[4vw] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[90px] xl:h-[120px] 2xl:h-[250px] text-wrap">
                        <b>Dev Hub</b>
                      </h3>
                      <h4 className="text-xs lg:text-base 2xl:text-[1.7vw] text-start tracking-wider text-[#82FBD0] hover:underline py-2 md:py-5 font-actayRegular">
                        <a href="hello@triggerx.network" target="_blank">
                          Connect
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[#141414] rounded-3xl border border-white/10 flex items-center aspect-auto md:aspect-square">
                    <div className="block md:hidden absolute right-[-30%] xs:right-[-15%] top-[-35%]">
                      <Image src={follow} alt="side image"></Image>
                    </div>
                    <div className="p-6 lg:p-10 w-full">
                      <h3 className="text-[4vw] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[90px] xl:h-[120px] 2xl:h-[250px] text-wrap">
                        <b>Follow us on X</b>
                      </h3>
                      <h4 className="text-xs lg:text-base 2xl:text-[1.7vw] text-start tracking-wider text-[#82FBD0] hover:underline py-2 md:py-5 font-actayRegular">
                        <a href="https://x.com/TriggerXnetwork" target="_blank">
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
