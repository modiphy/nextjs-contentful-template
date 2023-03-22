/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.ctfassets.net"],
  },

  // Set language of the site for accessibility
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  experimental: {
    appDir: true
  }
};

module.exports = nextConfig;
