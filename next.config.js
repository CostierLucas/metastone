/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  
  typescript: {
    ignoreBuildErrors: true,
  },
  rules: {
    "react/no-unknown-property": ["error", { ignore: ["jsx"] }],
  },
}

module.exports = nextConfig
