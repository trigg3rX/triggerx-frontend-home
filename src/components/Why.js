"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, AnimatePresence } from "framer-motion";
import Image from "next/image";
import why from "../app/assets/why.svg";

const DRAG_BUFFER = 50;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: "spring", stiffness: 300, damping: 30 };

export default function Why({
  Boxdata,
  visibleItems = 3,
  autoplay = false,
  autoplayDelay = 2000,
  pauseOnHover = true,
  loop = true,
  round = false,
}) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(350);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // Create wrapped items array for infinite loop
  const wrappedItems = [...Boxdata, ...Boxdata, ...Boxdata];
  const totalItems = Boxdata.length;

  // Update screen width and item width on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      setIsMobile(width < 640);

      if (width < 640) {
        setItemWidth(width - 32);
      } else if (width < 1024) {
        setItemWidth(350);
      } else {
        setItemWidth(350);
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const trackWidth = (itemWidth + GAP) * wrappedItems.length;
  const containerWidth =
    screenWidth < 1024
      ? screenWidth - 32
      : (itemWidth + GAP) * visibleItems - GAP;

  useEffect(() => {
    if (!isMobile && autoplay && (!pauseOnHover || !isHovered) && !isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => {
          const nextIndex = prev + 1;
          if (loop) {
            return nextIndex;
          } else {
            return nextIndex % Boxdata.length;
          }
        });
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [
    autoplay,
    autoplayDelay,
    isHovered,
    isDragging,
    Boxdata.length,
    pauseOnHover,
    loop,
    isMobile,
  ]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => prev + 1);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleAnimationComplete = () => {
    if (loop) {
      setCurrentIndex((prev) => (prev % totalItems) + totalItems);
    }
  };
  const actualIndex = currentIndex % totalItems;

  return (
    <div className="w-full overflow-hidden pl-4 md:pl-8 lg:pl-16  ">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        <div className="w-full lg:w-1/3 2xl:w-[40%] flex flex-col items-center lg:items-start gap-6 2xl:items-center ">
          <h2 className="font-sharpGrotesk text-white text-4xl md:text-5xl 2xl:text-7xl text-center xl:w-[60%] text-wrap lg:text-start transform scale-y-[.8] ">
            Why TriggerX?
          </h2>
          <div className="hidden lg:block h-auto w-full max-w-[300px]">
            <Image src={why} alt="Why TriggerX" className="w-full h-auto" />
          </div>
        </div>

        <div className="w-full lg:w-3/4 2xl:w-[60%] overflow-hidden relative">
          {isMobile ? (
            // Mobile view - vertical list
            <div className="flex flex-col gap-3 pr-4 ">
              {Boxdata.map((box, index) => (
                <div key={`${box.title}-${index}`} className="w-full">
                  <div className="rounded-[20px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] p-4">
                    <div className="flex gap-3 items-center justify-center">
                      <div className="relative w-24 h-24 overflow-hidden rounded-[10px] flex-shrink-0">
                        <Image
                          src={box.imageSrc}
                          alt={box.title}
                          className="object-cover"
                          fill
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-actayWide text-[15px] text-white font-bold mb-2">
                          {box.title}
                        </h3>
                        <p className="text-gray-300 text-xs font-actayRegular line-clamp-3">
                          {box.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            // Desktop/Tablet view - carousel
            <div
              ref={containerRef}
              className="w-full"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex"
                drag="x"
                // dragConstraints={{
                //   left: -trackWidth + containerWidth,
                //   right: 0,
                // }}
                dragElastic={0.1}
                onDragStart={handleDragStart}
                onDragEnd={handleDragEnd}
                animate={{ x: -(currentIndex * (itemWidth + GAP)) }}
                transition={SPRING_OPTIONS}
                onAnimationComplete={handleAnimationComplete}
              >
                <AnimatePresence>
                  {wrappedItems.map((box, index) => (
                    <motion.div
                      key={`${box.title}-${index}`}
                      className="flex-shrink-0"
                      style={{ width: itemWidth, marginRight: GAP }}
                    >
                      <div className="h-full rounded-[20px] overflow-hidden bg-[#0F0F0F] border border-[#5F5F5F] p-4">
                        <div className="relative h-32 md:h-40 lg:h-48 overflow-hidden rounded-[14px]">
                          <Image
                            src={box.imageSrc}
                            alt={box.title}
                            className="object-cover w-full h-full"
                            fill
                          />
                        </div>
                        <div className="space-y-4 p-4">
                          <h3 className="font-actayWide text-lg md:text-xl text-white font-bold">
                            {box.title}
                          </h3>
                          <p className="text-gray-300 text-sm md:text-base font-actayRegular">
                            {box.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
