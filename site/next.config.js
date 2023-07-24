/** @type {import('next').NextConfig} */

const nextConfig = {
  env: {
    name: 'Lostlooper Technologies',
    description: 'Lostlooper Technologies for Kasm supported workspaces.',
    icon: '/img/logo.svg',
    listUrl: 'https://journeyman32.github.io/kasm-registry/',
    contactUrl: 'https://github.com/journeyman32/kasm-registry/issues',
  },
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/kasm-registry/1.0',
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
