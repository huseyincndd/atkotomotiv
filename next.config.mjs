/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'villaqrmenu.b-cdn.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.autotrimdev.com',
        pathname: '**',
      },
    ],
    domains: ['segeseat.com', 'images.unsplash.com', 'villaqrmenu.b-cdn.net', 'www.autotrimdev.com'],
  },
};

export default nextConfig;
