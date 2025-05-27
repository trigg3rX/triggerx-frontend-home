"use client";
import { useRef, React, useEffect, useState } from "react";
import Image from "next/image";
import what from "../app/assets/what svgs/what.png";
import honesty from "../app/assets/honesty.svg";
import security from "../app/assets/security.svg";
import validation from "../app/assets/validation.svg";
import usecase from "../app/assets/usecase svg/usecase.png";
import speak from "@/app/assets/get started svgs/speak.png";
import follow from "@/app/assets/get started svgs/follow.png";
import dev from "@/app/assets/get started svgs/dev.png";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Boxdata from "./Boxdata";
import Why from "./Why";
import Link from "next/link";
import eigenlayer from "@/app/assets/HeaderHerosection svgs/Eigenlayer.svg";

gsap.registerPlugin(ScrollTrigger);
function Homepage() {
  const nextGenRef = useRef();
  const [isVisible, setIsVisible] = useState(true);
  const section2Ref = useRef();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    // Always scroll to the top of the page on component mount/refresh
    window.scrollTo(0, 0);

    // Set initial position below viewport
    gsap.set(nextGenRef.current, {
      position: "relative",
      top: "200vh",
      opacity: 0,
    });

    // Create a GSAP timeline for the initial animation
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(nextGenRef.current, {
          opacity: 1,
          yPercent: 0,
          position: "relative",
          top: 0,
        });
      },
    });

    // Animate the content up with the header
    tl.to(nextGenRef.current, {
      top: 0,
      opacity: 1,
      duration: 1,
      ease: "power2.out",
    });

    // Reset horizontal scroll position if the section exists
    if (section2Ref.current) {
      section2Ref.current.scrollLeft = 0;
    }

    // Define a scroll event handler for the page
    const handleScroll = () => {
      // Update visibility state
      setIsVisible(window.scrollY === 0);

      // Handle horizontal scroll reset
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      if (!isScrolling.current) {
        isScrolling.current = true;
      }

      scrollTimeout.current = setTimeout(() => {
        isScrolling.current = false;
        if (section2Ref.current) {
          section2Ref.current.scrollTo({
            left: 0,
            behavior: "smooth",
          });
        }
      }, 150);
    };

    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: remove scroll event listener and kill all GSAP ScrollTriggers
    return () => {
      window.removeEventListener("scroll", handleScroll);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []); // Empty dependency array since we only want this to run once on mount

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Get the container element for horizontal scroll
    const container = section2Ref.current;
    let isInScrollZone = false;

    // Function to check if the section is in the active scroll zone
    const checkScrollZone = () => {
      if (!container) return false;
      const rect = container.getBoundingClientRect();
      return rect.top <= 120 && rect.bottom > 0;
    };

    // Handle wheel events to hijack vertical scroll and turn it into horizontal scroll
    const handleWheel = (event) => {
      if (!container || !isInScrollZone) return;

      const maxScrollLeft = container.scrollWidth - container.clientWidth;

      if (container.scrollLeft < maxScrollLeft && event.deltaY > 0) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      } else if (container.scrollLeft > 0 && event.deltaY < 0) {
        event.preventDefault();
        container.scrollLeft += event.deltaY;
      }
    };

    // Global scroll handler to detect when section enters/exits the scroll zone
    const handleGlobalScroll = () => {
      isInScrollZone = checkScrollZone();
    };

    // Initial check to set isInScrollZone
    handleGlobalScroll();

    // Add event listeners
    window.addEventListener("scroll", handleGlobalScroll);
    window.addEventListener("wheel", handleWheel, { passive: false });

    // Cleanup: remove event listeners
    return () => {
      window.removeEventListener("scroll", handleGlobalScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []); // Empty dependency array since we only want this to run once on mount

  // Add this useEffect for initial client-side setup
  useEffect(() => {
    setIsVisible(window.scrollY === 0);
  }, []);

  // Update visibility effect
  useEffect(() => {
    // Define a handler to update visibility state on scroll
    const handleVisibility = () => {
      setIsVisible(window.scrollY === 0);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleVisibility);
    // Cleanup: remove scroll event listener
    return () => window.removeEventListener("scroll", handleVisibility);
  }, []);

  return (
    <>
      <div className="relative z-0 mx-auto">
        <div
          ref={nextGenRef}
          className="relative -z-10 mt-[10px] md:mt-[100px] lg:mt-[270px]"
        >
          <section className="mt-10 mb-20 sm:my-20 max-w-[1600px] mx-auto">
            <div
              className="font-sharpGrotesk w-[90%] mx-auto  lg:mt-[11rem] text-center text-4xl sm:text-5xl md:text-5xl lg:text-[70px] leading-[80px] "
              id="target-section"
            >
              <h1 className=" text-center text-4xl sm:text-4xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] transform scale-y-[.8] leading-normal">
                Effortless Blockchain
              </h1>
              <h1 className="text-center text-4xl sm:text-4xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] lg:mt-3 md:mt-3 sm:mt-0 mt-0 transform scale-y-[.8] leading-6">
                Automation
              </h1>
              <h1 className=" text-center text-4xl sm:text4xl md:text-5xl xl:text-[70px] 2xl:text-[4vw] lg:mt-3 md:mt-3 sm:mt-0 mt-0 transform scale-y-[.8] leading-normal">
                <span className="text-[#82FBD0]">.</span>Limitless Potential
                <span className="text-[#82FBD0]">.</span>
              </h1>
            </div>

            <h4 className="flex items-center gap-4 relative text-[#A2A2A2] font-actayRegular text-center text-xs sm:text-base lg:text-lg py-3 sm:py-5 px-6 sm:px-16 lg:px-20 xl:px-36 tracking-wide leading-[2rem] font-normal w-fit mx-auto my-6 md:my-10">
              Powered by{" "}
              <Image
                src={eigenlayer}
                alt="Eigenlayer"
                width={80}
                height={80}
                className="w-16 md:w-20 lg:w-22 h-auto"
              ></Image>
              <div className="absolute top-0 left-0 w-4 h-4 sm:w-5 sm:h-5 border-t-2 border-l-2 sm:border-t-4 sm:border-l-4 border-[#5047FF] rounded-tl-md sm:rounded-tl-xl"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 sm:w-5 sm:h-5 border-b-2 border-r-2 sm:border-b-4 sm:border-r-4 border-[#5047FF] rounded-br-md sm:rounded-br-xl"></div>
            </h4>

            <div className="flex gap-4 justify-center">
              <Link href="https://app.triggerx.network/" target="blank">
                <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                  <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                  <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                  <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                    Start Building
                  </span>
                </button>
              </Link>
              <button
                onClick={() => scrollToSection("contact-section")}
                className="relative bg-[#222222] text-black border border-black px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform"
              >
                <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                  Let&apos;s Talk
                </span>
              </button>
            </div>
          </section>
          <section className="md:my-[10rem] xs:my-[6rem]">
            <div className="w-full h-auto  mx-auto">
              <Why
                baseWidth={300}
                autoplay={true}
                autoplayDelay={2000}
                pauseOnHover={true}
                loop={true}
                round={true}
                Boxdata={Boxdata}
              />
            </div>
          </section>
          <section className=" w-[90%] my-20 lg:mb-40 max-w-[1600px] mx-auto">
            <div className="bg-white rounded-3xl shadow-lg text-black flex flex-col items-start justify-center relative overflow-hidden px-3 xs:px-7 py-10 sm:py-16 md:p-16 2xl:p-24">
              <div className="absolute right-0 top-[-20px] lg:top-[-50px] w-[150px] md:w-[200px] lg:w-[270px] h-max">
                <Image src={what} alt="image" className="w-full h-auto" />
              </div>

              <h1 className="font-sharpGrotesk text-2xl xs:text-[30px] sm:text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl w-[40%] sm:w-full text-start mb-10 sm:mb-16 lg:mb-24 2xl:mb-30 mt-0 lg:mt-8 ml-6 xs:ml-3 sm:ml-0 leading-[3rem]">
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
                  <div className="space-y-4 xl:space-y-5">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-3xl 2xl:text-3xl px-2 extra-bold text-nowrap">
                      <b>
                        Comprehensive
                        <br />
                        Automation
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-lg 2xl:text-lg">
                      <b className="font-actayWide">Time-Based Automation:</b>{" "}
                      Schedule tasks at any interval or timestamp.
                    </h4>
                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-lg 2xl:text-lg">
                      <b className="font-actayWide">Event-Based Automation:</b>{" "}
                      Trigger actions based on on-chain events.
                    </h4>
                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-lg 2xl:text-lg">
                      <b className="font-actayWide">
                        Condition-Based Automation:
                      </b>{" "}
                      Automate responses when conditions are met.
                    </h4>
                  </div>

                  <div className="space-y-4 xl:space-y-5">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-3xl px-2 extra-bold text-nowrap">
                      <b>
                        Crypto-Economic
                        <br />
                        Security
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-lg 2xl:text-lg">
                      Relax, your automation tasks are in safe hands.
                      TriggerX&apos;s integration with EigenLayer and its
                      innovative AVS system ensures that keepers are
                      incentivized to act honestly, protecting you from any
                      malicious activity.{" "}
                    </h4>
                  </div>

                  <div className="space-y-4 xl:space-y-5">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-3xl px-2 extra-bold text-nowrap">
                      <b>
                        Scale Across
                        <br />
                        Chains
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-lg 2xl:text-lg">
                      TriggerX&apos;s multi-chain architecture allows you to
                      seamlessly scale to new networks. Integrate with emerging
                      L2 chains and expand your automation capabilities as the
                      Web3 landscape evolves.{" "}
                    </h4>
                  </div>
                  <div className="space-y-4 xl:space-y-5">
                    <h2 className="font-actayWide text-sm xs:text-lg sm:text-xl lg:text-3xl xl:text-4xl 2xl:text-3xl px-2 extra-bold text-nowrap">
                      <b>
                        Power of the
                        <br />
                        Decentralized Network
                      </b>
                    </h2>

                    <h4 className="text-[#1F1F1F] leading-relaxed px-2 text-xs sm:text-base xl:text-lg 2xl:text-lg ">
                      TriggerX taps into a network of independent keepers,
                      creating a robust and tamper-proof automation
                      infrastructure for your Web3 projects.{" "}
                    </h4>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <Link href="https://t.me/triggerxnetwork" target="blank">
                    <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                      <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50  rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                      <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                      <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                        Dev Hub
                      </span>
                    </button>
                  </Link>
                  <button
                    onClick={() => scrollToSection("contact-section")}
                    className="relative bg-[#222222] text-black border border-black px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform"
                  >
                    <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                    <span className="absolute inset-0 bg-white rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                    <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                      Let&apos;s Talk
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* use cases */}
          <section className="max-w-[1600px]  mx-auto w-[90%] h-auto  my-20 flex justify-between items-center flex-col md:flex-row">
            <div className="flex flex-col items-start w-full md:w-1/2 p-4 sm:p-6 2xl:p-10 mb-10">
              <div className="hidden md:inline-block w-[50%] h-max">
                <Image src={usecase} alt="usecase" className="w-full h-auto" />
              </div>
              <h1 className="font-sharpGrotesk text-3xl sm:text-4xl lg:text-[3vw] text-center md:text-start leading-normal 2xl:leading-[3rem] xl:mb-5 w-full md:w-auto">
                Who is
              </h1>
              <h1 className="font-sharpGrotesk text-3xl sm:text-4xl lg:text-[3vw] text-center md:text-start leading-normal 2xl:leading-[4rem] w-full md:w-auto">
                TriggerX For?
              </h1>
              <div className="font-actayRegular w-[100%]">
                <h4 className="text-xs xs:text-sm lg:text-[18px] 2xl:text-[18px] text-[#A2A2A2] text-center md:text-left mt-6 sm:mt-12  leading-normal lg:leading-[2.1rem] 2xl:leading-[2.1rem]">
                  Whether you&apos;re a dApp developer, DeFi protocol creator,
                  or enterprise innovator, TriggerX empowers you to automate
                  tasks with ease and confidence.
                </h4>
              </div>
            </div>

            <div className="font-actayWide w-full sm:w-[70%] md:w-1/2 h-full p-4 sm:p-6 2xl:p-10">
              <h4 className="text-[#FBF197] text-2xl sm:text-3xl md:text-2xl lg:text-[2.5vw] sm:p-6 lg:p-[30px] 2xl:p-[35px] md:text-start text-center text-nowrap md:p-3">
                <b>Use cases include</b>
              </h4>
              <div className="grid grid-cols-1 md:w-full w-[85%] mx-auto">
                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[25px] 2xl:p-[30px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center  gap-4 sm:gap-8 lg:gap-14 w-full">
                    <Image
                      src={honesty}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-8"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[18px] tracking-wide text-nowrap">
                      Automated API calls
                    </h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[25px] 2xl:p-[30px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full ">
                    <Image
                      src={validation}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-8"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[18px] tracking-wide text-nowrap">
                      Governance actions
                    </h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[25px] 2xl:p-[30px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full ">
                    <Image
                      src={security}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-8"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[18px] tracking-wide text-nowrap">
                      Liquidity management
                    </h3>
                  </div>
                </div>

                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[25px] 2xl:p-[30px]">
                  <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-[#303030] via-[#FFFFFF] to-[#303030]"></div>
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full ">
                    <Image
                      src={validation}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-8"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[18px] tracking-wide text-nowrap">
                      Token burns or mints
                    </h3>
                  </div>
                </div>
                <div className="relative flex items-center justify-start gap-3 px-0 py-6 sm:p-6 lg:p-[25px] 2xl:p-[30px]">
                  <div className="flex items-center gap-4 sm:gap-8 lg:gap-14 w-full ">
                    <Image
                      src={honesty}
                      alt={"--"}
                      width={30}
                      className="w-6 sm:w-7 lg:w-8 xl:w-8"
                    />
                    <h3 className="text-xs sm:text-sm lg:text-base xl:text-xl 2xl:text-[18px] tracking-wide text-nowrap">
                      User notifications and more !
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Get Started Section */}
          <section
            id="contact-section"
            className="w-[90%] mx-auto my-20 max-w-[1600px] "
          >
            <div className="w-full text-center">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl 2xl:text-5xl text-white pb-2 text-center font-sharpGrotesk">
                Get Started Today
              </h1>

              <div className="mt-10 md:mt-20 md:mx-5">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full h-auto">
                  <div className="relative overflow-hidden bg-[#141414] group rounded-3xl border border-white/10 flex items-center aspect-auto md:aspect-square shadow-none transition-[box-shadow] duration-300 ease-in-out hover:shadow-[inset_0_0_20px_0_rgba(255,255,255,0.8)]">
                    <div className="block md:hidden absolute right-[-23px] xs:right-0 h-full w-max">
                      <Image
                        src={speak}
                        alt="side image"
                        className="h-full w-auto"
                      ></Image>
                    </div>
                    <div className="p-6 lg:p-10 w-full">
                      <h3 className="text-[20px] md:text-[30px] lg:text-[40px] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[50px] text-wrap md:w-[90%] lg:h-[90px]">
                        <b>Speak to Us</b>
                      </h3>
                      <h4 className="text-xs lg:text-base 2xl:text-[1.5vw] group-hover:underline text-start tracking-wider text-[#82FBD0] hover:underline py-2 md:py-5 font-actayRegular">
                        <a href="mailto:hello@triggerx.network" target="_blank">
                          hello@triggerx.network
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[#141414] group rounded-3xl border border-white/10 flex items-center aspect-auto md:aspect-square shadow-none transition-[box-shadow] duration-300 ease-in-out hover:shadow-[inset_0_0_20px_0_rgba(255,255,255,0.8)]">
                    <div className="block md:hidden absolute right-[-23px] xs:right-0 h-full w-max">
                      <Image
                        src={dev}
                        alt="side image"
                        className="h-full w-auto"
                      ></Image>
                    </div>
                    <div className="p-6 lg:p-10 w-full">
                      <h3 className="text-[20px] md:text-[30px] lg:text-[40px] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[50px] text-wrap md:w-[90%] lg:h-[90px]">
                        <b>Dev Hub</b>
                      </h3>
                      <h4 className="text-xs lg:text-base 2xl:text-[1.5vw] text-start tracking-wider text-[#82FBD0] group-hover:underline py-2 md:py-5 font-actayRegular">
                        <a href="https://t.me/triggerxnetwork" target="_blank">
                          Connect
                        </a>
                      </h4>
                    </div>
                  </div>

                  <div className="relative overflow-hidden bg-[#141414] group rounded-3xl border border-white/10 flex items-center aspect-auto md:aspect-square shadow-none transition-[box-shadow] duration-300 ease-in-out hover:shadow-[inset_0_0_20px_0_rgba(255,255,255,0.8)]">
                    <div className="block md:hidden absolute right-[-23px] xs:right-0 h-full w-max">
                      <Image
                        src={follow}
                        alt="side image"
                        className="h-full w-auto"
                      ></Image>
                    </div>
                    <div className="p-6 lg:p-10 w-full">
                      <h3 className="text-[20px] md:text-[30px] lg:text-[40px] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[50px] text-wrap md:w-[90%] lg:h-[90px]">
                        <b>Follow us on X</b>
                      </h3>
                      <h4 className="text-xs lg:text-base 2xl:text-[1.5vw] text-start tracking-wider text-[#82FBD0] group-hover:underline py-2 md:py-5 font-actayRegular">
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
      </div>
    </>
  );
}

export default Homepage;
