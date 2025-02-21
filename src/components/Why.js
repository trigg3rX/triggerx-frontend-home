"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import Image from "next/image";
import why from "../app/assets/why.svg";

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Why({
  Boxdata,
  visibleItems = 3,
  autoplay = true,
  autoplayDelay = 2000,
  pauseOnHover = true,
  loop = true,
}) {
  // Set fixed item width based on container and visible items
  const calculatedItemWidth = 350; // You can adjust this value
  const containerWidth = (calculatedItemWidth + GAP) * visibleItems - GAP;
  const trackItemOffset = calculatedItemWidth + GAP;

  // For loop functionality, we need to add clones at the end
  const carouselItems = loop
    ? [...Boxdata, ...Boxdata.slice(0, visibleItems - 3)]
    : Boxdata;

  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const containerRef = useRef(null);

  // Check if screen is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    // Check on initial load
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  // Handle hover state for autoplay pause
  useEffect(() => {
    if (!isMobile && pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener("mouseenter", handleMouseEnter);
      container.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        container.removeEventListener("mouseenter", handleMouseEnter);
        container.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [pauseOnHover, isMobile]);

  // Autoplay functionality - only on desktop
  useEffect(() => {
    if (!isMobile && autoplay && (!pauseOnHover || !isHovered)) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          // Handle loop case
          if (prev >= Boxdata.length - visibleItems) {
            return loop ? 0 : prev;
          }
          return prev + 1;
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    loop,
    Boxdata.length,
    pauseOnHover,
    visibleItems,
    isMobile,
  ]);

  const effectiveTransition = isResetting ? { duration: 0 } : SPRING_OPTIONS;

  // Handle loop reset
  const handleAnimationComplete = () => {
    if (!isMobile && loop && currentIndex >= Boxdata.length) {
      setIsResetting(true);
      x.set(0);
      setCurrentIndex(0);
      setTimeout(() => setIsResetting(false), 50);
    }
  };

  // Handle drag end
  const handleDragEnd = (_, info) => {
    if (isMobile) return;

    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      const maxIndex = loop
        ? Boxdata.length + visibleItems - 3
        : Boxdata.length - visibleItems;
      setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0));
    }
  };

  // Calculate drag constraints
  const maxDrag = loop
    ? -(Boxdata.length * trackItemOffset)
    : -((Boxdata.length - visibleItems) * trackItemOffset);

  const dragProps = isMobile
    ? {}
    : {
        dragConstraints: {
          left: maxDrag,
          right: 0,
        },
      };

  return (
    <div className="xl:overflow-hidden lg:overflow-hidden md:overflow-auto xs:overflow-auto sm:overflow-auto rounded-[24px] gap-4 flex xl:flex-row lg:flex-row md:flex-col sm:flex-col flex-col justify-between items-center h-full xl:ml-[100px]">
      <div className="xl:w-[20%] lg:w-[20%] md:w-[100%] sm:w-[100%] w-[100%] xl:flex-col lg:flex-col md:flex-row sm:flex-row flex-row  items-center justify-center gap-3 flex xl:h-[500px]">
        <h2 className="font-sharpGrotesk text-white font-light text-5xl md:text-5xl 2xl:text-[80px] text-center lg:text-start transform scale-y-[.8] leading-normal w-[70%] sm:w-[100%]">
          Why TriggerX?
        </h2>

        <div className="w-max h-[50%] hidden lg:flex">
          <Image src={why} alt={""} className="w-auto h-full" />
        </div>
      </div>

      <div
        ref={containerRef}
        className=" sm:hidden hidden lg:flex md:hidden xl:flex flex-row relative xl:overflow-hidden lg:overflow-hidden md:overflow-hidden xs:overflow-auto sm:overflow-auto rounded-[24px] p-4"
        style={{
          width: isMobile ? "100%" : `1200px`,
          maxWidth: "100%",
        }}
      >
        <motion.div
          className="flex"
          drag={isMobile ? false : "x"}
          {...dragProps}
          style={{
            gap: `${GAP}px`,
            x: isMobile ? 0 : x,
            flexWrap: isMobile ? "wrap" : "nowrap",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
          onDragEnd={isMobile ? null : handleDragEnd}
          animate={isMobile ? {} : { x: -(currentIndex * trackItemOffset) }}
          transition={isMobile ? {} : effectiveTransition}
          onAnimationComplete={isMobile ? null : handleAnimationComplete}
        >
          {(isMobile ? Boxdata : carouselItems).map((box, index) => (
            <motion.div
              key={index}
              style={{
                boxShadow: "inset 0px 0px 7.91px 0px #656565",
                width: isMobile ? "100%" : `${calculatedItemWidth}px`,
                flexShrink: 0,
                marginBottom: isMobile ? "16px" : "0",
              }}
              className="relative rounded-[20px] 2xl:rounded-[30px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] p-2  xl:h-[500px]"
            >
              <div className="relative z-0 h-32 xl:h-44 2xl:h-48 overflow-hidden">
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
                <p className="text-gray-300 text-xs md:text-xs xl:text-base font-actayRegular mb-6">
                  {box.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div
        ref={containerRef}
        className="xl:hidden lg:hidden md:flex  flex sm:flex relative xl:overflow-hidden lg:overflow-hidden md:overflow-hidden xs:overflow-auto sm:overflow-auto rounded-[24px] p-4"
        style={{
          width: isMobile ? "100%" : `1200px`,
          maxWidth: "100%",
        }}
      >
        <div
          className="flex  "
          drag={isMobile ? false : "x"}
          {...dragProps}
          style={{
            gap: `${GAP}px`,
            x: isMobile ? 0 : x,
            flexWrap: isMobile ? "wrap" : "nowrap",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
          onDragEnd={isMobile ? null : handleDragEnd}
          animate={isMobile ? {} : { x: -(currentIndex * trackItemOffset) }}
          transition={isMobile ? {} : effectiveTransition}
          onAnimationComplete={isMobile ? null : handleAnimationComplete}
        >
          {(isMobile ? Boxdata : carouselItems).map((box, index) => (
            <div
              key={index}
              style={{
                boxShadow: "inset 0px 0px 7.91px 0px #656565",
                width: isMobile ? "100%" : `${calculatedItemWidth}px`,
                flexShrink: 0,
                marginBottom: isMobile ? "16px" : "0",
              }}
              className="flex p-4 gap-5 items-center rounded-[20px] 2xl:rounded-[30px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F]  xl:h-[500px] h-[150px]"
            >
              <div className="relative z-0   w-[30%] sm:w-[30%] h-auto md:w-[20%]">
                <Image
                  src={box.imageSrc}
                  alt={box.title}
                  className="object-fill rounded-[14px]  relative w-[100%] "
                />
              </div>
              <div className="relative z-10 space-y-2 w-full ">
                <h2 className="font-actayWide text-[17px]  lg:text-[1.3vw] text-white font-bold leading-snug">
                  <b>{box.title}</b>
                </h2>
                <p className="text-gray-300 text-xs md:text-xs xl:text-base font-actayRegular mb-6">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
