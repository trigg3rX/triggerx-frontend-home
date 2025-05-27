"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "../app/assets/logo.svg";
import gsap from "gsap";
import { usePathname } from "next/navigation";
import ScrollTrigger from "gsap/ScrollTrigger";
import landing from "../app/assets/landing.svg";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  // State variables for UI and animation control
  const [menuOpen, setMenuOpen] = useState(false);
  const [highlightStyle, setHighlightStyle] = useState({});
  const [prevRect, setPrevRect] = useState();
  const [scrollToSection, setScrollToSection] = useState(false);
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const [MobileAnimationCompleted, setMobileAnimationCompleted] = useState(false);
  const [imageOpacity, setImageOpacity] = useState(1);
  const [imageMOpacity, setImageMOpacity] = useState(1);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [showContent, setShowContent] = useState(false);

  // Refs for DOM elements used in animation and navigation
  const navRef = useRef();
  const navMobileRef = useRef(null);
  const navMobileMRef = useRef(null);
  const landingImageRef = useRef(null);
  const landingImageMRef = useRef(null);
  const mainLogoRef = useRef(null);
  const containerRef = useRef(null);
  const headerMRef = useRef(null);
  const mainLogoMRef = useRef(null);
  const containerMRef = useRef(null);
  const headerRef = useRef(null);
  const navigationMRef = useRef(null);
  const navigationRef = useRef(null);
  const animationPlayed = useRef(false);
  const circularTextRef = useRef(null);
  const arrowRef = useRef(null);
  const dropdownRef = useRef(null);

  // Next.js router and current path
  const router = useRouter();
  const pathname = usePathname();

  // Navigation items for the menu
  const navItems = [
    {
      id: "Dev Hub",
      path: "https://app.triggerx.network/devhub",
      label: "Dev Hub",
      target: "_blank",
      external: true,
    },
    {
      id: "Leaderboard",
      path: "https://app.triggerx.network/leaderboard",
      label: "Leaderboard",
      target: "_blank",
      external: true,
    },
    { id: "Blog", path: "/blog", label: "Blog" },
    {
      id: "Join as Keeper",
      path: "https://triggerx.gitbook.io/triggerx-docs/getting-started-as-keepers",
      label: "Join as Keeper",
      target: "_blank",
      external: true,
    },
    {
      id: "Contact Us",
      label: "Contact Us",
      external: false,
    },
  ];

  // Checks if a route is active (for nav highlight)
  const isActiveRoute = (path) => pathname === path;

  // Handles clicking a nav menu item
  const handleMenuItemClick = (path, hasDropdown = false) => {
    if (path && !hasDropdown) {
      router.push(path);
    }
    if (hasDropdown) {
      setDropdownOpen(!dropdownOpen);
    }
  };

  // Handles clicking the "Contact Us" button
  const handleClick = () => {
    if (pathname !== "/") {
      setScrollToSection(true);
      router.push("/");
    } else {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Handles mouse enter on nav item (for highlight animation)
  const handleMouseEnter = (event) => {
    const hoveredElement = event.currentTarget;
    if (!hoveredElement) return;
    const rect = hoveredElement.getBoundingClientRect();
    const navRect = navRef.current
      ? navRef.current.getBoundingClientRect()
      : { x: 0, y: 0, width: 0, height: 0 };

    setHighlightStyle({
      opacity: 1,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      transform: `translateX(${rect.x - navRect.x}px)`,
      transition: prevRect ? "all 0.3s ease" : "none",
    });

    setPrevRect(rect);
  };

  // Handles mouse leaving nav (hide highlight)
  const handleMouseLeave = () => {
    setHighlightStyle((prev) => ({
      ...prev,
      opacity: 0,
      transition: "all 0.3s ease",
    }));
  };

  // Toggles dropdown menu
  const toggleDropdown = (item) => {
    if (item.dropdown) {
      setDropdownOpen(!dropdownOpen);
    } else {
      setDropdownOpen(false);
    }
  };

  // Handles clicking the logo (go home if animation done)
  const handleLogoClick = () => {
    if (animationCompleted || MobileAnimationCompleted) {
      router.push("/");
        }
  };

  // Handles clicking the scroll arrow (mobile)
  const handleArrowClick = () => {
          playMobileAnimation();
  };

  // Handles clicking the scroll arrow (desktop)
  const handleArrowDown = () => {
    playAnimation();
  };

  // GSAP animation for desktop header
  const playAnimation = () => {
    console.log('playAnimation called');
    if (animationPlayed.current) {
      console.log('Animation already played, returning');
      return;
    }

    const isDirectRoute = pathname !== "/" && pathname !== "";
    if (!isDirectRoute) {
      setTimeout(() => {
        window.scrollTo(0, 0);
      }, 0);
    }

    const calculatePositions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: 170,
          x: viewportWidth * -0,
          y: -160,
        },
        nav: {
          x: viewportWidth * -0,
          y: viewportHeight * -0,
        },
        landing: {
          width: 500,
          x: viewportWidth * -0,
          y: -480,
        },
        mobile: {
          x: viewportWidth * -0,
          y: viewportHeight * -0,
        },
      };
    };

    const positions = calculatePositions();

    gsap.set(
      [
        mainLogoRef.current,
        landingImageRef.current,
        navigationRef.current,
        navMobileRef.current,
      ],
      {
        x: 0,
        y: 0,
      }
    );

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        setAnimationCompleted(true);
        setShowContent(true);
        gsap.set(containerRef.current, { height: "100px" });
      },
    });

    tl.to(mainLogoRef.current, {
      width: positions.logo.width,
      x: positions.logo.x,
      y: positions.logo.y,
      ease: "power2.out",
      duration: 1,
    });

    tl.to(
      navigationRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
        left: "50%",
        opacity: 1,
        transform: "translateX(-50%)",
        ease: "power2.out",
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    tl.to(
      landingImageRef.current,
      {
        width: positions.landing.width,
        x: positions.landing.x,
        y: positions.landing.y,
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );

    tl.to(
      navMobileRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
        left: "50%",
        transform: "translateX(-50%)",
        ease: "power2.out",
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    tl.to(
      containerRef.current,
      {
        height: "100px",
        duration: 1,
        ease: "power2.out",
      },
      0
    );

    gsap.to(circularTextRef.current, {
      rotation: 360,
      duration: 10,
      repeat: -1,
      ease: "linear",
    });
  };

  // GSAP animation for mobile header
  const playMobileAnimation = () => {
    if (animationPlayed.current) return;

    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 0);

    const calculatePositions = () => {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      return {
        logo: {
          width: 130,
          x: -58,
          y: -165,
        },
        nav: {
          x: viewportWidth * -0,
          y: viewportHeight * -0,
        },
        landing: {
          width: 300,
          x: viewportWidth * -0,
          y: -355,
          scale: 0.8,
        },
      };
    };

    const positions = calculatePositions();

    // Set initial states
    gsap.set(
      [
        mainLogoMRef.current,
        landingImageMRef.current,
        navigationMRef.current,
        navMobileMRef.current,
      ],
      {
        x: 0,
        y: 0,
        scale: 1,
        opacity: 0, // Start with opacity 0
      }
    );

    const tl = gsap.timeline({
      onComplete: () => {
        animationPlayed.current = true;
        setMobileAnimationCompleted(true);
        gsap.set(containerMRef.current, { height: "100px" });
      },
    });

    // First fade in the background
    tl.to(containerMRef.current, {
      backgroundColor: "#0a0a0a",
      duration: 0.1,
    });

    // Then animate logo and landing image
    tl.to(mainLogoMRef.current, {
      width: positions.logo.width,
      x: positions.logo.x,
      y: positions.logo.y,
      opacity: 1,
      ease: "power2.out",
      duration: 1,
      zIndex: 10,
      position: "relative",
    });

    tl.to(
      landingImageMRef.current,
      {
        width: positions.landing.width,
        x: positions.landing.x,
        y: positions.landing.y,
        scale: positions.landing.scale,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      },
      "<"
    );

    tl.to(
      navigationMRef.current,
      {
        x: positions.nav.x,
        y: positions.nav.y,
        opacity: 1,
        transform: "translateX(-50%)",
        ease: "power2.out",
        duration: 1,
        zIndex: 10,
      },
      "<"
    );

    tl.to(
      containerMRef.current,
      {
        height: "100px",
        duration: 1,
        ease: "power2.out",
      },
      0
    );
  };

  // useEffect: Controls landing image opacity based on current route
  useEffect(() => {
    // Helper function to check if the current path is valid for showing the landing image
    const isValidPath = () => {
      const validPaths = ["/", "/blog"]; // Only show on home and blog
      return validPaths.includes(pathname);
    };

    if (!isValidPath()) {
      setImageOpacity(0); // Hide desktop landing image if not valid path
      setImageMOpacity(0); // Hide mobile landing image if not valid path
    } else {
      setImageOpacity(1); // Show desktop landing image
      setImageMOpacity(1); // Show mobile landing image
    }
  }, [pathname]); // Runs whenever the route changes

  // useEffect: Plays animation if not on home page (direct route)
  useEffect(() => {
    const isDirectRoute = pathname !== "/" && pathname !== ""; // Check if not home

    if (isDirectRoute && !animationPlayed.current) {
      // If animation hasn't played and not on home, play animation
      const timer = setTimeout(() => {
        if (window.innerWidth >= 1024) {
          playAnimation(); // Play desktop animation
        } else {
          playMobileAnimation(); // Play mobile animation
        }
      }, 0); // Run after render

      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [pathname]); // Runs when route changes

  // useEffect: Adds global event listeners for scroll, click, and keydown to trigger animation
  useEffect(() => {
    if (!animationPlayed.current) {
      // Handler to trigger animation and prevent scroll
      const handleScroll = (e) => {
        if (!animationPlayed.current) {
          e.preventDefault(); // Prevent the page from scrolling
          if (window.innerWidth >= 1024) {
            playAnimation();    // Play desktop animation
          } else {
            playMobileAnimation(); // Play mobile animation
          }
        }
      };

      // Handler for click anywhere on screen
      const handleClick = (e) => {
        if (!animationPlayed.current) {
          if (window.innerWidth >= 1024) {
            playAnimation();    // Play desktop animation
          } else {
            playMobileAnimation(); // Play mobile animation
          }
        }
      };

      // Listen for wheel (mouse/touchpad) and touchmove (mobile) events
      window.addEventListener("wheel", handleScroll, { passive: false });
      window.addEventListener("touchmove", handleScroll, { passive: false });
      // Add click event listener
      window.addEventListener("click", handleClick);

      return () => {
        window.removeEventListener("wheel", handleScroll);
        window.removeEventListener("touchmove", handleScroll);
        window.removeEventListener("click", handleClick);
      };
    }
  }, [animationPlayed.current]);

  // useEffect: Animates dropdown menu when opened
  useEffect(() => {
    if (dropdownOpen && dropdownRef.current) {
      // Animate dropdown menu in with GSAP
      gsap.fromTo(
        dropdownRef.current,
        {
          opacity: 0, // Start transparent
          y: -10, // Start slightly above
        },
        {
          opacity: 1, // Fade in
          y: 0, // Move to position
          duration: 0.2, // Animation duration
          ease: "power2.out", // Easing
        }
      );
    }
  }, [dropdownOpen]); // Runs when dropdownOpen changes

  // useEffect: Animates landing image position on scroll (desktop)
  useEffect(() => {
    // Function to handle scroll event
    const handleScroll = () => {
      if (animationPlayed.current && window.scrollY > 0) {
        // If animation played and user scrolled down
        gsap.to(landingImageRef.current, {
          top: -150, // Move image up
          duration: 0.1, // Instantly
          ease: "power1.inOut",
        });
      } else {
        // If at top, animate image to normal position
        gsap.to(landingImageRef.current, {
          top: 100, // Move image down
          duration: 0.3, // Animate smoothly
          ease: "power1.inOut",
        });
      }
    };

    // Add event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup: Remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [animationPlayed]); // Runs when animationPlayed changes

 

  // useEffect: Closes dropdown menu when clicking outside
  useEffect(() => {
    // Function to handle click outside dropdown
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest("button")
      ) {
        setDropdownOpen(false); // Close dropdown
      }
    };

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside); // Listen for outside clicks
    }

    // Cleanup: Remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]); // Runs when dropdownOpen changes

  // useEffect: Scrolls to contact section after navigation
  useEffect(() => {
    if (scrollToSection && pathname === "/") {
      setTimeout(() => {
        const section = document.getElementById("contact-section"); // Find contact section
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // Scroll to it
        }
        setScrollToSection(false); // Reset flag
      }, 100); // Wait 100ms for DOM update
      setScrollToSection(false); // Reset flag
    }
  }, [pathname, scrollToSection]); // Runs when path or scrollToSection changes

  // useEffect: Shows content immediately if animation already played
  useEffect(() => {
    if (animationPlayed.current) setShowContent(true); // Show content if animation done
  }, []); // Runs once on mount

  // useEffect: Always scroll to top on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scrollTo(0, 0); // Scroll to top
    }
  }, []); // Runs once on mount

  // useEffect: Limit scroll before animation
  useEffect(() => {
    if (!animationPlayed.current) {
      const handleScroll = () => {
        // If user scrolls more than 100px, reset to 100px
        if (window.scrollY > 100) {
          window.scrollTo({ top: 100, behavior: "smooth" });
        }
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, [animationPlayed.current]);

  // useEffect: Trigger animation on key press
  useEffect(() => {
    if (!animationPlayed.current) {
      const handleKey = (e) => {
        e.preventDefault();
        if (window.innerWidth >= 1024) {
          playAnimation();
        } else {
          playMobileAnimation();
        }
      };
      window.addEventListener("keydown", handleKey, { passive: false });
      return () => window.removeEventListener("keydown", handleKey);
    }
  }, [animationPlayed.current]);

  // Rename the function to handleScrollToSection
  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="fixed top-0 left-0 w-full h-screen z-[9999] bg-[#0a0a0a] headerbg hidden lg:block"
      >
        <div
          ref={headerRef}
          className="fixed top-0 left-0 right-0 w-full h-[100px]"
        >
          <div className="w-full bg-[#0a0a0a] headerbg">
            <div className="headerbg w-[100%] flex items-center justify-between py-12 header">
              <div className="w-[120px] opacity-0"></div>

              <div
                ref={navigationRef}
                className="absolute left-1/6 z-100"
                style={{ opacity: 0 }}
              >
                <nav
                  ref={navRef}
                  className="relative bg-[#181818F0] rounded-xl z-10"
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="absolute bg-gradient-to-r from-[#D9D9D924] to-[#14131324] rounded-xl border border-[#4B4A4A] "
                    style={highlightStyle}
                  />

                  <div className="relative flex xl:gap-5">
                    {navItems.map((item) => (
                      <div key={item.id} className="relative">
                        {item.dropdown ? (
                          <button
                            onClick={() => toggleDropdown(item)}
                            onMouseEnter={handleMouseEnter}
                            className={`text-nowrap font-actayRegular text-center text-sm xl:text-base px-4 xl:px-6 py-3 rounded-xl text-white relative z-10 cursor-pointer flex items-center gap-1 ${item.path && isActiveRoute(item.path)
                              ? "bg-gradient-to-r from-[#D9D9D924] to-[#14131324] rounded-xl border border-[#4B4A4A]"
                              : "transparent"
                              }`}
                          >
                            {item.label}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
                                }`}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          </button>
                        ) : item.external ? (
                          <Link
                            href={item.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            onMouseEnter={handleMouseEnter}
                            className="text-nowrap font-actayRegular text-center text-sm xl:text-base px-4 xl:px-6 py-3 rounded-xl text-white relative z-10 cursor-pointer flex items-center gap-1"
                          >
                            {item.label}
                          </Link>
                        ) : item.label === "Contact Us" ? (
                          <button
                            onClick={handleClick}
                            onMouseEnter={handleMouseEnter}
                            className="text-nowrap font-actayRegular text-center text-sm xl:text-base px-4 xl:px-6 py-3 rounded-xl text-white relative z-10 cursor-pointer flex items-center gap-1"
                          >
                            {item.label}
                          </button>
                        ) : (
                          <Link
                            href={item.path}
                            passHref
                            onMouseEnter={handleMouseEnter}
                            onClick={() =>
                              handleMenuItemClick(
                                item.path,
                                item.dropdown ?? false,
                                item.external,
                                item.label === "Contact Us"
                              )
                            }
                            className="text-nowrap font-actayRegular text-center text-sm xl:text-base px-4 xl:px-6 py-3 rounded-xl text-white relative z-10 cursor-pointer flex items-center gap-1"
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
              {animationCompleted && (
                <div className="absolute right-10">
                  <Link href="https://app.triggerx.network" target="_blank">
                    <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform">
                      <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                      <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                      <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                        Start Building
                      </span>
                    </button>
                  </Link>
                </div>
              )}
            </div>
          </div>

          <div className="w-[100%] px-20 flex flex-col items-center my-[150px] md:my-[100px] relative">
            <div
              onClick={handleLogoClick}
              className={`relative w-full ${animationCompleted ? "cursor-pointer" : ""
                }`}
            >
              <Link href="/">
                <Image
                  ref={mainLogoRef}
                  src={logo}
                  alt="TriggerX Logo"
                  priority
                  className="w-full absolute"
                />
              </Link>
            </div>

            <Image
              ref={landingImageRef}
              src={landing}
              alt="landing"
              priority
              style={{ opacity: imageMOpacity }}
              className="xl:w-[650px] lg:w=[500px] md:w-[400px] absolute sm:top-10 top-0 md:top-6 lg:top-6 xl:top-24"
            />
          </div>

          {!animationCompleted && (
            <div
              ref={arrowRef}
              onClick={handleArrowDown}
              className="fixed right-5 bottom-10 md:right-10 md:bottom-20 z-50 flex flex-col items-center "
            >
              <div className="circular-text-container">
                <div className="scroll-arrow border border-white rounded-full p-2 md:p-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 md:h-8 md:w-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 13l-5 5m0 0l-5-5m5 5V6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        ref={containerMRef}
        className={`relative h-screen w-full block lg:hidden ${!MobileAnimationCompleted ? 'bg-[#0a0a0a] headerbg' : ''}`}
      >
        <div
          ref={headerMRef}
          className="fixed top-0 left-0 right-0 w-full h-[100px]"
        >
          <div className="w-full bg-[#0a0a0a] headerbg">
            <div className="w-[100%] px-10 flex justify-end gap-3 items-center py-10 header lg:hidden">
              <div className="relative  items-center gap-5 ">
                <div className="flex-shrink-0 relative z-10 text-sm sm:hidden hidden md:flex"></div>
              </div>
              <div
                className="flex-shrink-0 relative z-10 "
                ref={navigationMRef}
                style={{ opacity: 0 }}
              >
                <div className="lg:hidden">
                  <h4
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="text-white text-2xl cursor-pointer"
                  >
                    {menuOpen ? "✖" : "☰"}
                  </h4>
                  {menuOpen && (
                    <div className="absolute top-full right-0 mt-3 bg-[#181818] p-4 rounded-md shadow-lg z-10 md:w-[20rem] w-60 lg:hidden">
                      <nav ref={navRef} className="relative">
                        <div
                          className="absolute bg-gradient-to-r from-[#D9D9D924] to-[#14131324] rounded-xl border border-[#4B4A4A] opacity-0"
                          style={highlightStyle}
                        />

                        <div className="flex flex-col gap-4">
                          {navItems.map((item) => (
                            <div
                              ref={dropdownRef}
                              key={item.id}
                              className="relative "
                            >
                              {item.dropdown ? (
                                <button
                                  key={item.id}
                                  onClick={() => {
                                    handleMenuItemClick(
                                      item.path,
                                      item.dropdown ?? false,
                                      item.external
                                    );
                                  }}
                                  className={`font-actayRegular text-sm sm:text-sm px-7 py-3 rounded-xl relative z-10 cursor-pointer flex items-center gap-1 hover:bg-[#282828] w-full ${item.path && isActiveRoute(item.path)
                                      ? "text-white"
                                      : "text-gray-400"
                                    }`}
                                >
                                  {item.label}

                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : "rotate-0"
                                      }`}
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                  </svg>
                                </button>
                              ) : item.external ? (
                                <a
                                  href={item.path}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  onClick={() => setMenuOpen(false)}
                                  className="font-actayRegular text-sm
                                   sm:text-sm
                      px-7 py-3 rounded-xl
                          relative z-10 cursor-pointer flex items-center gap-1 hover:bg-[#282828] w-full"
                                >
                                  {item.label}
                                </a>
                              ) : item.label === "Contact Us" ? (
                                <button
                                  onClick={() => {
                                    handleClick();
                                    setMenuOpen(false);
                                  }}
                                  className={`text-nowrap font-actayRegular text-center text-sm xl:text-base   px-7 py-3 rounded-xl text-white relative z-10 cursor-pointer flex items-center gap-1 ${item.path && isActiveRoute(item.path)
                                    ? "text-white"
                                    : "text-gray-400"
                                    }`}
                                >
                                  {item.label}
                                </button>
                              ) : (
                                <Link
                                  href={item.path}
                                  target="_blank"
                                  onClick={() => {
                                    setMenuOpen(false);
                                  }}
                                  className={`text-nowrap font-actayRegular text-center text-sm xl:text-base px-7 py-3 rounded-xl text-white relative z-10 cursor-pointer flex items-center gap-1 ${item.path && isActiveRoute(item.path)
                                    ? "text-white"
                                    : "text-gray-400"
                                    }`}
                                >
                                  {item.label}
                                </Link>
                              )}
                              {item.dropdown && dropdownOpen && (
                                <div
                                  ref={dropdownRef}
                                  className="bg-[#202020] mt-2 text-xs sm:text-sm rounded-md shadow-lg border border-[#4b4a4a]"
                                >
                                  <div className="py-2 px-4 flex flex-col">
                                    <a
                                      href="https://app.triggerx.network/"
                                      target="_blank"
                                      onClick={() => setMenuOpen(false)}
                                      className="font-actayRegular block px-4 py-2 text-white hover:bg-[#282828] rounded-[8px] text-sm"
                                    >
                                      Build
                                    </a>
                                    <a
                                      href="https://triggerx.gitbook.io/triggerx-docs/join-as-keeper"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      onClick={() => setMenuOpen(false)}
                                      className="text-sm font-actayRegular block px-4 py-2 text-white hover:bg-[#282828] rounded-[8px]"
                                    >
                                      Join As Keeper
                                    </a>
                                  </div>
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                        {MobileAnimationCompleted && (
                          <div className=" px-5 py-3">
                            <Link
                              href="https://app.triggerx.network/"
                              target="_blank"
                            >
                              <button className="relative bg-[#222222] text-[#000000] border border-[#222222] px-6 py-2 sm:px-8 sm:py-3 rounded-full group transition-transform w-full">
                                <span className="absolute inset-0 bg-[#222222] border border-[#FFFFFF80]/50 rounded-full scale-100 translate-y-0 transition-all duration-300 ease-out group-hover:translate-y-2"></span>
                                <span className="absolute inset-0 bg-[#F8FF7C] rounded-full scale-100 translate-y-0 group-hover:translate-y-0"></span>
                                <span className="font-actayRegular relative z-10 px-0 py-3 sm:px-3 md:px-6 lg:px-2 rounded-full translate-y-2 group-hover:translate-y-0 transition-all duration-300 ease-out text-xs sm:text-base">
                                  Start Building
                                </span>
                              </button>
                            </Link>
                          </div>
                        )}
                      </nav>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="w-[100%] px-20 flex sm:my-[100px]  md:my-[100px] lg:my-[100px] my-[100px]  items-center flex-col relative">
            <div className="w-full relative">
              <Image
                ref={mainLogoMRef}
                src={logo}
                alt="TriggerX Logo"
                className="w-full "
              />
            </div>

            <Image
              ref={landingImageMRef}
              src={landing}
              alt="Landing illustration"
              className="md:w-[450px] xs:w-[200px] w-[140px] absolute top-5 md:top-6"
            />
          </div>
          {!MobileAnimationCompleted && (
            <div
              ref={arrowRef}
              onClick={handleArrowClick}
              className="fixed inset-x-0 bottom-10 z-50 flex flex-col items-center md:hidden"
            >
              <div className="scroll-arrow circular-text-container flex items-center flex-col ">
                <div className="border-none p-2 md:p-3">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.0001 10.7918L5.47925 14.021C5.20147 14.2154 4.91341 14.2396 4.61508 14.0935C4.31675 13.9474 4.1673 13.701 4.16675 13.3543C4.16675 13.2154 4.19814 13.0835 4.26091 12.9585C4.32369 12.8335 4.41036 12.7362 4.52091 12.6668L10.0001 8.75014L15.4792 12.6668C15.5904 12.7362 15.6773 12.8335 15.7401 12.9585C15.8029 13.0835 15.834 13.2154 15.8334 13.3543C15.8334 13.6876 15.6842 13.9307 15.3859 14.0835C15.0876 14.2362 14.7992 14.2154 14.5209 14.021L10.0001 10.7918ZM10.0001 5.83347L5.47925 9.06264C5.20147 9.25708 4.91341 9.28153 4.61508 9.13597C4.31675 8.99041 4.1673 8.74347 4.16675 8.39514C4.16675 8.25625 4.19814 8.1243 4.26091 7.9993C4.32369 7.8743 4.41036 7.77708 4.52091 7.70764L10.0001 3.7918L15.4792 7.70847C15.5904 7.77791 15.6773 7.87514 15.7401 8.00014C15.8029 8.12514 15.834 8.25708 15.8334 8.39597C15.8334 8.7293 15.6842 8.97236 15.3859 9.12514C15.0876 9.27791 14.7992 9.25708 14.5209 9.06264L10.0001 5.83347Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div>Swipe Up</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;