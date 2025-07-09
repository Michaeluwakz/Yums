import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
      {
        protocol: 'https',
        hostname: 'i0.wp.com',
      },
      {
        protocol: 'https',
        hostname: 'www.foodandwine.com',
      },
      {
        protocol: 'https',
        hostname: 'yellowchilis.com',
      },
      {
        protocol: 'https',
        hostname: 'homesteading.com',
      },
      {
        protocol: 'https',
        hostname: 'boondockingrecipes.com',
      },
      {
        protocol: 'https',
        hostname: 'img.hellofresh.com',
      },
      {
        protocol: 'https',
        hostname: 'ichef.bbc.co.uk',
      },
      {
        protocol: 'https',
        hostname: 'belquistwist.com',
      },
      {
        protocol: 'https',
        hostname: 'static.wixstatic.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.unileversolutions.com',
      },
      {
        protocol: 'https',
        hostname: 'static.vecteezy.com',
      },
      {
        protocol: 'https',
        hostname: 'staycreative.blog',
      },
      {
        protocol: 'https',
        hostname: 'www.marthastewart.com',
      },
      {
        protocol: 'https',
        hostname: 'www.thespicedchickpea.com',
      },
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
      {
        protocol: 'https',
        hostname: 'ogden-images.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
      },
      {
        protocol: 'https',
        hostname: 'thumbs.dreamstime.com',
      },
    ],
  },
};

export default nextConfig;
