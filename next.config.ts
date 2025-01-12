/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "www.zorocouture.com",
          },
        ],
        destination: "https://zorocouture.com/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "zorocouture.com",
          },
        ],
        missing: [
          {
            type: "header",
            key: "x-forwarded-proto",
            value: "https",
          },
        ],
        destination: "https://zorocouture.com/:path*",
        permanent: true,
      },
      {
        source: "/:path+/",
        destination: "/:path+",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/portfolio.html",
        destination: "/portfolio",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
