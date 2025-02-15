"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import why from "../app/assets/why.svg";

const Why = ({ Boxdata }) => {
  const sectionRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [scrollFactor, setScrollFactor] = useState(0.77);
  const [isScrollable, setIsScrollable] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 768 : false
  );


  useEffect(() => {
    if (typeof window === "undefined") return; // Prevent SSR execution

    const updateScrollFactor = () => {
      if (window.innerWidth < 768) {
        setScrollFactor(0);
        setIsScrollable(false);
      } else if (window.innerWidth < 1024) {
        setScrollFactor(1);
        setIsScrollable(true);
      } else if (window.innerWidth < 1300) {
        setScrollFactor(1.3);
        setIsScrollable(true);
      } else {
        setScrollFactor(0.77);
        setIsScrollable(true);
      }
    };

    updateScrollFactor();
    window.addEventListener("resize", updateScrollFactor);
    return () => window.removeEventListener("resize", updateScrollFactor);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      if (sectionRef.current && isScrollable) {
        const offsetTop = sectionRef.current.getBoundingClientRect().top;
        const newScrollY = Math.min(
          Math.max(-offsetTop, 0),
          window.innerHeight * 2
        );
        setScrollY(newScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrollable]);

  return (
    <section ref={sectionRef} className="relative md:h-[300vh]">
      <div className="md:sticky top-0 left-0 w-[98%] md:h-[100vh] mx-auto md:overflow-hidden flex items-center">
        <div
          className="flex flex-col md:flex-row gap-4 md:gap-0 w-[100%] md:w-[200%] transition-transform duration-300"
          style={{
            transform: isScrollable
              ? `translateX(-${scrollY * scrollFactor}px)`
              : "none",
          }}
        >
          <div className="md:w-[50%] overflow-hidden gap-4 flex flex-col md:flex-row justify-end items-center h-full">
            <div className="flex flex-col items-center justify-center gap-3 h-[60vh]">
              <h2 className="font-sharpGrotesk text-white font-light text-4xl md:text-5xl 2xl:text-[80px] text-center md:text-start transform scale-y-[.8] leading-normal w-[70%] sm:w-[100%]">
                Why TriggerX?
              </h2>

              <div className="w-max h-[50%] hidden md:flex">
                <Image src={why} alt={""} className="w-auto h-full" />
              </div>
            </div>
            {Boxdata.slice(0, 3).map((box, index) => (
              <div
                key={index}
                style={{
                  boxShadow: "inset 0px 0px 7.91px 0px #656565",
                }}
                className="relative w-[290px] xs:w-[300px] lg:w-[350px] 2xl:w-[400px] rounded-[20px] 2xl:rounded-[30px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] p-2 h-[60vh] md:last:mr-[16px]"
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
                  <h2 className="font-actayWide text-[17px] md:text-[1vw] lg:text-[1.3vw] text-white font-bold leading-snug">
                    <b>{box.title}</b>
                  </h2>
                  <p className="text-gray-300 text-xs md:text-xs 2xl:text-base font-actayRegular mb-6">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:w-[50%] overflow-hidden gap-4 flex flex-col md:flex-row justify-start items-center h-full ">
            {Boxdata.slice(3, 7).map((box, index) => (
              <div
                key={index}
                style={{
                  boxShadow: "inset 0px 0px 7.91px 0px #656565",
                }}
                className="relative w-[290px] xs:w-[300px] 2xl:w-sm rounded-[20px] 2xl:rounded-[30px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] p-2 h-[60vh]"
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
                  <h2 className="font-actayWide text-[17px] md:text-[1vw] lg:text-[1.3vw] text-white font-bold leading-snug">
                    <b>{box.title}</b>
                  </h2>
                  <p className="text-gray-300 text-xs md:text-xs 2xl:text-base font-actayRegular mb-6">
                    {box.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Why;
