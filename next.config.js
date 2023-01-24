/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/daisy",
        destination: "/nostr",
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
