import React from "react";

const LocalBusiness = () => {
  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Zoro Couture",
    image: "https://zorocouture.com/logo2.png",
    description:
      "Atelier de couture professionnel à Goma, spécialisé dans la conception des costumes et vestes sur mesure",
    address: {
      "@type": "00000",
      streetAddress: "Himbi",
      addressLocality: "Goma",
      addressRegion: "Nord-Kivu",
      addressCountry: "RDC",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-1.6777",
      longitude: "29.2285",
    },
    url: "https://zorocouture.com",
    telephone: "+243 994 068 185",
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    sameAs: [
      "https://www.facebook.com/johnsongs",
      "https://www.facebook.com/johnsongs",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
    />
  );
};

export default LocalBusiness;
