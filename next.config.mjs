// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   experimental: {
//     appDir: true,
//   },
//   output: "export", 
//   images: {
//     unoptimized: true, 
//   }
// };

// export default nextConfig;



/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // This is fine if you're using the app directory (for Next.js 13+)
  },
  images: {
    unoptimized: true, // Keep this if you don't want Next.js to optimize images
  },
};

export default nextConfig;