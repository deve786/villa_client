/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.sanity.io'], // Add "cdn.sanity.io" to the list of allowed domains for images
  },
};

export default nextConfig;