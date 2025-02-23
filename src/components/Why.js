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
  autoplay = true,
  autoplayDelay = 2000,
  pauseOnHover = true,
  loop = true,
}) {
  const [screenWidth, setScreenWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(350);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const x = useMotionValue(0);
  const containerRef = useRef(null);

  // Create wrapped items array for infinite loop
  const wrappedItems = [...Boxdata, ...Boxdata, ...Boxdata];

  // Update screen width and item width on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      setScreenWidth(window.innerWidth);
      // Responsive item width
      if (window.innerWidth < 640) { // mobile
        setItemWidth(window.innerWidth - 32); // full width minus padding
      } else if (window.innerWidth < 1024) { // tablet
        setItemWidth(350);
      } else { // desktop
        setItemWidth(350);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  // Calculate dimensions
  const trackWidth = (itemWidth + GAP) * wrappedItems.length;
  const containerWidth = screenWidth < 1024 
    ? screenWidth - 32 // Full width minus padding on mobile/tablet
    : (itemWidth + GAP) * visibleItems - GAP;

  // Autoplay functionality
  useEffect(() => {
    if (autoplay && (!pauseOnHover || !isHovered) && !isDragging) {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % Boxdata.length);
      }, autoplayDelay);
      return () => clearInterval(timer);
    }
  }, [autoplay, autoplayDelay, isHovered, isDragging, Boxdata.length, pauseOnHover]);

  // Handle infinite loop
  useEffect(() => {
    if (currentIndex >= Boxdata.length) {
      // If we've gone past the end, jump back to start
      setTimeout(() => {
        x.set(0);
        setCurrentIndex(0);
      }, 50);
    } else if (currentIndex < 0) {
      // If we've gone before the start, jump to end
      setTimeout(() => {
        x.set(-(Boxdata.length - 1) * (itemWidth + GAP));
        setCurrentIndex(Boxdata.length - 1);
      }, 50);
    }
  }, [currentIndex, Boxdata.length, itemWidth, x]);

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = (_, info) => {
    setIsDragging(false);
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => prev + 1);
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex(prev => prev - 1);
    }
  };

  return (
    <div className="w-full overflow-hidden pl-4 md:pl-8 lg:pl-16">
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Title and image section */}
        <div className="w-full lg:w-1/4 flex flex-col items-center lg:items-start gap-6">
          <h2 className="font-sharpGrotesk text-white text-4xl md:text-5xl 2xl:text-7xl text-center lg:text-start transform scale-y-[.8]">
            Why TriggerX?
          </h2>
          <div className="hidden lg:block h-auto w-full max-w-[300px]">
            <Image src={why} alt="Why TriggerX" className="w-full h-auto" />
          </div>
        </div>

        {/* Carousel section */}
        <div 
          ref={containerRef}
          className="w-full lg:w-3/4 overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            className="flex"
            drag="x"
            dragConstraints={{
              left: -trackWidth + containerWidth,
              right: 0
            }}
            dragElastic={0.1}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            animate={{ x: -(currentIndex * (itemWidth + GAP)) }}
            transition={SPRING_OPTIONS}
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
      </div>
    </div>
  );
}