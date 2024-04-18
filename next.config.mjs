/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL
  },
  compiler: {
    styledComponents: true
  }
}

export default nextConfig
