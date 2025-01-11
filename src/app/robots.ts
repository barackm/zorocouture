import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    host: "https://zorocouture.com",
    sitemap: "https://zorocouture.com/sitemap.xml",
  };
}
