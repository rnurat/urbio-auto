import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://auto.urbio.tech/sitemap.xml",
    host: "https://auto.urbio.tech",
  }
}
