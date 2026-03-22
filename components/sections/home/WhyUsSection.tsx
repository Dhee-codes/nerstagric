import Link from "next/link";

const reasons = [
  {
    title: "From Concept to Harvest",
    body: "We bridge the critical gap between theoretical business plans and thriving, on-ground farm operations. At NerstAgric, we don't just provide high-level advice; we specialize in the direct implementation of your projects.",
  },
  {
    title: "Scalable Agribusiness Solutions",
    body: "Our strategies are designed to grow with you, regardless of your entry point. Whether you are an individual investor looking for a boutique farm establishment or a large-scale organization seeking to expand industrial operations.",
  },
  {
    title: "Value Chain Optimization",
    body: "We maintain a deep focus on the 'Big Picture' to ensure long-term profitability and operational excellence. By analyzing and optimizing every link in the chain, our data-driven solutions help you adapt to market needs.",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="w-full font-urbanist px-10 py-17 md:px-22 md:py-30 lg:px-27.75 lg:py-36.75">
      <h2 className="text-[1.6rem] sm:text-[2rem] md:text-[2.2rem] lg:text-[2.585rem] leading-10 md:leading-14.75 font-medium text-center mb-10.75">
        Unlocking Agricultural Excellence: Your Path to Sustainable Growth with
        NerstAgric
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 mb-33.25">
        {reasons.map((reason) => (
          <div key={reason.title} className="flex flex-col">
            <div
              className="w-16 md:w-22 lg:w-26 h-0.75 bg-primary-light mb-4 sm:mb-6 md:mb-8.25"
              aria-hidden="true"
            />
            <h3 className="text-[1rem] md:text-[1.25rem] leading-6 md:leading-[31.96px] font-bold mb-2.25">
              {reason.title}
            </h3>
            <p className="text-[0.95rem] md:text-[1.125rem] leading-5 tracking-[1px] font-medium">
              {reason.body}
            </p>
          </div>
        ))}
      </div>

      {/* CTA button */}
      <div className="flex justify-center mt-12">
        <Link
          href="/contact"
          className="max-sm:w-full bg-primary-light hover:bg-accent text-white px-9 py-2.5 rounded-[13px] text-[0.95rem] md:text-[1.125rem] leading-7.25 font-medium text-center transition-colors"
        >
          Book a Free 30-Minute Consultation
        </Link>
      </div>
    </section>
  );
};