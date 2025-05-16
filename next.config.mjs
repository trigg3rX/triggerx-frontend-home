/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"], // Add 'cdn.sanity.io' to the domains array
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
