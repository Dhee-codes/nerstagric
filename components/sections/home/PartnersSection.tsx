const partners = [
  { name: "Partner 1", logo: "/images/partners/partner1.png" },
  { name: "Partner 2", logo: "/images/partners/partner2.png" },
  { name: "Partner 3", logo: "/images/partners/partner3.png" },
  { name: "Partner 4", logo: "/images/partners/partner4.png" },
  { name: "Partner 5", logo: "/images/partners/partner5.png" },
];

import Image from "next/image";

export const PartnersSection = () => {
  return (
    <section className="w-full px-8 sm:px-14 md:px-20 lg:px-26.25 py-16 border-t border-gray-100">
      <h2 className="text-text-main text-2xl font-semibold text-center mb-12">
        Our Clients & Partners
      </h2>

      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        {partners.map((partner) => (
          <div
            key={partner.name}
            className="relative w-24 h-12 grayscale hover:grayscale-0 transition-all"
          >
            <Image
              src={partner.logo}
              alt={partner.name}
              fill
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};
