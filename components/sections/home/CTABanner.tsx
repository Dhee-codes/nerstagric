import Image from "next/image";
import Link from "next/link";

export const CTABanner = () => {
  return (
    <section className="relative w-full min-h-64 flex items-center justify-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/cta-banner.jpg"
        alt="Agricultural field"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-primary-dark/80" aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-8 py-16 text-center">
        <p className="text-white/80 text-sm">Ready to Begin Your Journey?</p>
        <h2 className="text-white text-2xl md:text-3xl font-bold">
          Ready to Transform Your Agribusiness?
        </h2>
        <Link
          href="/contact"
          className="mt-4 bg-primary hover:bg-primary-light text-white px-8 py-3 rounded-full text-sm font-medium transition-colors"
        >
          Book a Free 30-Minute Consultation
        </Link>
      </div>
    </section>
  );
};
