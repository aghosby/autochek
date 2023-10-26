/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ['media.autochek.africa'],
    },
}

module.exports = nextConfig
