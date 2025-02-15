"use client";
import { useRef, useEffect, React } from "react";
import Image from "next/image";
import choose from "../app/assets/chooseTrigger.svg";
import honesty from "../app/assets/honesty.svg";
import security from "../app/assets/security.svg";
import validation from "../app/assets/validation.svg";

import usecase from "../app/assets/usecase svg/usecase.svg";

import speak from "@/app/assets/get started svgs/speak.svg";
import follow from "@/app/assets/get started svgs/follow.svg";
import dev from "@/app/assets/get started svgs/dev.svg";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

import Boxdata from "./Boxdata";
import Header from "./Header";
import Footer from "./Footer";
import Why from "./Why";

gsap.registerPlugin(ScrollTrigger);

function Homepage() {
  const nextGenRef = useRef();
  const section2Ref = useRef();
  const isScrolling = useRef(false);
  const scrollTimeout = useRef(null);

  const componentRef = useRef(null);
  const sliderRef = useRef(null);

  // useEffect(() => {
  //   if (window.innerWidth >= 768) {
  //     gsap.registerPlugin(ScrollTrigger);

  //     const slider = sliderRef.current;
  //     const section = componentRef.current;

  //     let tl = gsap.timeline({
  //       defaults: { ease: "none" },
  //       scrollTrigger: {
  //         trigger: slider,
  //         start: "top+=100% bottom", // Ensure it starts only when fully visible
  //         end: "top+=200% bottom",
  //         pin: true,
  //         pinSpacing: true,
  //         scrub: 1,
  //         invalidateOnRefresh: true,
  //         anticipatePin: 1,
  //         markers: true,
  //       },
  //     });

  //     tl.to(slider, {
  //       x: () => -(slider.scrollWidth - window.innerWidth),
  //       ease: "none",
  //     });

  //     const handleResize = () => {
  //       if (window.innerWidth < 768) {
  //         tl.kill();
  //         ScrollTrigger.getAll().forEach((st) => st.kill());
  //         gsap.set(slider, { x: 0 });
  //       } else {
  //         setTimeout(() => ScrollTrigger.refresh(), 500); // Ensure it recalculates
  //       }
  //     };

  //     window.addEventListener("resize", handleResize);
  //     window.addEventListener("load", () => setTimeout(() => ScrollTrigger.refresh(), 500));

  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //       tl.kill();
  //       ScrollTrigger.getAll().forEach((st) => st.kill());
  //     };
  //   }
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
          <Why Boxdata={Boxdata} />

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
              <h1 className="font-sharpGrotesk text-3xl sm:text-4xl lg:text-[3vw] text-center md:text-start leading-normal 2xl:leading-[4rem] xl:mb-5 w-full md:w-auto">
                Who is
              </h1>
              <h1 className="font-sharpGrotesk text-3xl sm:text-4xl lg:text-[3vw] text-center md:text-start leading-normal 2xl:leading-[4rem] w-full md:w-auto">
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
              <h4 className="text-[#FBF197] text-2xl sm:text-3xl lg:text-[3.2vw] text-center mb-5 sm:mb-9 lg:mb-14 xl:mb-16 2xl:mb-24 text-nowrap">
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
                      <h3 className="text-[27px] md:text-[40px] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[90px] text-wrap">
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
                      <h3 className="text-[27px] md:text-[40px] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[90px] text-wrap">
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
                      <h3 className="text-[27px] md:text-[40px] leading-tight mb-4 md:mb-6 text-start font-actayWide w-full lg:w-[90%] 2xl:w-[80%] h-auto md:h-[90px] text-wrap">
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
